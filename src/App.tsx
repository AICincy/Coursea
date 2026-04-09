/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Heart,
  Star,
  Trophy,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Send
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
    title: "Smaller Class Sizes",
    description: "Experience personalized attention in smaller cohorts, ensuring you never get lost in the crowd.",
    icon: <Users className="w-6 h-6 text-yellow-600" />
  },
  {
    title: "Dedicated Faculty",
    description: "Learn from experienced instructors who are committed to your success and provide one-on-one mentorship.",
    icon: <BookOpen className="w-6 h-6 text-red-600" />
  },
  {
    title: "Job Placement Assistance",
    description: "Connect with over 150 U.S. employers in the Google Career Certificates Employer Consortium.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Career Services",
    description: "Get personalized resume reviews, interview prep, and coaching from Cincinnati State career advisors.",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />
  }
];

const syllabuses: Record<string, {title: string, desc: string}[]> = {
  "Data Analytics": [
    { title: "Foundations: Data, Data, Everywhere", desc: "Introduction to data analytics and analytical thinking." },
    { title: "Ask Questions to Make Data-Driven Decisions", desc: "Learn effective questioning and data-driven decision making." },
    { title: "Prepare Data for Exploration", desc: "Understand data types, structures, and how to extract data." },
  ],
  "IT Support": [
    { title: "Technical Support Fundamentals", desc: "Introduction to the world of IT and hardware basics." },
    { title: "The Bits and Bytes of Computer Networking", desc: "Deep dive into networking protocols and cloud computing." },
    { title: "Operating Systems and You", desc: "Navigating Windows and Linux file systems." },
  ],
  "Project Management": [
    { title: "Foundations of Project Management", desc: "Core concepts, roles, and lifecycle of project management." },
    { title: "Project Initiation: Starting a Successful Project", desc: "Setting goals, defining scope, and measuring success." },
    { title: "Project Planning: Putting It Together", desc: "Building project plans, budgets, and risk management." },
  ],
  "UX Design": [
    { title: "Foundations of User Experience (UX) Design", desc: "Basics of UX research, design sprints, and wireframing." },
    { title: "Start the UX Design Process", desc: "Empathizing with users and defining pain points." },
    { title: "Build Wireframes and Low-Fidelity Prototypes", desc: "Creating storyboards, wireframes, and paper prototypes." },
  ],
  "Cybersecurity": [
    { title: "Foundations of Cybersecurity", desc: "Core concepts, ethics, and security frameworks." },
    { title: "Play It Safe: Manage Security Risks", desc: "Identifying threats, vulnerabilities, and risk mitigation." },
    { title: "Connect and Protect: Networks and Network Security", desc: "Securing network architectures and operations." },
  ],
  "Digital Marketing & E-commerce": [
    { title: "Foundations of Digital Marketing", desc: "Customer journeys, marketing funnels, and brand strategy." },
    { title: "Attract and Engage Customers", desc: "SEO, SEM, and display advertising strategies." },
    { title: "From Likes to Leads: Interact with Customers Online", desc: "Social media marketing and engagement." },
  ]
};

const stats = [
  { label: "Students Enrolled", value: "5,000+", icon: <Users className="w-5 h-5" /> },
  { label: "Completion Rate", value: "85%", icon: <Trophy className="w-5 h-5" /> },
  { label: "Employer Partners", value: "150+", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Career Advancement", value: "75%", icon: <TrendingUp className="w-5 h-5" /> },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Junior UX Designer",
    content: "The UX Design certificate helped me land my first junior designer role within 3 months of completion. The portfolio projects were game-changers.",
    image: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Jenkins",
    role: "IT Support Specialist",
    content: "Flexible learning was key for me as a working parent. The IT Support program gave me the skills I needed to transition into tech with confidence.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    content: "I went from zero coding knowledge to being able to analyze complex datasets. The career services at Cincinnati State were incredibly helpful.",
    image: "https://picsum.photos/seed/michael/100/100"
  }
];

const faqs = [
  {
    question: "How long does it take to complete a certificate?",
    answer: "Most learners complete their certificate in 3 to 6 months by dedicating about 10 hours per week to the program."
  },
  {
    question: "Is there a cost for Cincinnati State students?",
    answer: "Cincinnati State offers various scholarships and grants that can cover the cost of the program. Contact an advisor to see if you qualify."
  },
  {
    question: "What kind of jobs can I get after completion?",
    answer: "Graduates find entry-level roles in fields like Data Analysis, IT Support, Project Management, UX Design, and Cybersecurity across various industries."
  },
  {
    question: "Do I need a college degree to enroll?",
    answer: "No, these certificates are designed to be accessible to everyone, regardless of their educational background or previous experience."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSyllabus, setActiveSyllabus] = useState<string>("Data Analytics");

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-6 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.blue }}></div>
                <div className="w-2 h-6 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.red }}></div>
                <div className="w-2 h-6 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.yellow }}></div>
                <div className="w-2 h-6 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.green }}></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-800">Cincinnati State <span className="text-gray-300 font-normal mx-1">|</span> Google Learning</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#experience" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#certificates" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Certificates</a>
              <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-[#4285F4] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900">
              Job ready skills you can put to work with <span style={{ color: GOOGLE_COLORS.blue }}>Google</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get professional job training from Google and Cincinnati State. Earn a credential that can help lead to jobs in high-paying fields. No experience necessary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#4285F4] text-white px-8 py-3.5 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Start Learning Today <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-md text-lg font-medium hover:border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                View Programs
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-md bg-white border border-gray-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-blue-50 text-[#4285F4] mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experience Section */}
      <section id="experience" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EA4335]/10 text-[#EA4335] text-sm font-bold mb-4 uppercase tracking-wider">
                <Heart className="w-4 h-4" /> Inclusive Learning
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">A Student Experience Built for Everyone</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We welcome all learners, of all backgrounds. Whether you're neurodivergent, changing careers, or just starting out, our program is designed to support your unique journey.
              </p>
              <ul className="space-y-3">
                {[
                  "Neurodiverse-friendly learning environment",
                  "Supportive community of learners and mentors",
                  "Accessible content and flexible deadlines",
                  "Real-world projects that build confidence"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-sm bg-[#34A853]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-sm bg-[#34A853]"></div>
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
              <div className="aspect-square max-w-md mx-auto bg-gray-50 rounded-xl border border-gray-200 p-8 flex flex-col justify-center items-center text-center">
                <Users className="w-20 h-20 text-[#4285F4] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Join a Diverse Community</h3>
                <p className="text-gray-600 italic">"Get certified! We welcome all learners, of all backgrounds. ADHD? Yep! Autism? You betcha!"</p>
                <div className="mt-8 flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#4285F4] flex items-center justify-center text-white text-xs font-bold">
                    +500
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products & Services (Certificates) */}
      <section id="certificates" className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">Google Career Certificates</h2>
            <p className="text-lg text-gray-600">
              Earn a credential that can help lead to jobs in high-paying fields. Get professional job training from Google.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white flex flex-col items-center text-center cursor-pointer"
                onClick={() => {
                  setActiveSyllabus(cert.title);
                  document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                >
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:mb-3 transition-all duration-300 text-gray-900">{cert.title}</h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out w-full">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: cert.color }}>
                      View Syllabus <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">Course Syllabuses</h2>
            <p className="text-lg text-gray-600">
              Explore the specific courses included in each Google Career Certificate.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {Object.keys(syllabuses).map((certName) => (
                <button
                  key={certName}
                  onClick={() => setActiveSyllabus(certName)}
                  className={`text-left px-5 py-3 rounded-md font-semibold transition-colors border-l-4 ${
                    activeSyllabus === certName 
                      ? "bg-blue-50 text-blue-700 border-[#4285F4]" 
                      : "bg-white text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {certName}
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSyllabus}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{activeSyllabus} Courses</h3>
                  {syllabuses[activeSyllabus].map((course, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-md border border-gray-200 flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-sm bg-blue-50 text-[#4285F4] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-md font-bold text-gray-900 mb-1">{course.title}</h4>
                        <p className="text-gray-600 text-sm">{course.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#4285F4] text-sm font-bold mb-4 uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" /> Success Stories
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">Hear From Our Students</h2>
            <p className="text-lg text-gray-600">
              Discover how the Google Learning Program at Cincinnati State has transformed careers and opened new doors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow italic text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Why Choose Cincinnati State?</h2>
            <p className="text-lg text-gray-400">
              Beyond the curriculum, we provide the support you need to succeed in the job market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-md bg-gray-800 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about the program and your future career.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-md overflow-hidden bg-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 text-gray-600 text-sm border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#4285F4] rounded-xl p-10 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to transform your career?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners at Cincinnati State and start your journey toward a Google Career Certificate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#4285F4] px-8 py-3 rounded-md text-lg font-bold hover:bg-gray-100 transition-colors">
                Enroll for Free
              </button>
              <button className="bg-transparent text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition-colors border-2 border-white">
                Contact Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-600">Have questions? Send us a message and our advisors will get back to you.</p>
          </div>
          <form className="space-y-5 bg-white p-6 md:p-8 rounded-xl border border-gray-200" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-transparent outline-none transition-all text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-transparent outline-none transition-all text-sm" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-transparent outline-none transition-all text-sm" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#4285F4] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.blue }}></div>
                <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.red }}></div>
                <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.yellow }}></div>
                <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: GOOGLE_COLORS.green }}></div>
              </div>
              <span className="font-display font-bold text-gray-800">Cincinnati State <span className="text-gray-300 font-normal mx-1">|</span> Google Learning</span>
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
