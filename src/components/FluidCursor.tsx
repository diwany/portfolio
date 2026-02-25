"use client";

import { useEffect } from "react";
import useFluidCursor from "@/hooks/useFluidCursor";

export default function FluidCursor() {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas id="fluid" className="w-full h-full" />
    </div>
  );
}
