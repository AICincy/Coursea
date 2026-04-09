/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  Layout, 
  Search,
  ArrowRight,
  Heart
} from "lucide-react";

const GOOGLE_COLORS = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC05",
  green: "#34A853",
};

const certificates = [
  {
    title: "Data Analytics",
    description: "Learn how to collect, transform, and organize data to help make informed business decisions.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: GOOGLE_COLORS.blue
  },
  {
    title: "IT Support",
    description: "Prepare for a career in IT with skills in troubleshooting, customer service, networking, and security.",
    icon: <Settings className="w-8 h-8" />,
    color: GOOGLE_COLORS.red
  },
  {
    title: "Project Management",
    description: "Master the foundations of project management, including planning, executing, and closing projects.",
    icon: <Briefcase className="w-8 h-8" />,
    color: GOOGLE_COLORS.yellow
  },
  {
    title: "UX Design",
    description: "Learn the foundations of UX design, including empathizing with users, defining pain points, and wireframing.",
    icon: <Layout className="w-8 h-8" />,
    color: GOOGLE_COLORS.green
  },
  {
    title: "Cybersecurity",
    description: "Learn how to identify and mitigate common security risks, threats, and vulnerabilities.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: GOOGLE_COLORS.blue
  },
  {
    title: "Digital Marketing & E-commerce",
    description: "Develop the skills needed to help businesses grow their online presence and reach new customers.",
    icon: <Search className="w-8 h-8" />,
    color: GOOGLE_COLORS.red
  }
];

const benefits = [
  {
    title: "No Experience Necessary",
    description: "Start from scratch. These programs are designed for learners of all backgrounds and experience levels.",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />
  },
  {
    title: "Learn at Your Own Pace",
    description: "Flexible online training that fits your schedule. Complete the certificates in under 6 months.",
    icon: <Clock className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Stand Out to Employers",
    description: "Earn a credential recognized by top employers and gain access to an exclusive job platform.",
    icon: <GraduationCap className="w-6 h-6 text-red-600" />
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-6 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.blue }}></div>
                <div className="w-2 h-6 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.red }}></div>
                <div className="w-2 h-6 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.yellow }}></div>
                <div className="w-2 h-6 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.green }}></div>
              </div>
              <span className="font-semibold text-lg tracking-tight">Cincinnati State <span className="text-gray-400 font-normal">|</span> Google Learning</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#experience" className="text-sm font-medium hover:text-blue-600 transition-colors">Experience</a>
              <a href="#certificates" className="text-sm font-medium hover:text-blue-600 transition-colors">Certificates</a>
              <a href="#benefits" className="text-sm font-medium hover:text-blue-600 transition-colors">Benefits</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-sm">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Get certified with <span style={{ color: GOOGLE_COLORS.blue }}>Google</span> and <span className="text-gray-900">Cincinnati State</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Professional-level training with Google Career Certificates. No experience necessary. Learn at your own pace and stand out to employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2">
                Start Learning Today <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                View Programs
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ backgroundColor: GOOGLE_COLORS.blue }}></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl" style={{ backgroundColor: GOOGLE_COLORS.yellow }}></div>
      </header>

      {/* Student Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" /> Inclusive Learning
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">A Student Experience Built for Everyone</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We welcome all learners, of all backgrounds. Whether you're neurodivergent, changing careers, or just starting out, our program is designed to support your unique journey.
              </p>
              <ul className="space-y-4">
                {[
                  "Neurodiverse-friendly learning environment",
                  "Supportive community of learners and mentors",
                  "Accessible content and flexible deadlines",
                  "Real-world projects that build confidence"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-3xl shadow-xl overflow-hidden p-8 flex flex-col justify-center items-center text-center">
                <Users className="w-24 h-24 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Join a Diverse Community</h3>
                <p className="text-gray-500 italic">"Get certified! We welcome all learners, of all backgrounds. ADHD? Yep! Autism? You betcha!"</p>
                <div className="mt-8 flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    +500
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-blue-600"></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products & Services (Certificates) */}
      <section id="certificates" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Google Career Certificates</h2>
            <p className="text-lg text-gray-600">
              Choose from six high-growth fields. These certificates are designed by Google experts to prepare you for entry-level roles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all bg-white"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                >
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {cert.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: cert.color }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent opacity-50"></div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Ready to transform your career?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of learners at Cincinnati State and start your journey toward a Google Career Certificate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg">
                  Enroll for Free
                </button>
                <button className="bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all border border-blue-500">
                  Contact Advisor
                </button>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 rounded-full bg-blue-500/30"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-700/50"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-4 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.blue }}></div>
                <div className="w-2 h-4 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.red }}></div>
                <div className="w-2 h-4 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.yellow }}></div>
                <div className="w-2 h-4 rounded-full" style={{ backgroundColor: GOOGLE_COLORS.green }}></div>
              </div>
              <span className="font-semibold text-gray-900">Cincinnati State <span className="text-gray-400 font-normal">|</span> Google Learning</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Help Center</a>
            </div>
            <p className="text-sm text-gray-400">
              © 2026 Cincinnati State Technical and Community College.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
