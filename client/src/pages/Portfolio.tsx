import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import HackathonsSection from "@/components/HackathonsSection";
import ContactSection from "@/components/ContactSection";
import FloatingElements from "@/components/FloatingElements";

export default function Portfolio() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      const element = section as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    // Initial animation for hero section
    const heroSection = document.querySelector('#home') as HTMLElement;
    if (heroSection) {
      setTimeout(() => {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
      }, 300);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100">
      <Navbar />
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <HackathonsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2025 Shruti Shankar Zade. Made with <span className="text-pink-400">♥</span> and lots of <span className="text-purple-400">☕</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
