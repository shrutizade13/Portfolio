import { Download, Mail, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2029&h=1520" 
          alt="Soft pastel geometric background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="glass-effect rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Full Name in Big Text */}
          <h1 className="font-baloo font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-6 leading-tight">
            <span className="text-pink-500">SHRUTI </span>
            <span className="text-purple-400">SHANKAR </span>
            <span className="text-gray-700">ZADE</span>
          </h1>
          
          {/* Professional Title */}
          <p className="font-nunito text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 font-medium">
            Software Developer | ANALYTICS LEARNER | Data Analytics Enthusiasts
          </p>
          
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-gray-700 text-sm md:text-base">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="text-pink-500" size={18} />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <GraduationCap className="text-purple-400" size={18} />
              <span>BCA @ SPPU (Expected 2026)</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="text-pink-500" size={18} />
              <span className="break-all">Shrutizade13@gmail.com</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a 
              href="https://www.linkedin.com/in/shruti-zade-626738352/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-400 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/shrutizade13" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base"
            >
              <Github size={18} />
              GitHub
            </a>
            <a 
              href="https://drive.google.com/file/d/1x6tgtXrE7F2aZqO7wJM9bzcy4DqGa_g9/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 hover:bg-purple-300 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base"
            >
              <Download size={18} />
              Resume
            </a>
            <button
              onClick={handleContactClick}
              className="bg-green-300 hover:bg-green-400 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
