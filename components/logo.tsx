import { View } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <View className="stroke h-11 w-11 stroke-blue-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        visualAise
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      
      <p className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        visualAise
      </p>
    </a>
  );
}

export default Logo;
