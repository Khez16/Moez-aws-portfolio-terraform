# 1. Use an official Node.js image
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all project files
COPY . .

# 5. Build the portfolio (for production)
RUN npm run build

# 6. Expose port 3000
EXPOSE 3000

# 7. Start the server
CMD ["npm", "run", "start"]


#Meaning buld my app and serve it with nginx server inside a container

