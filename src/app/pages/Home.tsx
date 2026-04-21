// import { motion } from "framer-motion";
// import {
//   Package,
//   Truck,
//   Globe,
//   Shield,
//   Clock,
//   Award,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export function Home() {
//   const stats = [
//     { number: "50K+", label: "Deliveries Completed" },
//     { number: "150+", label: "Countries Covered" },
//     { number: "98%", label: "On-Time Delivery" },
//     { number: "24/7", label: "Customer Support" },
//   ];

//   const services = [
//     {
//       icon: <Truck className="w-12 h-12 text-blue-600" />,
//       title: "Express Delivery",
//       description:
//         "Fast and reliable delivery service for urgent shipments within 24-48 hours.",
//     },
//     {
//       icon: <Globe className="w-12 h-12 text-blue-600" />,
//       title: "Global Shipping",
//       description:
//         "Worldwide shipping coverage to over 150 countries with customs support.",
//     },
//     {
//       icon: <Package className="w-12 h-12 text-blue-600" />,
//       title: "Warehousing",
//       description:
//         "Secure storage solutions with inventory management and distribution services.",
//     },
//     {
//       icon: <Shield className="w-12 h-12 text-blue-600" />,
//       title: "Package Insurance",
//       description:
//         "Full coverage protection for your valuable shipments and cargo.",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       company: "Tech Solutions Inc.",
//       text: "SwiftCourier has been our go-to logistics partner for 3 years. Their reliability and customer service are unmatched!",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       company: "Global Trade Co.",
//       text: "Excellent tracking system and professional handling of our international shipments. Highly recommended!",
//       rating: 5,
//     },
//     {
//       name: "Emily Rodriguez",
//       company: "E-commerce Plus",
//       text: "Fast, efficient, and affordable. SwiftCourier helped scale our delivery operations seamlessly.",
//       rating: 5,
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <section
//         className="relative h-[600px] flex items-center justify-center text-white"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1760662052295-f84068499a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc2NzQ0MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-blue-600/80"></div>
//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl mb-6"
//           >
//             Fast & Reliable Logistics Solutions
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl md:text-2xl mb-8"
//           >
//             Delivering excellence across the globe with real-time tracking and
//             secure handling
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link
//               to="/tracking"
//               className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
//             >
//               Track Your Shipment <ArrowRight className="w-5 h-5" />
//             </Link>
//             <Link
//               to="/contact"
//               className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//             >
//               Get a Quote
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="text-4xl md:text-5xl text-blue-600 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl mb-4">Why Choose SwiftCourier?</h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               We provide comprehensive logistics solutions tailored to your
//               business needs
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-xl mb-3">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         className="py-20 relative"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzaGlwcGluZyUyMGJveGVzfGVufDF8fHx8MTc3Njc0NDE5N3ww&ixlib=rb-4.1.0&q=80&w=1080)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 to-gray-800/90"></div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl mb-6">Our Commitment to Excellence</h2>
//               <p className="text-lg mb-6">
//                 With over a decade of experience in the logistics industry,
//                 we've built a reputation for reliability, speed, and customer
//                 satisfaction.
//               </p>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
//                   <span>Real-time GPS tracking for all shipments</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
//                   <span>Dedicated customer support available 24/7</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
//                   <span>Secure handling with full insurance coverage</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
//                   <span>Eco-friendly delivery options available</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
//                 <Clock className="w-10 h-10 text-blue-400 mb-3" />
//                 <h3 className="text-2xl mb-2">Fast Processing</h3>
//                 <p className="text-gray-300">Same-day pickup available</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
//                 <Shield className="w-10 h-10 text-blue-400 mb-3" />
//                 <h3 className="text-2xl mb-2">100% Secure</h3>
//                 <p className="text-gray-300">Insured deliveries</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
//                 <Globe className="w-10 h-10 text-blue-400 mb-3" />
//                 <h3 className="text-2xl mb-2">Global Reach</h3>
//                 <p className="text-gray-300">150+ countries</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
//                 <Award className="w-10 h-10 text-blue-400 mb-3" />
//                 <h3 className="text-2xl mb-2">Award Winning</h3>
//                 <p className="text-gray-300">Industry leader</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl mb-4">What Our Clients Say</h2>
//             <p className="text-gray-600 text-lg">
//               Don't just take our word for it - hear from our satisfied
//               customers
//             </p>
//           </div>
//           <div className="space-y-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="px-4">
//                 <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//                   <div className="flex justify-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-6 h-6 text-yellow-400 fill-current"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="text-gray-700 text-lg mb-6 italic">
//                     "{testimonial.text}"
//                   </p>
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {testimonial.name}
//                     </p>
//                     <p className="text-gray-600">{testimonial.company}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-blue-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl mb-4">Ready to Ship with Us?</h2>
//           <p className="text-xl mb-8">
//             Get started today and experience hassle-free logistics
//           </p>
//           <Link
//             to="/contact"
//             className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
//           >
//             Contact Us Now
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Added hooks
import {
  Package,
  Truck,
  Globe,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Ship,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

// New Counter Component for dynamic numbering
function Counter({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  // Parse the number from strings like "50K+", "98%", etc.
  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Home() {
  const stats = [
    { number: "50K+", label: "Deliveries Completed" },
    { number: "150+", label: "Countries Covered" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "24/7", label: "Customer Support" },
  ];

  const services = [
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Express Delivery",
      description:
        "Priority routing for urgent shipments with guaranteed 24-hour arrival windows.",
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: "Global Shipping",
      description:
        "Seamless international logistics with automated customs clearance documentation.",
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "Smart Warehousing",
      description:
        "AI-driven inventory management in climate-controlled strategic hubs.",
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Full Protection",
      description:
        "Comprehensive cargo insurance covering 100% of your shipment value.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      text: "The real-time tracking is incredibly precise. It changed how we manage our supply chain.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Trade Co.",
      text: "Professional, punctual, and proactive. They handle customs hurdles like they don't exist.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow"
          alt="Cargo Terminal"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-orange-500 text-md font-bold uppercase tracking-widest mb-6 "
          >
            SWIFT COURIER EXCLUSIVE SERVICE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Move Faster. <br />
            <span className="text-orange-500">Reach Further.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/tracking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              Track Shipment <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION (Dynamic Counting Applied) */}
      <section className="py-12 relative bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center border-r border-slate-800 last:border-0"
              >
                <div className="text-4xl font-black text-orange-500 mb-1">
                  <Counter value={stat.number} />
                </div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Truck className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
                Our Expertise
              </h2>
              <p className="text-4xl md:text-5xl font-black text-slate-950">
                Integrated supply chain solutions for the modern era.
              </p>
            </div>
            <Link
              to="/services"
              className="text-slate-950 font-bold flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all"
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMITMENT SECTION (Fixed Parallax) */}
      <section
        className="py-24 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Uncompromising Standards <br />
                <span className="text-orange-500">In Every Mile.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Real-time proprietary GPS tracking technology",
                  "24/7 dedicated account management",
                  "Multi-modal transport (Air, Sea, Land)",
                  "Eco-conscious carbon-neutral initiatives",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="bg-orange-500/20 p-2 rounded-full group-hover:bg-orange-500 transition-colors">
                      <CheckCircle className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <span className="text-lg font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <Plane className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-xl font-bold">Air Freight</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Next flight out service
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 mt-8 hover:bg-white/10 transition-colors">
                <Ship className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-xl font-bold">Ocean Cargo</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Full container loads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Partner Feedback
            </h2>
            <p className="text-4xl font-black text-slate-950">
              Trusted by Global Enterprises
            </p>
          </div>
          <div className="grid gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-4xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-black text-2xl">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="text-xl text-slate-700 italic mb-6">
                    "{t.text}"
                  </p>
                  <h4 className="font-bold text-slate-950">{t.name}</h4>
                  <p className="text-orange-500 text-sm font-bold uppercase">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 relative bg-slate-950 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Night Logistics"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Join 5,000+ businesses that rely on SwiftCourier for their
            mission-critical deliveries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-full font-black text-lg transition-all shadow-xl shadow-orange-500/20"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="bg-white text-slate-950 hover:bg-slate-100 px-12 py-5 rounded-full font-black text-lg transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
