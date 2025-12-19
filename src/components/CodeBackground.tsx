import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  'function()', 'const x =', 'if (true)', 'return', 'async', 'await',
  '=> {}', 'import', 'export', 'class', 'interface', 'type',
  '10101', '01010', '{...}', '[ ]', '( )', '</>',
];

const CodeBackground = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Code elements */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.1, 0.1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-primary/20 font-mono text-sm select-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
        >
          {el.text}
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default CodeBackground;
