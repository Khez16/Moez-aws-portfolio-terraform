provider "aws" {
  region = "ca-central-1"
}

# S3 bucket for website
resource "aws_s3_bucket" "website_bucket" {
  bucket = "moez-terraform-static-site-12345"
  tags = {
    Name        = "MyWebsiteBucket"
    Environment = "Dev"
  }
}

# Disable ACLs - bucket owner enforced
resource "aws_s3_bucket_ownership_controls" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

# Block public access since CloudFront will access privately
resource "aws_s3_bucket_public_access_block" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Bucket policy to allow CloudFront OAC access
resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.website_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
  
  depends_on = [aws_s3_bucket_public_access_block.website_bucket]
}

# Upload all files from dist/ folder
resource "aws_s3_object" "website_files" {
  for_each = fileset("${path.module}/site/dist", "**")
  bucket = aws_s3_bucket.website_bucket.id
  key    = each.value
  source = "${path.module}/site/dist/${each.value}"
  
  content_type = lookup(
    {
      "html" = "text/html"
      "css"  = "text/css"
      "js"   = "application/javascript"
      "json" = "application/json"
      "png"  = "image/png"
      "jpg"  = "image/jpeg"
      "jpeg" = "image/jpeg"
      "gif"  = "image/gif"
      "svg"  = "image/svg+xml"
      "ico"  = "image/x-icon"
      "mp4"  = "video/mp4"
      "webp" = "image/webp"
      "woff" = "font/woff"
      "woff2" = "font/woff2"
      "ttf"  = "font/ttf"
      "eot"  = "application/vnd.ms-fontobject"
      "glb"  = "model/gltf-binary"
    },
    reverse(split(".", each.value))[0],
    "application/octet-stream"
  )
  
  etag = filemd5("${path.module}/site/dist/${each.value}")
}

output "cloudfront_url" {
  value = "https://${aws_cloudfront_distribution.s3_distribution.domain_name}"
  description = "CloudFront Distribution URL (HTTPS)"
}

output "bucket_name" {
  value = aws_s3_bucket.website_bucket.id
}