import { Code, Globe, Wrench, User } from "lucide-react";

export default function AboutSection() {
  const languages = ["English", "Hindi", "Marathi", "Korean"];
  const technicalSkills = ["Python", "C", "C++", "SQL"];
  const webDev = ["HTML", "CSS", "JavaScript"];
  const tools = ["GitHub", "VS Code"];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-5xl text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Description */}
          <div className="glass-effect rounded-3xl p-8 shadow-xl">
            <h3 className="font-baloo font-semibold text-2xl text-gray-800 mb-6 flex items-center gap-2">
              <User className="text-pink-500" size={24} />
              Hello! 👋
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I'm a BCA student at SPPU, passionate about software development and data analytics. 
              I enjoy exploring how technology can solve real-world problems and improve user experiences. 
              Having completed a Data Analytics course, I'm skilled at working with data to derive insights and drive decisions.
            </p>
            
            {/* Languages */}
            <div className="mb-6">
              <h4 className="font-baloo font-medium text-xl text-gray-800 mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span 
                    key={lang}
                    className={`px-3 py-1 rounded-full text-sm ${
                      index === 0 ? 'bg-pink-100 text-pink-600' :
                      index === 1 ? 'bg-purple-100 text-purple-600' :
                      index === 2 ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="space-y-6">
            {/* Technical Skills */}
            <div className="glass-effect rounded-3xl p-8 shadow-xl">
              <h4 className="font-baloo font-medium text-xl text-gray-800 mb-4 flex items-center gap-2">
                <Code className="text-pink-500" size={24} />
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 rounded-full font-medium shadow-md text-white ${
                      index === 0 ? 'bg-pink-500' :
                      index === 1 ? 'bg-purple-400' :
                      index === 2 ? 'bg-green-300 text-gray-700' :
                      'bg-blue-300 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Web Development */}
            <div className="glass-effect rounded-3xl p-8 shadow-xl">
              <h4 className="font-baloo font-medium text-xl text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="text-purple-400" size={24} />
                Web Development
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md">HTML</span>
                <span className="bg-blue-400 text-white px-4 py-2 rounded-full font-medium shadow-md">CSS</span>
                <span className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-medium shadow-md">JavaScript</span>
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div className="glass-effect rounded-3xl p-8 shadow-xl">
              <h4 className="font-baloo font-medium text-xl text-gray-800 mb-4 flex items-center gap-2">
                <Wrench className="text-green-300" size={24} />
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full font-medium shadow-md">GitHub</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-md">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
