import { Users, Building, Calendar, Code } from "lucide-react";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="py-20 bg-white/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-5xl text-gray-800 mb-4">Hackathons</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Hackathon Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white text-2xl" size={32} />
              </div>
              <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">Hackathon Participation</span>
            </div>
            
            <h3 className="font-baloo font-bold text-3xl text-gray-800 text-center mb-4">InnoVyuh Hackathon 2025</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-purple-400 mb-2">
                  <Users className="mx-auto" size={32} />
                </div>
                <h4 className="font-semibold text-gray-800">Role</h4>
                <p className="text-gray-600">Developer, Akshii</p>
              </div>
              
              <div className="text-center">
                <div className="text-pink-500 mb-2">
                  <Building className="mx-auto" size={32} />
                </div>
                <h4 className="font-semibold text-gray-800">Organization</h4>
                <p className="text-gray-600 text-sm">Google Developer Groups, MIT ACSC, Alandi</p>
              </div>
              
              <div className="text-center">
                <div className="text-green-300 mb-2">
                  <Calendar className="mx-auto" size={32} />
                </div>
                <h4 className="font-semibold text-gray-800">Year</h4>
                <p className="text-gray-600">2025</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-center leading-relaxed">
              Participated as a developer in team Akshii at InnoVyuh Hackathon 2025, 
              organized by Google Developer Groups and MIT ACSC, Alandi. 
              Collaborated with team members to develop innovative solutions and gained valuable experience in rapid prototyping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
