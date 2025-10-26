// Demo.tsx
"use client";

const Demo = () => {
  return (
    <div
      id="Demo"
      className="w-full flex justify-center items-center bg-black p-4"
    >
      {/* 
        Video Section
        - Place your video file inside the "public" folder of your project 
        - Example: public/gameplay.mp4 
        - The video will automatically play, loop, and stay muted
      */}
      <video
        className="w-full h-auto max-w-4xl rounded-2xl shadow-lg object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="GameDemo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Demo;
