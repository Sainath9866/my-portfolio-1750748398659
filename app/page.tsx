'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, GraduationCap, Code, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold gradient-text mb-4">
              John Doe
            </h1>
            <p className="text-xl text-gray-600 mb-6">Software Engineer & Full-Stack Developer</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Experienced software engineer with 5+ years of experience in full-stack development. Passionate about creating scalable web applications and mentoring junior developers.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:john.doe@example.com" 
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Code size={20} />
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Experienced software engineer with 5+ years of experience in full-stack development. Passionate about creating scalable web applications and mentoring junior developers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Available for remote work</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium">5+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialization</span>
                  <span className="font-medium">Full-Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">Remote</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">JavaScript</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">React</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Node.js</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Python</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">SQL</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Git</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">AWS</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Experience</h2>
          <div className="space-y-8">
            
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Senior Software Engineer at Tech Corp (2020-2024)
Full Stack Developer at Startup Inc (2018-2020)</h3>
                    <p className="text-gray-600">Professional Experience</p>
                  </div>
                </div>
              </div>
            
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Science in Computer Science
University of Technology (2014-2018)</h3>
                <p className="text-gray-600">University</p>
                <p className="text-gray-500 mt-2">2014 - 2018</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">E-commerce Platform (React/Node.js)
Portfolio Website (Next.js)
Task Management App (Python/Django)</h3>
                <p className="text-gray-600 text-sm mb-4">Modern web application built with cutting-edge technologies</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Node.js</span>
                </div>
              </div>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">John Doe</h3>
          <p className="text-gray-400 mb-6">Let's build something amazing together</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500">&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}