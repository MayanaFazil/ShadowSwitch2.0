import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code, 
  Brain, 
  Cloud, 
  Database,
  ChevronDown,
  Award,
  Users,
  Zap,
  Rocket,
  Globe,
  Shield,
  BarChart3,
  MessageSquare,
  Smartphone,
  Trophy,
  Target,
  Star,
  TrendingUp
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Mayana
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#coding" className="text-gray-600 hover:text-blue-600 transition-colors">Coding</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='about' className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Scalable Web & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              that Drive <span className="text-blue-600 font-semibold">Real-World Impact</span>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              With a proven foundation in full-stack Python development, AI/ML, and cloud-native technologies, 
              I specialize in building clean, high-performance applications — from robust backends to elegant 
              frontends — powered by data and driven by design.
            </p>

            {/* Bio */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-gray-200">
              <p className="text-lg text-gray-800 mb-4">
                I'm <span className="font-semibold text-blue-600">Mayana Mohammed Fazil Khan</span> — a results-oriented developer shaping the future of intelligent software systems.
              </p>
              <p className="text-lg text-gray-700">
                With hands-on experience at <span className="font-semibold">IBM Watsonx</span> and <span className="font-semibold">600+ complex DSA problems</span> under my belt, 
                I merge logic, creativity, and precision to engineer solutions that matter.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button onClick={() => (window.location.href = 'https://linktr.ee/fazil_2125')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <ExternalLink size={20} />
                View Portfolio
              </button>
              <button onClick={() => (window.location.href = 'https://drive.google.com/file/d/17-em6ULLTQWd8OyGzdcJsb8ZWgIOSr3N/view')}
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
              <button onClick={() => {window.location.href = 'mailto:mohammedfazilkhanmayana@gmail.com';}}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <Mail size={20} />
                Hire Me
              </button>
            </div>

            {/* Highlight Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-200" />
                  <span className="font-semibold">IBM Watsonx Intern</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-blue-200" />
                  <span className="font-semibold">Google Cloud Gen AI Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-200" />
                  <span className="font-semibold">Full-Stack Python Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-200" />
                  <span className="font-semibold">LeetCode: 600+ Problems</span>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI/ML Development</h3>
              <p className="text-gray-600 mb-4">Building intelligent systems with predictive modeling, data pipelines, and AutoML tools</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">IBM WatsonX</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Predictive Modeling</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AutoAI</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Custom ML Pipelines</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full-Stack Development</h3>
              <p className="text-gray-600 mb-4">Building end-to-end web applications using modern frameworks, clean architecture, and cloud-ready practices</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Django</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">REST API</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">HTML, CSS & JavaScript</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & Infrastructure</h3>
              <p className="text-gray-600 mb-4">Delivering scalable, cloud-native solutions with modern tooling and data-first platforms.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Google Cloud Platform (GCP)</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">IBM Watsonx</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">AutoAI & Prompt Lab</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-4">Designing robust data pipelines, efficient storage systems, and clean datasets for AI and analytics.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Data Cleaning</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Cloud Object Storage</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Data Refinery</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Problem Solving</h3>
              <p className="text-gray-600 mb-4">Mastering data structures, algorithms, and real-world problem-solving through consistent practice & competitive coding.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Algorithm Design</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">DSA Expert</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">600+ LeetCode</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">TC and SC Analysis</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership & Collaboration</h3>
              <p className="text-gray-600 mb-4">Leading cross-functional teams, driving projects with ownership, and fostering collaboration in agile environments.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Team Lead</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Agile Methodologies</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Mentoring</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Collaboration</span>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Real-world applications showcasing full-stack development, AI/ML integration, and scalable architecture
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Project 1 - AI-Powered Analytics Platform */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Prediction of Machine Failures</h3>
                  <p className="text-blue-600 font-semibold">AI Predictive Analytics</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built a predictive analytics solution for machine failure detection using historical data and ML 
                models. Delivered real-time insights, reduced downtime, and integrated scalable pipelines for 
                industrial automation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Django</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">RestAPI</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex gap-4">
                <button onClick={() => (window.location.href = 'https://github.com/MayanaFazil/Prdeiction_of_machine_failure')}
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <Github size={16} />
                  Code
                </button>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              </div>
            </div>

            {/* Featured Project 2 - Cloud-Native E-commerce */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Cloud E-commerce Platform</h3>
                  <p className="text-green-600 font-semibold">Scalable Microservices Architecture</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Developed a full-stack e-commerce solution with microservices architecture on Google Cloud. 
                Includes payment processing, inventory management, real-time notifications, and AI-powered recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Django</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Google Cloud</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Redis</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Stripe API</span>
              </div>
              <div className="flex gap-4">
                <button onClick={() => (window.location.href = '')}
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <Github size={16} />
                  Code
                </button>
                <button onClick={() => (window.location.href = '')}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Additional Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 3 - AI Chatbot */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Katalix Chatbot</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Designed and developed an AI-driven virtual assistant for Katalix Solutions using IBM Watsonx 
                Assistant, leveraging Action-based workflows to deliver contextual, accurate, and automated user 
                interactions.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">IBM Watsonx Assistant</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Chatbot Design</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Intent & Entities</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Dialog Flow</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Embedded AI</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => (window.location.href = 'https://github.com/MayanaFazil/Chatbot')}
                className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm font-medium transition-colors">
                  <Github size={14} />
                  Code
                </button>
                <button onClick={() => (window.location.href = 'https://drive.google.com/file/d/1ejEOm9maymSE7B2VNIh2wazwgslIoVMv/view?usp=sharing')}
                className="flex items-center gap-1 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  <ExternalLink size={14} />
                  Demo
                </button>
              </div>
            </div>

            {/* Project 4 - Mobile App Backend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Portfolio site is an internship project of Front End Development where an attractive and efficient portfolio have been made by using Html, CSS and JavaScript.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">HTML</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">CSS</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">JavaScript</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Bootstrap</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => (window.location.href = 'https://github.com/MayanaFazil/FrontEndDevelopmet')}
                className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm font-medium transition-colors">
                  <Github size={14} />
                  Code
                </button>
                <button onClick={() => (window.location.href = 'https://mayanafazil.github.io/FrontEndDevelopmet/')}
                className="flex items-center gap-1 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  <ExternalLink size={14} />
                  Demo
                </button>
              </div>
            </div>

            {/* Project 5 - Security Tool */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trader Behaviour Insights</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Analyzed the influence of Bitcoin market sentiment on trader behavior using Hyperliquid historical data.
                The goal is to investigate the impact of Bitcoin market sentiment (Fear/Greed) on trader behavior
                and performance using historical trading data from Hyperliquid.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">Machine Learning</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Numpy</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Pandas</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Scikit-learn</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Data Visualization</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => (window.location.href = 'https://github.com/MayanaFazil/sentiment-trader-analysis')}
                className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm font-medium transition-colors">
                  <Github size={14} />
                  Code
                </button>
                <button onClick={() => (window.location.href = '')}
                className="flex items-center gap-1 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  <ExternalLink size={14} />
                  Demo
                </button>
              </div>
            </div>
            
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <button onClick={() => (window.location.href = 'https://github.com/MayanaFazil')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mx-auto">
              <Github size={20} />
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Programming Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proven problem-solving expertise across all major coding platforms with <span className="text-yellow-400 font-semibold">500+ problems solved</span> and consistent high performance
            </p>
          </div>

          {/* Stats Overview */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 mb-12 border border-yellow-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">700+</div>
                <div className="text-gray-300 font-medium">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                <div className="text-gray-300 font-medium">Active Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">DSA</div>
                <div className="text-gray-300 font-medium">Expert Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Top</div>
                <div className="text-gray-300 font-medium">Performer</div>
              </div>
            </div>
          </div>

          {/* Coding Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LeetCode */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LeetCode</h3>
                  <p className="text-orange-400 font-semibold">600+ Problems</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Consistent problem solver with strong performance in algorithms, data structures, and system design challenges.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs font-medium">Algorithms</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium">Data Structures</span>
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs font-medium">Dynamic Programming</span>
              </div>
              <button onClick={() => (window.location.href = 'https://leetcode.com/u/mayana_fazil_khan/')}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center">
                <ExternalLink size={16} />
                View Profile
              </button>
            </div>

            {/* Code360 by Coding Ninjas */}
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Code360</h3>
                  <p className="text-red-400 font-semibold">Coding Ninjas</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Active participant in coding challenges with focus on competitive programming and interview preparation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs font-medium">Competitive Programming</span>
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-xs font-medium">Interview Prep</span>
              </div>
              <button onClick={() => (window.location.href = 'https://www.naukri.com/code360/profile/7adffee0-b0ca-41ac-bd4e-877e6cb3d055')}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center">
                <ExternalLink size={16} />
                View Profile
              </button>
            </div>

            {/* GeeksforGeeks */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">GeeksforGeeks</h3>
                  <p className="text-green-400 font-semibold">Problem Solver</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Regular contributor with strong performance in algorithmic challenges and technical interview questions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium">Algorithms</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs font-medium">System Design</span>
              </div>
              <button onClick={() => (window.location.href = 'https://www.geeksforgeeks.org/user/mmfazil_khan2125/')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center">
                <ExternalLink size={16} />
                View Profile
              </button>
            </div>

            {/* HackerRank */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HackerRank</h3>
                  <p className="text-blue-400 font-semibold">Certified Developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Achieved high ratings in Python, algorithms, and data structures with multiple skill certifications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">Python</span>
                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium">SQL</span>
                <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-xs font-medium">Problem Solving</span>
              </div>
              <button onClick={() => (window.location.href = 'https://www.hackerrank.com/profile/mohammedfazilkh1')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center">
                <ExternalLink size={16} />
                View Profile
              </button>
            </div>

            {/* HackerEarth */}
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HackerEarth</h3>
                  <p className="text-purple-400 font-semibold">Active Competitor</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Participated in multiple coding competitions and hackathons with consistent performance rankings.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">Competitions</span>
                <span className="bg-violet-500/20 text-violet-300 px-2 py-1 rounded text-xs font-medium">Hackathons</span>
              </div>
              <button onClick={() => (window.location.href = 'https://www.hackerearth.com/@mohammedfazilkhanmayana/')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center">
                <ExternalLink size={16} />
                View Profile
              </button>
            </div>

            {/* CodeChef */}
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CodeChef</h3>
                  <p className="text-amber-400 font-semibold">Competitive Coder</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Regular participant in monthly contests with strong algorithmic problem-solving capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded text-xs font-medium">Monthly Contests</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs font-medium">Long Challenges</span>
              </div>
              <button onClick={() => (window.location.href = 'https://www.codechef.com/users/fazilkhan_2125')}
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center">
                <ExternalLink size={16} />
                View Profile
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Tackle Complex Challenges?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                With proven problem-solving skills across multiple platforms and 500+ solved problems, 
                I bring algorithmic thinking and optimization expertise to every project.
              </p>
              <button onClick={() => (window.location.href = 'https://linktr.ee/fazil_2125')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mx-auto">
                <Trophy size={20} />
                View All Coding Profiles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Professional Journey
          </h2>
          <div className="space-y-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">IBM Watsonx Intern</h3>
                  <p className="text-blue-600 font-semibold mb-4">IBM • AI/ML Development</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Developed and deployed intelligent AI solutions using IBM's Watson platform. Worked on natural language processing, 
                    machine learning model optimization, and cloud-native AI applications that served enterprise clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Watsonx.aiI</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Watsonx Orchestarte</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Predictive models</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Watsonx Assistant</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Prompt tuning</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fine-tuning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Google Cloud Gen AI Certified</h3>
                  <p className="text-green-600 font-semibold mb-4">Google Cloud Platform • Certification</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Mastered Google Cloud's generative AI services, including Vertex AI, PaLM API, and cloud-based ML workflows. 
                    Specialized in building scalable AI applications with enterprise-grade security and performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Vertex AI</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Big Query</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Compute Engine</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Cloud Storage</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">IAM & Admin</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Gen AI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Full-Stack Development Mastery</h3>
                  <p className="text-orange-600 font-semibold mb-4">Self-Directed Learning • Professional Training</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Completed comprehensive full-stack development training covering Python backends, modern frontend frameworks, 
                    database design, and API development. Built multiple production-ready applications from concept to deployment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Django</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">RestAPI</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">HTML,CSS, JavaScript</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">BootStrap</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">FastAPI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Ready to turn your vision into reality? I'm here to help you build scalable, 
            intelligent solutions that drive real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button onClick={() => {
              window.location.href = 'mailto:mohammedfazilkhanmayana@gmail.com';
            }}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
              <Mail size={20} />
              Get In Touch
            </button>
            <button onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://drive.google.com/uc?export=download&id=17-em6ULLTQWd8OyGzdcJsb8ZWgIOSr3N';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.click();
            }}
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-400 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/MayanaFazil" className="text-blue-200 hover:text-white transition-colors transform hover:scale-110">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/mayana-mohammed-fazil-khan-1b634b270/" className="text-blue-200 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={32} />
            </a>
            <a href="mailto:mohammedfazilkhanmayana@gmail.com" className="text-blue-200 hover:text-white transition-colors transform hover:scale-110">
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Mayana. Crafting the future, one line of code at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;