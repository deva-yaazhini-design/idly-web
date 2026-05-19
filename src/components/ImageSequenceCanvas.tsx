"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceCanvasProps {
  frameCount?: number;
  className?: string;
}

export default function ImageSequenceCanvas({
  frameCount = 192,
  className,
}: ImageSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Playhead object for GSAP to animate
  const playhead = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Build image array
    const imgs: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format: 3d-00001.jpg
      const idx = i.toString().padStart(5, "0");
      img.src = `/images/sequence/3d-${idx}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setLoaded(true);
          renderFrame(0);
        }
      };
      
      imgs.push(img);
    }
    setImages(imgs);

    // Canvas resize logic
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(playhead.current.frame);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing

    function renderFrame(index: number) {
      if (!imgs[index] || !canvas || !ctx) return;
      
      const img = imgs[index];
      // Cover logic
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    // ScrollTrigger setup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Scroll distance
        scrub: 0.5,
        pin: true,
      }
    });

    tl.to(playhead.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => renderFrame(playhead.current.frame),
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [frameCount]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-screen bg-surface", className)}>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface">
          <div className="text-primary font-display text-2xl animate-pulse">Loading Cinematic Experience</div>
          <div className="w-64 h-1 bg-border rounded-full mt-4 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      />
      
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface/90 pointer-events-none" />
    </div>
  );
}
