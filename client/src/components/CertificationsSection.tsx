import { Calendar, GraduationCap, CheckCircle, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-5xl text-gray-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Certification Card */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Certificate Image */}
              <div className="lg:w-1/2 relative p-4 lg:p-6">
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2025-07-02 at 20.31.52_5fc65d76_1751475624474.jpg" 
                    alt="Deloitte Data Analytics Job Simulation Certificate" 
                    className="w-full h-auto object-contain rounded-2xl shadow-lg bg-white max-h-80 lg:max-h-96" 
                  />
                  <div className="absolute top-2 left-2 bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">Certificate</span>
                  </div>
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-800 mb-4">
                    <span className="text-green-600">Deloitte</span>
                  </div>
                </div>
                
                <h3 className="font-baloo font-bold text-2xl text-gray-800 mb-2">Data Analytics Job Simulation</h3>
                <p className="text-pink-500 font-semibold text-lg mb-4">Deloitte</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-purple-400" size={20} />
                    <span className="text-gray-700">Issue Date: July 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-pink-500" size={20} />
                    <span className="text-gray-700">Platform: Forage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">Status: Completed</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Completed practical tasks in data analysis and forensic technology. 
                  Gained hands-on experience with real-world data analytics challenges 
                  in a professional simulation environment.
                </p>
                
                {/* Certificate Link */}
                <a 
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_QyYNHrCDZ4PggshY9_1751468112898_completion_certificate.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-400 hover:bg-purple-300 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
