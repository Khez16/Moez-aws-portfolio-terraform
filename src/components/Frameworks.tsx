import { OrbitingCircles } from "./OrbitingCicles";
import React from "react";

export function FrameWorks() {
  const Skills = [
    "auth0", "cplusplus", "csharp", "css3", "dotnet", "dotnetcore",
    "Java", "javascript", "Python", "react", "sqlite", "tailwindcss", "Typescript"
  ];

  const Tools = [
    "Unreal Engine", "Github", "VS", "Defender", "Bash", "Powershell",
    "eSentire", "SentinelOne", "VirusTotal", "Vlan", "Switch"
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      {/* First Orbiting Circle → Skills */}
      <OrbitingCircles iconSize={40}>
        {Skills.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>

      {/* Second Orbiting Circle → Tools */}
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {Tools.map((tool, index) => (
          <Icon key={index} name={tool} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

type IconProps = {
  name: string;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  // Try .svg first, fallback to .png
  const srcSvg = `assets/logos/${name}.svg`;
  const srcPng = `assets/logos/${name}.png`;

  return (
    <img
      src={srcSvg}
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src.endsWith(".svg")) {
          target.src = srcPng; // fallback to png if svg not found
        }
      }}
      className="duration-200 rounded-sm hover:scale-110"
      alt={`${name} logo`}
    />
  );
};
