// File: src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth * 0.05);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(149, 97, 226, ${particle.opacity})`;

        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections
      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.strokeStyle = `rgba(149, 97, 226, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center">
      <canvas 
        ref={particlesRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="block">Hi, I'm</span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Taufique Alam Ansari
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
          Computer Science & Engineering Student
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Passionate about problem-solving and web development, eager to make a meaningful impact in the tech industry.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-lg border border-purple-600 text-white hover:bg-purple-600/20 font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={30} className="text-purple-500" />
      </a>
    </section>
  );
};

export default Hero;