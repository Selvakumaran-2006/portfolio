import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { X, RotateCcw, Zap, Compass, Sparkles, Orbit, ArrowUp, ArrowDown, Move } from 'lucide-react';

export default function GravityCanvas({ onClose }) {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  const [gravityMode, setGravityMode] = useState('down'); // 'down' | 'zero' | 'up'
  const [objectCount, setObjectCount] = useState(0);

  const initialItems = [
    { label: 'Selva Kumaran G', color: '#4285F4', width: 160, height: 45 },
    { label: 'CSE Fresher', color: '#EA4335', width: 130, height: 45 },
    { label: 'Java 4★', color: '#FBBC05', width: 110, height: 40 },
    { label: 'React.js', color: '#34A853', width: 110, height: 40 },
    { label: 'Node.js', color: '#38bdf8', width: 110, height: 40 },
    { label: 'MongoDB', color: '#818cf8', width: 120, height: 40 },
    { label: 'Express.js', color: '#c084fc', width: 120, height: 40 },
    { label: '8.25 CGPA', color: '#4285F4', width: 120, height: 40 },
    { label: '100% SSLC', color: '#EA4335', width: 120, height: 40 },
    { label: '2 Patents', color: '#FBBC05', width: 130, height: 45 },
    { label: '1 Paper IJRPA', color: '#34A853', width: 140, height: 45 },
    { label: '460+ LeetCode', color: '#38bdf8', width: 150, height: 45 },
    { label: 'Expense Tracker', color: '#818cf8', width: 160, height: 50 },
    { label: 'Study Scheduler', color: '#c084fc', width: 160, height: 50 },
    { label: 'S3 Remotica', color: '#4285F4', width: 130, height: 40 },
    { label: 'Viruzverse', color: '#EA4335', width: 130, height: 40 },
    { label: 'VSB Engineering', color: '#FBBC05', width: 160, height: 45 }
  ];

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Body } = Matter;

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 }
    });
    engineRef.current = engine;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'rgba(3, 7, 18, 0.92)'
      }
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Wall boundaries (Floor, Ceiling, Left, Right)
    const thickness = 100;
    const floor = Bodies.rectangle(width / 2, height + thickness / 2 - 10, width * 2, thickness, {
      isStatic: true,
      render: { fillStyle: '#1e293b' }
    });
    const ceiling = Bodies.rectangle(width / 2, -thickness / 2, width * 2, thickness, {
      isStatic: true,
      render: { fillStyle: '#1e293b' }
    });
    const leftWall = Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, {
      isStatic: true,
      render: { fillStyle: '#1e293b' }
    });
    const rightWall = Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, {
      isStatic: true,
      render: { fillStyle: '#1e293b' }
    });

    Composite.add(engine.world, [floor, ceiling, leftWall, rightWall]);

    // Create physics boxes with customized canvas rendering
    const bodies = initialItems.map((item, idx) => {
      const x = Math.random() * (width - 200) + 100;
      const y = Math.random() * (height / 2);

      const body = Bodies.rectangle(x, y, item.width, item.height, {
        restitution: 0.75, // Bouncy!
        friction: 0.1,
        frictionAir: 0.01,
        render: {
          fillStyle: item.color,
          strokeStyle: '#ffffff',
          lineWidth: 1
        }
      });
      body.customLabel = item.label;
      return body;
    });

    Composite.add(engine.world, bodies);
    setObjectCount(bodies.length);

    // Add mouse drag capability
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: true, strokeStyle: '#38bdf8' }
      }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Custom Canvas Render Pass for Text Labels & Glass Aesthetics
    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      const allBodies = Composite.allBodies(engine.world);

      allBodies.forEach((b) => {
        if (b.customLabel) {
          context.save();
          context.translate(b.position.x, b.position.y);
          context.rotate(b.angle);

          // Draw pill rounded background
          context.fillStyle = b.render.fillStyle || '#4285F4';
          context.shadowColor = b.render.fillStyle;
          context.shadowBlur = 15;
          
          const w = b.bounds.max.x - b.bounds.min.x;
          const h = b.bounds.max.y - b.bounds.min.y;
          const r = Math.min(w, h) / 2;

          context.beginPath();
          context.roundRect(-w / 2, -h / 2, w, h, 12);
          context.fill();
          context.strokeStyle = 'rgba(255,255,255,0.4)';
          context.lineWidth = 2;
          context.stroke();

          // Draw Text
          context.fillStyle = '#ffffff';
          context.font = 'bold 14px "Outfit", sans-serif';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.shadowBlur = 0;
          context.fillText(b.customLabel, 0, 0);

          context.restore();
        }
      });
    });

    // Clean up on unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  // Control Functions
  const setGravity = (type) => {
    setGravityMode(type);
    if (!engineRef.current) return;
    if (type === 'down') {
      engineRef.current.gravity.y = 1;
    } else if (type === 'zero') {
      engineRef.current.gravity.y = 0;
    } else if (type === 'up') {
      engineRef.current.gravity.y = -1;
    }
  };

  const explode = () => {
    if (!engineRef.current) return;
    const bodies = Matter.Composite.allBodies(engineRef.current.world);
    bodies.forEach((b) => {
      if (!b.isStatic) {
        const forceMagnitude = 0.05 * b.mass;
        Matter.Body.applyForce(b, b.position, {
          x: (Math.random() - 0.5) * forceMagnitude,
          y: (Math.random() - 0.7) * forceMagnitude
        });
      }
    });
  };

  const addMoreTech = () => {
    if (!engineRef.current) return;
    const { Bodies, Composite } = Matter;
    const newItems = ['Docker', 'TypeScript', 'GraphQL', 'Tailwind', 'Next.js', 'PySpark', 'AWS Cloud'];
    const label = newItems[Math.floor(Math.random() * newItems.length)];
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#38bdf8', '#818cf8', '#c084fc'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const x = Math.random() * (window.innerWidth - 200) + 100;
    const body = Bodies.rectangle(x, 100, 130, 45, {
      restitution: 0.8,
      render: { fillStyle: color }
    });
    body.customLabel = label;

    Composite.add(engineRef.current.world, body);
    setObjectCount((prev) => prev + 1);
  };

  return (
    <div id="gravity-canvas-container" className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 animate-fadeIn">
      
      {/* Top Interactive Controls Toolbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-wrap items-center gap-2 bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl px-5 py-3 rounded-full shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mr-2 border-r border-slate-700 pr-3">
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
          <span>GOOGLE GRAVITY PHYSICS</span>
          <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-[10px]">{objectCount} BODIES</span>
        </div>

        <button
          onClick={() => setGravity('down')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
            gravityMode === 'down' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <ArrowDown className="w-3.5 h-3.5" /> Normal
        </button>

        <button
          onClick={() => setGravity('zero')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
            gravityMode === 'zero' ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Move className="w-3.5 h-3.5" /> Zero-G
        </button>

        <button
          onClick={() => setGravity('up')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
            gravityMode === 'up' ? 'bg-purple-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <ArrowUp className="w-3.5 h-3.5" /> Anti-Gravity
        </button>

        <button
          onClick={explode}
          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-full text-xs flex items-center gap-1 shadow-md"
        >
          <Zap className="w-3.5 h-3.5" /> Blast!
        </button>

        <button
          onClick={addMoreTech}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-semibold flex items-center gap-1"
        >
          + Add Skill
        </button>

        <button
          onClick={onClose}
          className="ml-2 p-1.5 bg-red-600 hover:bg-red-500 text-white rounded-full transition-colors shadow-lg"
          title="Exit Physics Mode"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Matter.js Canvas */}
      <div ref={sceneRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Helper Banner overlay at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400 bg-slate-900/80 px-4 py-1.5 rounded-full backdrop-blur border border-slate-800 pointer-events-none">
        💡 Drag, throw, bounce skill badges or switch Gravity modes above!
      </div>
    </div>
  );
}
