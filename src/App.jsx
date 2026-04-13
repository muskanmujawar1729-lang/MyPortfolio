import React from "react";
import { motion } from "framer-motion";
import Header from "./Component/Header";

const colors   = [
  "rgba(59, 130, 246, 0.5)",   // blue
  "rgba(16, 185, 129, 0.5)",   // green
  "rgba(236, 72, 153, 0.5)",   // pink
  "rgba(239, 68, 68, 0.5)",    // red
  "rgba(234, 179, 8, 0.5)",    // yellow
  "rgba(139, 92, 246, 0.5)",   // purple
];

const bubbles = Array.from({ length: 20 }).map(() => ({
  size: `${Math.floor(Math.random() * 40) + 20}px`, // 20px - 60px
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  x: (Math.random() - 0.15) * 200,
  y: (Math.random() - 0.15) * 200,
  color: colors[Math.floor(Math.random() * colors.length)],
  delay: Math.random() * 5,
}));

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden cursor-pointer">
      {/* Bubbles Background */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            background: bubble.color,
            filter: "blur(1.2rem)",
          }}
          animate={{ x: [0, bubble.x, 0], y: [0, bubble.y, 0] }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
}

export default App;
