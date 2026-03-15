/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Dumbbell, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Zap, 
  Trophy, 
  Users, 
  Flame 
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-titan-black to-transparent">
    <div className="flex items-center gap-2">
      <div className="bg-titan-yellow p-1.5 rounded-lg">
        <Dumbbell className="w-6 h-6 text-titan-black" />
      </div>
      <span className="text-2xl font-display font-bold tracking-tighter">TITAN <span className="text-titan-yellow">FITNESS</span></span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
      <a href="#" className="hover:text-titan-yellow transition-colors">Home</a>
      <a href="#" className="hover:text-titan-yellow transition-colors">Programs</a>
      <a href="#" className="hover:text-titan-yellow transition-colors">Trainers</a>
      <a href="#" className="hover:text-titan-yellow transition-colors">About</a>
    </div>
    <div className="flex items-center gap-4">
      <a href="tel:8400029443" className="hidden sm:flex items-center gap-2 text-sm font-bold">
        <Phone className="w-4 h-4 text-titan-yellow" />
        84000 29443
      </a>
      <a href="#pricing" className="bg-titan-yellow text-titan-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
        JOIN NOW
      </a>
    </div>
  </nav>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/918400029443"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
  >
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-titan-black text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
      Chat with us
    </span>
  </motion.a>
);

const FloatingGraphic = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-20, 20, -20] }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    { icon: <Zap className="w-5 h-5" />, label: "Strength Training" },
    { icon: <Flame className="w-5 h-5" />, label: "Weight Loss Programs" },
    { icon: <Users className="w-5 h-5" />, label: "Personal Training" },
    { icon: <Trophy className="w-5 h-5" />, label: "Crossfit Training" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: y1 }} className="h-full w-full">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym Background" 
              className="w-full h-full object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-titan-black via-titan-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-transparent to-transparent z-10" />
        </div>

        {/* Glowing Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 glow-yellow rounded-full z-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 glow-yellow rounded-full z-10" />

        {/* Floating Graphics */}
        <FloatingGraphic className="absolute top-1/3 right-[15%] z-20 hidden lg:block opacity-20" delay={0}>
          <Dumbbell className="w-32 h-32 text-titan-yellow rotate-45" />
        </FloatingGraphic>
        <FloatingGraphic className="absolute bottom-1/4 left-[10%] z-20 hidden lg:block opacity-10" delay={2}>
          <Dumbbell className="w-24 h-24 text-white -rotate-12" />
        </FloatingGraphic>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-30 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-titan-yellow/10 text-titan-yellow border border-titan-yellow/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                "Starts Your Fitness Journey Here"
              </span>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-6 tracking-tighter">
                UNLEASH THE <br />
                <span className="text-titan-yellow">TITAN</span> WITHIN
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                Train harder, get stronger and transform your body at Titan Fitness Varanasi. Premium equipment, expert trainers, and a community that pushes you.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-titan-yellow text-titan-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors flex items-center gap-2 group">
                  JOIN NOW
                  <Zap className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                </button>
                <button className="border-2 border-white/20 hover:border-titan-yellow px-10 py-4 rounded-lg font-bold text-lg transition-all hover:bg-titan-yellow/5">
                  BOOK FREE TRIAL
                </button>
              </div>

              {/* Location & Contact */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400 border-t border-white/10 pt-8">
                <div className="flex items-start gap-3 max-w-xs">
                  <MapPin className="w-5 h-5 text-titan-yellow shrink-0" />
                  <p>NH2 Bypass, Opposite Heritage Medical College, Bhadawar, Varanasi, UP 221311</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-titan-yellow" />
                  <p className="font-bold text-white">84000 29443</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-titan-yellow" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="programs" className="relative z-30 py-24 bg-titan-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-titan-gray border border-white/5 hover:border-titan-yellow/30 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-titan-yellow/10 rounded-xl flex items-center justify-center text-titan-yellow mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-titan-yellow" />
                  {feature.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Experience world-class training programs designed to push your limits and achieve results.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-30 py-24 bg-titan-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
                  alt="Titan Fitness Facility" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-transparent to-transparent" />
                
                {/* Owner Badge */}
                <div className="absolute bottom-8 left-8 bg-titan-yellow text-titan-black p-6 rounded-2xl shadow-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1">Founder & Head Coach</p>
                  <h4 className="text-2xl font-display font-bold">SURAJ SAINI</h4>
                </div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-titan-yellow opacity-30" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 glow-yellow rounded-full opacity-20" />
            </motion.div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[2px] w-12 bg-titan-yellow" />
                  <span className="text-titan-yellow font-bold tracking-widest uppercase text-sm">About Titan Fitness</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                  WHERE STRENGTH <br />
                  <span className="text-titan-yellow">MEETS DISCIPLINE</span>
                </h2>

                <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
                  <p>
                    Titan Fitness is a modern training facility in Varanasi dedicated to helping people transform their bodies and build a strong lifestyle. Founded by <span className="text-white font-bold">Suraj Saini</span>, Titan Fitness focuses on strength training, weight loss programs, and complete body transformation.
                  </p>
                  <p>
                    Our gym provides a motivating environment where beginners and advanced athletes can train with professional equipment and expert guidance. At Titan Fitness, we believe that discipline, consistency, and the right training environment can completely change your life.
                  </p>
                  <p>
                    Whether your goal is fat loss, muscle gain, strength building or overall fitness, Titan Fitness provides structured training programs designed to deliver real results.
                  </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {[
                    "Modern Strength Equipment",
                    "Crossfit Training Area",
                    "Personal Training Support",
                    "Yoga, Aerobics & Zumba",
                    "Changing Room with Lockers",
                    "Proper Ventilation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-semibold">
                      <div className="w-6 h-6 rounded-full bg-titan-yellow/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-titan-yellow" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-titan-yellow text-titan-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all flex items-center gap-3 group">
                  START YOUR FITNESS JOURNEY
                  <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 py-16 bg-titan-gray border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Happy Members" },
              { value: "PRO", label: "Gym Equipment" },
              { value: "12+", label: "Training Programs" },
              { value: "24/7", label: "Motivating Environment" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-titan-yellow mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="services" className="relative z-30 py-24 bg-titan-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-titan-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Our Training Programs</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                PROFESSIONAL <span className="text-titan-yellow">FITNESS PROGRAMS</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Professional fitness programs designed for real body transformation. Choose the path that fits your goals.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Strength Training",
                desc: "Build muscle and increase overall body strength using professional gym equipment.",
                icon: <Dumbbell className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Weight Loss Program",
                desc: "Structured workouts designed to burn fat and improve fitness levels.",
                icon: <Flame className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Personal Training",
                desc: "One-on-one guidance from trainers to achieve your fitness goals faster.",
                icon: <Users className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Crossfit Training",
                desc: "High intensity functional workouts to improve endurance and power.",
                icon: <Zap className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Group Classes",
                desc: "Train together with motivating group workout sessions.",
                icon: <Users className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1518611012118-29617b0ccd0a?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Boxing Training",
                desc: "Improve strength, speed and stamina with boxing workouts.",
                icon: <Trophy className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Yoga & Zumba",
                desc: "Flexible training programs for mobility, cardio and stress relief.",
                icon: <Flame className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1552196564-972b46b52e47?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Diet Plan Guidance",
                desc: "Professional diet support for fat loss and muscle gain.",
                icon: <Zap className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/5 hover:border-titan-yellow/50 transition-all duration-500"
              >
                {/* Background Image */}
                <img 
                  src={program.img} 
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titan-black via-titan-black/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-titan-yellow text-titan-black rounded-xl flex items-center justify-center mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-titan-yellow transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {program.desc}
                  </p>
                </div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-titan-yellow/30 rounded-2xl transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Facilities Section */}
      <section id="facilities" className="relative z-30 py-24 bg-titan-black overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }} />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-titan-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Our Gym Facilities</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                WORLD CLASS <span className="text-titan-yellow">FACILITIES</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Everything you need for a complete fitness experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Top Quality Machines",
                desc: "Professional strength machines and free weights for effective workouts.",
                icon: <Dumbbell className="w-6 h-6" />
              },
              {
                title: "Crossfit Training Area",
                desc: "Dedicated space for high intensity Crossfit workouts.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Personal Training",
                desc: "Expert trainers available to guide members during workouts.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Locker Facility",
                desc: "Secure locker and changing facilities for members.",
                icon: <CheckCircle2 className="w-6 h-6" />
              },
              {
                title: "Yoga & Zumba",
                desc: "Special classes designed for flexibility, cardio and fun workouts.",
                icon: <Flame className="w-6 h-6" />
              },
              {
                title: "Healthy Cafeteria",
                desc: "Refresh yourself with healthy food and drinks.",
                icon: <Flame className="w-6 h-6" /> // Using Flame as a placeholder for energy/food
              },
              {
                title: "Good Environment",
                desc: "Clean gym atmosphere with motivating workout energy.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Proper Ventilation",
                desc: "Well ventilated gym space for comfortable training.",
                icon: <Zap className="w-6 h-6" />
              }
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl bg-titan-gray border border-white/5 hover:border-titan-yellow/30 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-titan-yellow/10 rounded-xl flex items-center justify-center text-titan-yellow mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-titan-yellow transition-colors">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {facility.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Facilities CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 italic">
              TRAIN HARD. STAY STRONG. BECOME A TITAN.
            </h3>
            <button className="bg-titan-yellow text-titan-black px-12 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(251,191,36,0.2)]">
              START TRAINING TODAY
              <Zap className="w-5 h-5 fill-current" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans Section */}

      <section id="pricing" className="relative z-30 py-24 bg-titan-black overflow-hidden">
        {/* Metallic Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-titan-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Membership Plans</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                CHOOSE YOUR <span className="text-titan-yellow">POWER PLAN</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Choose the best plan and start your fitness journey today.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "1 Month Plan",
                price: "1200",
                features: ["Full Gym Access", "Strength Training Equipment", "Cardio Area Access", "Locker Facility"],
                highlight: false,
                btnText: "Join Now"
              },
              {
                name: "3 Month Plan",
                price: "3000",
                features: ["Full Gym Access", "Strength Training Equipment", "Cardio Area Access", "Workout Guidance"],
                highlight: false,
                btnText: "Join Now"
              },
              {
                name: "6 Month Plan",
                price: "5500",
                features: ["Full Gym Access", "Strength Training Equipment", "Workout Support", "Locker Facility"],
                highlight: false,
                btnText: "Join Now"
              },
              {
                name: "12 Month Plan",
                price: "9000",
                features: ["Full Gym Access", "Personal Trainer Support", "Diet Plan Guidance", "Body Transformation Support"],
                highlight: true,
                btnText: "Become Titan"
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border transition-all duration-500 group ${
                  plan.highlight 
                    ? "bg-titan-yellow border-titan-yellow shadow-[0_0_40px_rgba(251,191,36,0.2)]" 
                    : "bg-titan-gray border-white/5 hover:border-titan-yellow/30"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-titan-black text-titan-yellow text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full border border-titan-yellow/50">
                    Best Value
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-titan-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-4xl font-display font-black ${plan.highlight ? "text-titan-black" : "text-titan-yellow"}`}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-sm font-bold ${plan.highlight ? "text-titan-black/60" : "text-gray-500"}`}>
                    / Total
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-titan-black" : "text-titan-yellow"}`} />
                      <span className={`text-sm font-semibold ${plan.highlight ? "text-titan-black/80" : "text-gray-400"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`block text-center w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                  plan.highlight 
                    ? "bg-titan-black text-white hover:scale-105 shadow-xl" 
                    : "bg-white/5 text-white hover:bg-titan-yellow hover:text-titan-black"
                }`}>
                  {plan.btnText}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              NO MORE EXCUSES. START YOUR FITNESS JOURNEY TODAY.
            </h3>
            <a href="#contact" className="bg-titan-yellow text-titan-black px-12 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 mx-auto w-fit">
              JOIN TITAN FITNESS
              <Zap className="w-5 h-5 fill-current" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-30 py-24 bg-titan-black overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-titan-yellow p-12 md:p-20 rounded-[3rem] overflow-hidden text-center"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-titan-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-titan-black mb-8 leading-tight">
                READY TO TRANSFORM <br /> YOUR BODY?
              </h2>
              <p className="text-titan-black/70 text-lg md:text-xl font-semibold mb-10">
                Join Titan Fitness Varanasi today and start your journey with the best equipment and expert guidance.
              </p>
              <a href="#contact" className="bg-titan-black text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl flex items-center gap-3 mx-auto w-fit">
                JOIN TITAN FITNESS TODAY
                <Zap className="w-6 h-6 fill-titan-yellow text-titan-yellow" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="relative z-30 py-24 bg-titan-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-titan-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Visit Titan Fitness</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                GET IN <span className="text-titan-yellow">TOUCH</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Start your fitness journey today. Visit our facility or contact us for more information.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-titan-yellow/10 rounded-xl flex items-center justify-center text-titan-yellow shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Gym Address</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        NH2 Bypass, Opposite Heritage Medical College, Bhadawar, Varanasi, UP 221311
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-titan-yellow/10 rounded-xl flex items-center justify-center text-titan-yellow shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Phone Number</h4>
                      <a href="tel:8400029443" className="text-gray-400 text-sm hover:text-titan-yellow transition-colors">84000 29443</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-titan-yellow/10 rounded-xl flex items-center justify-center text-titan-yellow shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Email Address</h4>
                      <a href="mailto:surajsaini19072003@gmail.com" className="text-gray-400 text-sm hover:text-titan-yellow transition-colors break-all">
                        surajsaini19072003@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-titan-gray p-8 rounded-3xl border border-white/5">
                  <h4 className="text-titan-yellow font-bold uppercase tracking-widest text-xs mb-6">Opening Hours</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-white font-semibold">Mon – Sat</span>
                      <span className="text-titan-yellow font-bold">5:30 AM – 10:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Sunday</span>
                      <span className="text-titan-yellow font-bold">7:00 AM – 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="tel:8400029443" className="bg-titan-yellow text-titan-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
                <a href="https://maps.google.com/?q=Titan+Fitness+Varanasi+NH2+Bypass" target="_blank" rel="noopener noreferrer" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  GET DIRECTIONS
                </a>
                <a href="#pricing" className="bg-titan-gray text-titan-yellow border border-titan-yellow/20 px-8 py-4 rounded-xl font-bold hover:bg-titan-yellow/10 transition-all">
                  BOOK FREE TRIAL
                </a>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 h-[450px] rounded-3xl overflow-hidden border border-white/10"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8123456789!2d82.9!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA4MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 bg-titan-black pt-24 pb-12 overflow-hidden border-t border-white/5">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-titan-yellow p-1.5 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-titan-black" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tighter">TITAN <span className="text-titan-yellow">FITNESS</span></span>
              </div>
              <p className="text-titan-yellow font-bold italic text-sm">"Unleash The Titan Within"</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Titan Fitness is a professional fitness center in Varanasi focused on strength training, body transformation and a healthy lifestyle.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-titan-yellow transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-titan-yellow transition-colors">About</a></li>
                <li><a href="#programs" className="hover:text-titan-yellow transition-colors">Programs</a></li>
                <li><a href="#pricing" className="hover:text-titan-yellow transition-colors">Membership</a></li>
                <li><a href="#facilities" className="hover:text-titan-yellow transition-colors">Facilities</a></li>
                <li><a href="#contact" className="hover:text-titan-yellow transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Services</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#services" className="hover:text-titan-yellow transition-colors">Strength Training</a></li>
                <li><a href="#services" className="hover:text-titan-yellow transition-colors">Weight Loss</a></li>
                <li><a href="#services" className="hover:text-titan-yellow transition-colors">Crossfit Training</a></li>
                <li><a href="#services" className="hover:text-titan-yellow transition-colors">Personal Training</a></li>
                <li><a href="#services" className="hover:text-titan-yellow transition-colors">Boxing Training</a></li>
                <li><a href="#services" className="hover:text-titan-yellow transition-colors">Yoga & Zumba</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Social Media</h4>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'Facebook', 'YouTube', 'WhatsApp'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-titan-gray border border-white/5 px-4 py-2 rounded-lg text-xs font-bold text-gray-400 hover:text-titan-yellow hover:border-titan-yellow/30 transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
              <div className="mt-8 p-6 bg-titan-gray rounded-2xl border border-white/5">
                <p className="text-xs text-gray-500 mb-2">Owner & Founder</p>
                <p className="text-white font-bold">Suraj Saini</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs">© 2026 Titan Fitness. All Rights Reserved.</p>
            <div className="flex gap-8 text-xs text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />

      {/* Decorative Text Stroke */}

      {/* Decorative Text Stroke */}
      <div className="absolute top-[20%] right-0 pointer-events-none select-none overflow-hidden hidden xl:block">
        <span className="text-[20rem] font-display font-black text-stroke leading-none opacity-10">
          TITAN
        </span>
      </div>
    </div>
  );
}
