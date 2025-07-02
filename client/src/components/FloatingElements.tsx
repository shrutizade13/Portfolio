import { useEffect } from "react";

export default function FloatingElements() {
  useEffect(() => {
    const particles = ['⭐', '💖', '✨', '🌟'];
    let mouseX = 0;
    let mouseY = 0;
    let lastParticleTime = 0;

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      const randomParticle = particles[Math.floor(Math.random() * particles.length)];
      
      particle.textContent = randomParticle;
      particle.className = 'cursor-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.color = randomParticle === '💖' ? '#ff8da1' : '#dda0dd';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const now = Date.now();
      if (now - lastParticleTime > 100) { // Throttle particle creation
        createParticle(mouseX, mouseY);
        lastParticleTime = now;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}
