"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function Page() {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-[250px]">
      <Progress
        value={progress}
        indicatorColor={cn({
          "bg-red-500": progress < 40,
          "bg-yellow-500": progress >= 40 && progress < 80,
          "bg-green-500": progress >= 80,
        })}
      />
    </div>
  );
}
