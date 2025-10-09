import { useMemo, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Construction,
  Copy,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Target,
  TrendingUp,
  Truck,
  Train,
  Users,
  Zap,
  ChevronDown,
} from 'lucide-react';
import Button from '../components/ui/Button';

type RoleCategory = 'railways' | 'bridges' | 'highways' | 'buildings';
type CategoryId = 'all' | RoleCategory;

type Role = {
  id: string;
  title: string;
  summary: string;
  location: string;
  type: string;
  category: RoleCategory;
  experience: string;
  department: string;
  responsibilities: string[];
  requirements: string[];
  email: string;
};

type Category = {
  id: CategoryId;
  name: string;
  icon: ReactNode;
};

const categories: Category[] = [
  {
    id: 'all',
    name: 'All Opportunities',
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 'railways',
    name: 'Railways',
    icon: <Train className="h-5 w-5" />,
  },
  {
    id: 'bridges',
    name: 'Bridges',
    icon: <Construction className="h-5 w-5" />,
  },
  {
    id: 'highways',
    name: 'Highways',
    icon: <Truck className="h-5 w-5" />,
  },
  {
    id: 'buildings',
    name: 'Buildings & Infra',
    icon: <Building2 className="h-5 w-5" />,
  },
];

const CATEGORY_LABELS: Record<RoleCategory, string> = {
  railways: 'Railways',
  bridges: 'Bridges',
  highways: 'Highways',
  buildings: 'Buildings & Infrastructure',
};

const roles: Role[] = [
  {
    id: 'RL-101',
    title: 'Senior Railway Alignment Engineer',
    summary:
      'Lead alignment optimization and corridor design for high-speed and freight programmes across Western India.',
    location: 'Mumbai, India',
    type: 'Full-time · Hybrid',
    category: 'railways',
    experience: '8+ years',
    department: 'Railway Engineering',
    responsibilities: [
      'Develop alignment concepts and detailed design using OpenRail/Bentley workflows.',
      'Coordinate with geotechnical, structural, and systems teams to resolve design interfaces.',
      'Own client presentations, design reviews, and approvals with railway authorities.',
    ],
    requirements: [
      'Bachelor’s in Civil Engineering with specialization in transportation or railways.',
      'Hands-on experience with BIM-based alignment modelling tools.',
      'Proven ability to lead multi-disciplinary design teams on large rail projects.',
    ],
    email: 'railways@mirai.example',
  },
  {
    id: 'RL-118',
    title: 'Rail Systems BIM Coordinator',
    summary:
      'Drive BIM execution, model federation, and clash resolution for metro and commuter rail projects.',
    location: 'Ahmedabad, India',
    type: 'Full-time · On-site',
    category: 'railways',
    experience: '5+ years',
    department: 'Digital Engineering',
    responsibilities: [
      'Set up BIM execution plans and ensure compliance across design partners.',
      'Manage model federation, quality checks, and clash coordination workshops.',
      'Support digital twin initiatives and asset information deliverables.',
    ],
    requirements: [
      '5+ years managing BIM for rail or metro projects.',
      'Advanced knowledge of Revit, Navisworks, and collaborative CDE platforms.',
      'Understanding of GSAS/BIM standards and Indian railway specifications.',
    ],
    email: 'digital@mirai.example',
  },
  {
    id: 'BR-204',
    title: 'Bridge Design Lead',
    summary:
      'Own the structural design and delivery of long-span bridges including cable-stayed and extradosed systems.',
    location: 'Delhi NCR, India',
    type: 'Full-time · Hybrid',
    category: 'bridges',
    experience: '10+ years',
    department: 'Bridge Engineering',
    responsibilities: [
      'Lead concept to IFC stage design for complex bridge structures.',
      'Review and guide structural analysis, detailing, and constructability assessments.',
      'Interface with clients, authorities, and construction partners throughout delivery.',
    ],
    requirements: [
      'Master’s in Structural Engineering with focus on bridges.',
      'Expertise in MIDAS, LUSAS, or similar analysis tools.',
      'Track record delivering major bridge programmes within multidisciplinary teams.',
    ],
    email: 'bridges@mirai.example',
  },
  {
    id: 'HW-311',
    title: 'Highway Geometrics Specialist',
    summary:
      'Deliver 3D geometric design and safety enhancements for national and state highway corridors.',
    location: 'Bengaluru, India',
    type: 'Full-time · Remote-friendly',
    category: 'highways',
    experience: '6+ years',
    department: 'Highway Engineering',
    responsibilities: [
      'Prepare geometrics, corridor modelling, and safety audits meeting IRC and MoRTH standards.',
      'Collaborate with traffic, drainage, and pavement teams to coordinate design outputs.',
      'Provide technical leadership during client and independent engineer reviews.',
    ],
    requirements: [
      'Demonstrated experience across DPR and EPC highway projects.',
      'Strong skills in Civil 3D/OpenRoads and roadway safety assessment tools.',
      'Excellent communication and stakeholder management capabilities.',
    ],
    email: 'highways@mirai.example',
  },
  {
    id: 'BD-118',
    title: 'MEP Project Manager – Transport Hubs',
    summary:
      'Oversee end-to-end MEP strategy for multimodal stations, depots, and operations control centres.',
    location: 'Nagpur, India',
    type: 'Full-time · On-site',
    category: 'buildings',
    experience: '9+ years',
    department: 'Building Services',
    responsibilities: [
      'Plan and manage MEP design packages, schedules, and coordination workflows.',
      'Ensure integration with architectural, structural, and systems design teams.',
      'Monitor site execution, testing, and commissioning support for key assets.',
    ],
    requirements: [
      'Degree in Mechanical or Electrical Engineering with large infrastructure experience.',
      'Robust knowledge of green building practices and smart infrastructure systems.',
      'Experience managing consultants and contractors across complex developments.',
    ],
    email: 'buildings@mirai.example',
  },
];

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Career Growth',
    description:
      'Continuous learning opportunities and clear career progression paths with mentorship programs',
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
    description: "Shape India's infrastructure with nation-building projects that create lasting impact",
  },
];

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const filteredRoles = useMemo(() => {
    return roles.filter(
      (role) => selectedCategory === 'all' || role.category === selectedCategory,
    );
  }, [selectedCategory]);

  const toggleRole = (roleId: string) => {
    setExpandedRole((current) => (current === roleId ? null : roleId));
  };

  const copyEmail = async (email: string, roleId: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      }
      setCopiedEmail(roleId);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (error) {
      console.error('Failed to copy email', error);
      setCopiedEmail(roleId);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  const getCategoryCount = (categoryId: CategoryId) => {
    if (categoryId === 'all') {
      return roles.length;
    }

    return roles.filter((role) => role.category === categoryId).length;
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Hero Banner - Minimal Professional Design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-800/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent" />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-52 h-52 bg-indigo-500/15 rounded-full blur-2xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-60" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-semibold text-white/90 mb-6"
            >
              <Briefcase className="h-4 w-4 text-sky-300" />
              Hiring for Railways · Bridges · Highways
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5"
            >
              Shape India's Infrastructure Future with
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300">
                Mirai Consultancy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Join a multidisciplinary team delivering complex transport and infrastructure programs nationwide. We combine engineering rigor, digital tools, and collaborative culture to build pathways for your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Button
                variant="secondary"
                href="mailto:careers@mirai.example"
                leftIcon={<Mail className="h-4 w-4" />}
              >
                Share Your Profile
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex justify-center"
            >
              <div className="flex flex-col items-center gap-2 text-slate-500 text-[11px] uppercase tracking-[0.18em]">
                <span>Scroll to explore</span>
                <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5">
                  <motion.span
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-1 h-1 rounded-full bg-white"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Open Positions */}
      <div
        id="positions"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-white/10"
      >
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
              Open Positions
            </span>
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Find Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-400">
              Next Role
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            Explore <span className="text-white font-semibold">{roles.length} opportunities</span> across railways, bridges, highways, and building services.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-2 border-blue-500 shadow-blue-500/40'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border-2 border-slate-600 hover:border-slate-500 shadow-slate-900/50'
                }`}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  {category.icon}
                </span>
                {category.name}
                {category.id !== 'all' && (
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">
                    {getCategoryCount(category.id)}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Showing <span className="text-white font-semibold">{filteredRoles.length}</span>{' '}
            {filteredRoles.length === 1 ? 'position' : 'positions'}
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
                      {CATEGORY_LABELS[role.category]}
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
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">
                          About This Role
                        </h4>
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
                                key={item}
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
                                key={item}
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
                          href={`mailto:${role.email}?subject=${encodeURIComponent(
                            'Application: ' + role.title,
                          )}&body=${encodeURIComponent(
                            `Hi Mirai Team,\n\nI am interested in applying for the ${role.title} position.\n\nBest regards`,
                          )}`}
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
                          href={`mailto:${role.email}?subject=${encodeURIComponent(
                            'Query: ' + role.title,
                          )}`}
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

      {/* Why Join Us Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-sky-500/20 border border-white/20 text-xs font-semibold text-blue-300 backdrop-blur-xl">
              Life at Mirai
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
          >
            Why Join{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">
              Mirai?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Grow fast with mentorship, shape nation-building projects, and work with cutting-edge tools in a supportive culture.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-400 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-sky-500/30 border border-white/20 text-blue-400 mb-4 shadow-lg group-hover:shadow-blue-500/40"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Sectors */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent rounded-3xl blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-sky-500/30 border-2 border-white/30 text-sm font-bold text-white backdrop-blur-xl shadow-lg">
              🏗️ Our Expertise
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-white mb-4"
          >
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                Sectors
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full"
              />
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300"
          >
            We hire top talent across our flagship infrastructure sectors
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {[
            {
              title: 'Railways',
              icon: Train,
              color: 'from-red-500 to-orange-500',
              hoverColor: 'hover:border-red-400/60',
              shadowColor: 'hover:shadow-red-500/30',
            },
            {
              title: 'Bridges',
              icon: Construction,
              color: 'from-blue-500 to-cyan-500',
              hoverColor: 'hover:border-blue-400/60',
              shadowColor: 'hover:shadow-blue-500/30',
            },
            {
              title: 'Highways',
              icon: Truck,
              color: 'from-green-500 to-emerald-500',
              hoverColor: 'hover:border-green-400/60',
              shadowColor: 'hover:shadow-green-500/30',
            },
            {
              title: 'Building & Infrastructure',
              icon: Building2,
              color: 'from-purple-500 to-pink-500',
              hoverColor: 'hover:border-purple-400/60',
              shadowColor: 'hover:shadow-purple-500/30',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`group relative bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-xl border-2 border-white/20 ${item.hoverColor} rounded-3xl p-6 text-center transition-all duration-500 cursor-pointer overflow-hidden shadow-xl ${item.shadowColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="mx-auto mb-4 w-12 h-12 flex items-center justify-center"
                >
                  <item.icon
                    className="w-8 h-8 text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
                  />
                </motion.div>

                <motion.h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-all duration-300">
                  {item.title}
                </motion.h4>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`mt-4 h-1 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
