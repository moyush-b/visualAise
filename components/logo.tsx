import { View } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <View className="stroke h-11 w-11 stroke-blue-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        visualAise
      </p>
    </Link>
  );
}

export function LogoMobile() {
  return (
    <Link href="/" className="flex items-center gap-2">
      
      <p className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        visualAise
      </p>
    </Link>
  );
}

export default Logo;
