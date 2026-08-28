import React, { useEffect, useRef } from 'react';

export default function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#8B5CF6', '#A855F7', '#3B82F6', '#22D3EE', '#FFFFFF', '#E0E7FF'];

    // 1. Floating dust particles with subtle connecting lines
    const particleCount = Math.min(Math.floor(width / 24), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.1
      });
    }

    // 2. High-Density Twinkling Star Sparkles (90 Stars)
    const starCount = 90;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.9,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        growing: Math.random() > 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        isCross: Math.random() > 0.4
      });
    }

    // Helper to draw a glowing 4-point star sparkle
    const drawStarSparkle = (x, y, radius, color, alpha, rotation, isCross) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.shadowColor = color;
      ctx.shadowBlur = radius * 3;

      ctx.beginPath();
      const points = isCross ? 4 : 5;
      const innerRadius = radius * 0.25;

      for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? radius : innerRadius;
        const angle = (i * Math.PI) / points;
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Render floating dust particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // Render 90 Twinkling Star Sparkles
      stars.forEach((s) => {
        s.rotation += s.rotSpeed;

        // Twinkle pulsating opacity logic
        if (s.growing) {
          s.alpha += s.twinkleSpeed;
          if (s.alpha >= 0.95) s.growing = false;
        } else {
          s.alpha -= s.twinkleSpeed;
          if (s.alpha <= 0.05) {
            s.growing = true;
            // Relocate star randomly when it finishes fading
            s.x = Math.random() * width;
            s.y = Math.random() * height;
          }
        }

        drawStarSparkle(s.x, s.y, s.size, s.color, Math.max(0, s.alpha), s.rotation, s.isCross);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
}
