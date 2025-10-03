import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, Mail, MessageCircle, Users, Award, TrendingUp, Heart, Zap, Target, Copy, CheckCircle2, Building2, GraduationCap, Wrench, ChevronRight, Star, Rocket, Globe, Coffee, BookOpen, Lightbulb, ChevronDown, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import { useState } from 'react';

type Role = {
  title: string;
  location: string;
  type: string;
  category: 'Engineering' | 'Management' | 'Graduate';
  summary: string;
  responsibilities: string[];
  requirements: string[];
  email: string;
  id: string;
  experience: string;
  department: string;
};

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Career Growth',
    description: 'Continuous learning opportunities and clear career progression paths with mentorship programs',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaborative Culture',
    description: 'Work with industry experts in a supportive team environment on iconic projects',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Competitive Package',
    description: 'Industry-leading salaries, performance bonuses, and comprehensive health benefits',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Work-Life Balance',
    description: 'Flexible schedules, remote work options, and wellness programs for holistic growth',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation First',
    description: 'Access to cutting-edge BIM, AI tools and latest engineering software & technologies',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Impactful Projects',
    description: 'Shape India\'s infrastructure with nation-building projects that create lasting impact',
  },
];

const perks = [
  { icon: <Coffee className="h-5 w-5" />, title: 'Free Meals & Snacks', description: 'Complimentary lunch and unlimited refreshments' },
  { icon: <BookOpen className="h-5 w-5" />, title: 'Learning Budget', description: '₹50,000/year for courses, certifications & conferences' },
  { icon: <Rocket className="h-5 w-5" />, title: 'Fast-Track Growth', description: 'Rapid promotions based on performance, not tenure' },
  { icon: <Globe className="h-5 w-5" />, title: 'Remote Flexibility', description: 'Hybrid model with work-from-anywhere options' },
  { icon: <Lightbulb className="h-5 w-5" />, title: 'Innovation Labs', description: 'Dedicated time for R&D and experimental projects' },
  { icon: <Star className="h-5 w-5" />, title: 'Recognition Programs', description: 'Quarterly awards, spot bonuses & team celebrations' },
];

const categories = [
  { id: 'all', name: 'All Positions', icon: <Briefcase className="h-4 w-4" /> },
  { id: 'Engineering', name: 'Engineering', icon: <Wrench className="h-4 w-4" /> },
  { id: 'Management', name: 'Management', icon: <Building2 className="h-4 w-4" /> },
  { id: 'Graduate', name: 'Graduate Programs', icon: <GraduationCap className="h-4 w-4" /> },
];

const roles: Role[] = [
  {
    id: 'se-bridges',
    title: 'Structural Engineer – Bridges',
    location: 'Mumbai / Hybrid',
    type: 'Full‑time',
    category: 'Engineering',
    experience: '3-7 years',
    department: 'Bridge Engineering',
    summary:
      'Lead detailed design and proof checking of bridge superstructures and substructures across urban and intercity programs.',
    responsibilities: [
      'Perform analysis and design of composite girders, PSC, RCC and steel systems',
      'Prepare and review design reports, drawings, and BOQs',
      'Coordinate with geotech, hydrology and site teams for constructability',
      'Support rehabilitation and strengthening designs for existing assets',
    ],
    requirements: [
      'B.E./M.Tech in Civil/Structural Engineering',
      '3–7 years in bridge design and/or proof consultancy',
      'Hands‑on with MIDAS/CsiBridge/STAAD, IRC/IS codes',
      'Strong documentation and coordination skills',
    ],
    email: 'careers@mirai.example',
  },
  {
    id: 'highway-engineer',
    title: 'Highway Design Engineer',
    location: 'Delhi / Remote',
    type: 'Full‑time',
    category: 'Engineering',
    experience: '2-5 years',
    department: 'Highway Engineering',
    summary:
      'Design and develop highway infrastructure projects including expressways, interchanges, and urban road networks.',
    responsibilities: [
      'Geometric design of highways, expressways and urban roads',
      'Traffic analysis and junction design optimization',
      'Prepare detailed project reports and technical specifications',
      'Coordinate with survey, geotechnical and environmental teams',
    ],
    requirements: [
      'B.E./B.Tech in Civil Engineering',
      '2-5 years experience in highway/road design',
      'Proficiency in AutoCAD Civil 3D, MX Road, IRC standards',
      'Knowledge of traffic engineering and pavement design',
    ],
    email: 'careers@mirai.example',
  },
  {
    id: 'pm-rail',
    title: 'Project Manager – Railways',
    location: 'Bhubaneswar / On‑site',
    type: 'Full‑time',
    category: 'Management',
    experience: '8+ years',
    department: 'Railway Projects',
    summary:
      'Manage end‑to‑end delivery for railway projects including surveys, feasibility, detailed design and supervision.',
    responsibilities: [
      'Plan and track multi‑disciplinary deliverables',
      'Interface with client, contractors and internal teams',
      'Ensure QA/QC and statutory compliance',
      'Drive risk registers, MoMs and project dashboards',
    ],
    requirements: [
      'B.E. (Civil) with 8+ years in rail projects',
      'Strong stakeholder and contract management skills',
      'Working knowledge of BIM, track and structures is a plus',
    ],
    email: 'careers@mirai.example',
  },
  {
    id: 'senior-pm',
    title: 'Senior Project Manager',
    location: 'Mumbai / Hybrid',
    type: 'Full‑time',
    category: 'Management',
    experience: '10+ years',
    department: 'Infrastructure Projects',
    summary:
      'Lead large-scale infrastructure projects from conception to completion, managing cross-functional teams and stakeholders.',
    responsibilities: [
      'Oversee multiple concurrent highway/bridge/railway projects',
      'Strategic planning, budgeting and resource allocation',
      'Client relationship management and business development',
      'Mentor junior project managers and technical teams',
    ],
    requirements: [
      'B.E./M.Tech in Civil Engineering with PMP/PRINCE2 certification',
      '10+ years in infrastructure project management',
      'Proven track record of delivering ₹100+ Cr projects',
      'Excellent leadership, negotiation and presentation skills',
    ],
    email: 'careers@mirai.example',
  },
  {
    id: 'grad-trainee',
    title: 'Graduate Engineer Trainee',
    location: 'Multiple Locations',
    type: 'Full‑time',
    category: 'Graduate',
    experience: '0-1 years',
    department: 'All Departments',
    summary:
      'Kick‑start your engineering career on iconic rail/bridge programs with mentoring and structured rotations.',
    responsibilities: [
      'Assist in modeling, drafting and quantity take‑offs',
      'Support site supervision and QC documentation',
      'Learn tools and design workflows across disciplines',
      'Participate in cross-functional project teams',
    ],
    requirements: [
      'B.E./B.Tech – Civil (0–1 years)',
      'Strong fundamentals and eagerness to learn',
      'Good communication and teamwork',
      'Basic knowledge of AutoCAD and MS Office',
    ],
    email: 'careers@mirai.example',
  },
  {
    id: 'intern-civil',
    title: 'Civil Engineering Intern',
    location: 'Pan India',
    type: 'Internship',
    category: 'Graduate',
    experience: 'Final year students',
    department: 'All Departments',
    summary:
      '6-month internship program for final year students to gain hands-on experience in real infrastructure projects.',
    responsibilities: [
      'Assist engineers in design, analysis and documentation',
      'Learn industry-standard software and tools',
      'Participate in site visits and project meetings',
      'Work on mini-projects under senior guidance',
    ],
    requirements: [
      'Currently pursuing B.E./B.Tech in Civil Engineering (Final Year)',
      'Strong academic record (CGPA > 7.0)',
      'Basic knowledge of structural analysis and design',
      'Enthusiastic, proactive and quick learner',
    ],
    email: 'careers@mirai.example',
  },
];

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const filteredRoles = selectedCategory === 'all' 
    ? roles 
    : roles.filter(role => role.category === selectedCategory);

  const copyEmail = (email: string, roleId: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(roleId);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const toggleRole = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-indigo-950/80 via-blue-950/60 to-sky-950/80 border-b border-white/10 overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.2),transparent_50%)]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl backdrop-blur border border-white/10"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-3xl backdrop-blur border border-white/10"
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-sky-500/30 border border-white/30 backdrop-blur-xl mb-8 shadow-lg"
            >
              <Briefcase className="h-5 w-5 text-blue-300" />
              <span className="text-sm font-semibold text-white">We're Actively Hiring - 6 Positions Open</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight"
            >
              Build Your Future <br />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 animate-gradient">
                  With Mirai
                </span>
                <motion.div
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join a team of visionaries shaping India's infrastructure future. Work on iconic projects with <span className="text-white font-semibold">5000+ km highways</span>, <span className="text-white font-semibold">30,000m bridges</span>, and <span className="text-white font-semibold">10,000+ km railways</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {['🌏 Remote Friendly', '⚡ Fast Growth', '💎 Top Benefits', '🚀 Latest Tech'].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 rounded-xl bg-slate-800 backdrop-blur-xl border-2 border-slate-600 text-sm font-bold text-white shadow-lg shadow-slate-900/50 hover:shadow-xl hover:bg-slate-700 hover:border-slate-500 transition-all cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                variant="primary" 
                href="#positions"
                leftIcon={<ChevronRight className="h-5 w-5" />}
              >
                View Open Positions
              </Button>
              <Button 
                variant="secondary" 
                href="mailto:careers@mirai.example"
                leftIcon={<Mail className="h-5 w-5" />}
              >
                General Application
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
      </motion.div>

      {/* Why Join Us Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-sky-500/20 border border-white/20 text-sm font-semibold text-blue-300">
              Life at Mirai
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Why Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">Mirai?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We believe in creating an environment where talent thrives, innovation flourishes, and careers are built on purpose.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-sky-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-sky-500/30 border border-white/20 text-blue-400 mb-6 shadow-lg group-hover:shadow-blue-500/50"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-sky-400 transition-all">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks & Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-sky-950/40 border border-white/20 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Additional Perks & Benefits</h3>
            <p className="text-slate-400 text-lg">Premium benefits that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 flex items-center justify-center text-blue-400 border border-white/10">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{perk.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{perk.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Open Positions - Collapsible Design */}
      <div id="positions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-blue-500/20 border border-white/20 text-sm font-semibold text-sky-300">
              Join Our Team
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Open <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-400">Positions</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Explore <span className="text-white font-semibold">{roles.length} exciting opportunities</span> and find the role that matches your skills and ambitions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-2 border-blue-500 shadow-blue-500/40'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border-2 border-slate-600 hover:border-slate-500 shadow-slate-900/50'
                }`}
              >
                {category.icon}
                {category.name}
                {category.id !== 'all' && (
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">
                    {roles.filter(r => r.category === category.id).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          <p className="text-sm text-slate-500">
            Showing <span className="text-white font-semibold">{filteredRoles.length}</span> {filteredRoles.length === 1 ? 'position' : 'positions'}
          </p>
        </motion.div>

        {/* Collapsible Job Cards */}
        <div className="space-y-4">
          {filteredRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Collapsed View - Summary */}
              <button
                onClick={() => toggleRole(role.id)}
                className="w-full text-left p-6 lg:p-8 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    {/* Category Badge */}
                    <span className="px-3 py-1 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                      {role.category}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                      {role.department}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-xs">
                      {role.experience}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {role.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>{role.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>{role.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-slate-400" />
                      <span>ID: {role.id}</span>
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <motion.div
                  animate={{ rotate: expandedRole === role.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <ChevronDown className="h-5 w-5 text-blue-400" />
                  </div>
                </motion.div>
              </button>

              {/* Expanded View - Full Details */}
              <AnimatePresence>
                {expandedRole === role.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-slate-700/50"
                  >
                    <div className="p-6 lg:p-8 bg-slate-950/50 space-y-8">
                      {/* Job Summary */}
                      <div>
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">About This Role</h4>
                        <p className="text-slate-300 text-base leading-relaxed">{role.summary}</p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Responsibilities */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                            <h4 className="text-lg font-bold text-white">Key Responsibilities</h4>
                          </div>
                          <ul className="space-y-3">
                            {role.responsibilities.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 text-slate-300"
                              >
                                <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 bg-gradient-to-b from-sky-500 to-blue-500 rounded-full" />
                            <h4 className="text-lg font-bold text-white">Requirements</h4>
                          </div>
                          <ul className="space-y-3">
                            {role.requirements.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 text-slate-300"
                              >
                                <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-700/50">
                        <Button
                          href={`mailto:${role.email}?subject=${encodeURIComponent('Application: ' + role.title)}&body=${encodeURIComponent(`Hi Mirai Team,\n\nI am interested in applying for the ${role.title} position.\n\nBest regards`)}`}
                          variant="primary"
                          leftIcon={<Send className="h-4 w-4" />}
                        >
                          Apply Now
                        </Button>

                        <motion.button
                          onClick={() => copyEmail(role.email, role.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-700 border-2 border-slate-600 hover:bg-slate-600 hover:border-slate-500 text-white font-bold transition-all duration-300 shadow-lg shadow-slate-900/50"
                        >
                          {copiedEmail === role.id ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                              Email Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              Copy Email
                            </>
                          )}
                        </motion.button>

                        <Button
                          href={`mailto:${role.email}?subject=${encodeURIComponent('Query: ' + role.title)}`}
                          variant="ghost"
                          leftIcon={<MessageCircle className="h-4 w-4" />}
                        >
                          Ask Questions
                        </Button>
                      </div>

                      {/* Quick Info Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="font-mono">{role.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>Position ID:</span>
                          <span className="font-mono text-slate-400">{role.id}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Life at Mirai CTA */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-950/40 via-indigo-950/40 to-sky-950/40 border border-white/20 rounded-3xl p-12 lg:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)]" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to shaping India's infrastructure.
            </p>
            <Button
              href="mailto:careers@mirai.example?subject=General Application"
              variant="primary"
              leftIcon={<Briefcase className="h-5 w-5" />}
            >
              Send General Application
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
