import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "house" | "key" | "diamond" | "dot";
  rotation: number;
  rotationSpeed: number;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 22));

    for (let i = 0; i < count; i++) {
      const types: Particle["type"][] = ["house", "key", "diamond", "dot"];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 18 + 8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2,
        opacity: Math.random() * 0.25 + 0.1,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
      });
    }

    const drawHouse = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      // roof
      ctx.moveTo(x - size, y);
      ctx.lineTo(x, y - size * 1.2);
      ctx.lineTo(x + size, y);
      // walls
      ctx.lineTo(x + size * 0.7, y);
      ctx.lineTo(x + size * 0.7, y + size);
      ctx.lineTo(x - size * 0.7, y + size);
      ctx.lineTo(x - size * 0.7, y);
      ctx.closePath();
      ctx.stroke();
      // door
      ctx.beginPath();
      ctx.rect(x - size * 0.2, y + size * 0.3, size * 0.4, size * 0.7);
      ctx.stroke();
    };

    const drawKey = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y - size * 0.5, size * 0.4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.1);
      ctx.lineTo(x, y + size);
      ctx.moveTo(x, y + size * 0.5);
      ctx.lineTo(x + size * 0.3, y + size * 0.5);
      ctx.moveTo(x, y + size * 0.8);
      ctx.lineTo(x + size * 0.3, y + size * 0.8);
      ctx.stroke();
    };

    const drawDiamond = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + size * 0.7, y);
      ctx.lineTo(x, y + size);
      ctx.lineTo(x - size * 0.7, y);
      ctx.closePath();
      ctx.stroke();
    };

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.strokeStyle = `hsla(40, 70%, 50%, ${p.opacity})`;
        ctx.lineWidth = 1;

        switch (p.type) {
          case "house":
            drawHouse(ctx, 0, 0, p.size);
            break;
          case "key":
            drawKey(ctx, 0, 0, p.size);
            break;
          case "diamond":
            drawDiamond(ctx, 0, 0, p.size);
            break;
          case "dot":
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(40, 70%, 50%, ${p.opacity})`;
            ctx.fill();
            break;
        }

        ctx.restore();

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;
      });

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(40, 70%, 50%, ${0.03 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesBackground;
