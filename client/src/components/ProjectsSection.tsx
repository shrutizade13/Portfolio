import { Github, ExternalLink, Star } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-5xl text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="/image_1751475606177.png" 
                  alt="SmartFit virtual try-on system interface" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-400/20"></div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                    <Star size={14} />
                    Featured Project
                  </span>
                </div>
                
                <h3 className="font-baloo font-bold text-3xl text-gray-800 mb-4">SmartFit</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Virtual Try-On System where you can see yourself trying clothes before purchasing. 
                  An innovative solution that bridges the gap between online shopping and physical fitting rooms.
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">HTML</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">CSS</span>
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/shrutizade13" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
