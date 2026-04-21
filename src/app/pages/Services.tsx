// import { motion } from "framer-motion";
// import {
//   Truck,
//   Globe,
//   Package,
//   Warehouse,
//   Shield,
//   Plane,
//   Ship,
//   Box,
// } from "lucide-react";

// export function Services() {
//   const services = [
//     {
//       icon: <Truck className="w-16 h-16 text-blue-600" />,
//       title: "Express Delivery",
//       description:
//         "Lightning-fast delivery services for time-sensitive shipments. Get your packages delivered within 24-48 hours across major cities.",
//       features: [
//         "Same-day pickup",
//         "Real-time tracking",
//         "Signature confirmation",
//         "Insurance included",
//       ],
//     },
//     {
//       icon: <Globe className="w-16 h-16 text-blue-600" />,
//       title: "International Shipping",
//       description:
//         "Seamless global shipping solutions to over 150 countries with full customs support and documentation assistance.",
//       features: [
//         "Customs clearance",
//         "Door-to-door delivery",
//         "Multi-currency support",
//         "Import/export expertise",
//       ],
//     },
//     {
//       icon: <Plane className="w-16 h-16 text-blue-600" />,
//       title: "Air Freight",
//       description:
//         "Fast and reliable air cargo services for urgent international shipments with priority handling.",
//       features: [
//         "Priority boarding",
//         "Express customs",
//         "Temperature control",
//         "Charter options",
//       ],
//     },
//     {
//       icon: <Ship className="w-16 h-16 text-blue-600" />,
//       title: "Ocean Freight",
//       description:
//         "Cost-effective sea freight solutions for large volume shipments with full container and LCL options.",
//       features: [
//         "FCL & LCL options",
//         "Port-to-port",
//         "Bulk shipping",
//         "Competitive rates",
//       ],
//     },
//     {
//       icon: <Warehouse className="w-16 h-16 text-blue-600" />,
//       title: "Warehousing Solutions",
//       description:
//         "Secure storage facilities with inventory management, order fulfillment, and distribution services.",
//       features: [
//         "Climate controlled",
//         "Inventory tracking",
//         "Pick & pack",
//         "Distribution center",
//       ],
//     },
//     {
//       icon: <Package className="w-16 h-16 text-blue-600" />,
//       title: "E-commerce Fulfillment",
//       description:
//         "Complete e-commerce logistics from storage to last-mile delivery, integrated with major platforms.",
//       features: [
//         "Platform integration",
//         "Order processing",
//         "Returns management",
//         "COD available",
//       ],
//     },
//     {
//       icon: <Box className="w-16 h-16 text-blue-600" />,
//       title: "Packaging Services",
//       description:
//         "Professional packaging solutions to ensure your items arrive safely, with custom options available.",
//       features: [
//         "Custom packaging",
//         "Fragile handling",
//         "Crating service",
//         "Eco-friendly materials",
//       ],
//     },
//     {
//       icon: <Shield className="w-16 h-16 text-blue-600" />,
//       title: "Insurance & Security",
//       description:
//         "Comprehensive insurance coverage and advanced security measures to protect your valuable shipments.",
//       features: [
//         "Full coverage",
//         "GPS tracking",
//         "Secure facilities",
//         "Claims support",
//       ],
//     },
//   ];

//   const industries = [
//     { name: "E-commerce", icon: "🛒" },
//     { name: "Healthcare", icon: "🏥" },
//     { name: "Manufacturing", icon: "🏭" },
//     { name: "Retail", icon: "🏬" },
//     { name: "Technology", icon: "💻" },
//     { name: "Food & Beverage", icon: "🍽️" },
//   ];

//   return (
//     <div className="min-h-screen pt-16">
//       <section
//         className="relative h-[400px] flex items-center justify-center text-white"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1763752194641-3c5638aec65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3YXJlaG91c2UlMjBzaGlwcGluZyUyMGJveGVzfGVufDF8fHx8MTc3Njc0NDE5N3ww&ixlib=rb-4.1.0&q=80&w=1080)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-gray-900/80"></div>
//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl mb-4"
//           >
//             Our Services
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl"
//           >
//             Comprehensive logistics solutions for every need
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-2xl mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <div className="space-y-2">
//                   {service.features.map((feature, i) => (
//                     <div key={i} className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl mb-4">Industries We Serve</h2>
//             <p className="text-gray-600 text-lg">
//               Tailored logistics solutions for diverse sectors
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {industries.map((industry, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="text-4xl mb-3">{industry.icon}</div>
//                 <p className="text-gray-800 font-medium">{industry.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-blue-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl mb-4">Need a Custom Solution?</h2>
//           <p className="text-xl mb-8">
//             Our team can design a tailored logistics plan for your unique
//             requirements
//           </p>
//           <a
//             href="/contact"
//             className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
//           >
//             Request a Consultation
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import {
  Truck,
  Globe,
  Package,
  Warehouse,
  Shield,
  Plane,
  Ship,
  Box,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Express Delivery",
      description:
        "Lightning-fast delivery services for time-sensitive shipments. Get your packages delivered within 24-48 hours across major cities.",
      features: [
        "Same-day pickup",
        "Real-time tracking",
        "Signature confirmation",
        "Insurance included",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: "International Shipping",
      description:
        "Seamless global shipping solutions to over 150 countries with full customs support and documentation assistance.",
      features: [
        "Customs clearance",
        "Door-to-door delivery",
        "Multi-currency support",
        "Import/export expertise",
      ],
    },
    {
      icon: <Plane className="w-12 h-12 text-orange-500" />,
      title: "Air Freight",
      description:
        "Fast and reliable air cargo services for urgent international shipments with priority handling.",
      features: [
        "Priority boarding",
        "Express customs",
        "Temperature control",
        "Charter options",
      ],
    },
    {
      icon: <Ship className="w-12 h-12 text-orange-500" />,
      title: "Ocean Freight",
      description:
        "Cost-effective sea freight solutions for large volume shipments with full container and LCL options.",
      features: [
        "FCL & LCL options",
        "Port-to-port",
        "Bulk shipping",
        "Competitive rates",
      ],
    },
    {
      icon: <Warehouse className="w-12 h-12 text-orange-500" />,
      title: "Warehousing Solutions",
      description:
        "Secure storage facilities with inventory management, order fulfillment, and distribution services.",
      features: [
        "Climate controlled",
        "Inventory tracking",
        "Pick & pack",
        "Distribution center",
      ],
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "E-commerce Fulfillment",
      description:
        "Complete e-commerce logistics from storage to last-mile delivery, integrated with major platforms.",
      features: [
        "Platform integration",
        "Order processing",
        "Returns management",
        "COD available",
      ],
    },
    {
      icon: <Box className="w-12 h-12 text-orange-500" />,
      title: "Packaging Services",
      description:
        "Professional packaging solutions to ensure your items arrive safely, with custom options available.",
      features: [
        "Custom packaging",
        "Fragile handling",
        "Crating service",
        "Eco-friendly materials",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Insurance & Security",
      description:
        "Comprehensive insurance coverage and advanced security measures to protect your valuable shipments.",
      features: [
        "Full coverage",
        "GPS tracking",
        "Secure facilities",
        "Claims support",
      ],
    },
  ];

  const industries = [
    { name: "E-commerce", icon: "🛒" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Retail", icon: "🏬" },
    { name: "Technology", icon: "💻" },
    { name: "Food & Beverage", icon: "🍽️" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION - Softened Typography */}
      <section
        className="relative h-[450px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm"
          >
            End-to-End Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight"
          >
            Tailored Logistics for{" "}
            <span className="italic font-normal">Modern Business</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-orange-500/50 w-24 mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="shrink-0">
                    <div className="p-4 bg-white rounded-2xl shadow-sm inline-block group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-4">
            Market Sectors
          </h2>
          <p className="text-3xl md:text-4xl font-black text-white mb-16">
            Industries We Empower
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <p className="text-white font-bold text-sm uppercase tracking-wide">
                  {industry.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-500/20">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Need a Bespoke Solution?
              </h2>
              <p className="text-orange-50 text-xl mb-10 max-w-2xl mx-auto opacity-90">
                Our logistics architects can design a tailored plan for your
                unique supply chain requirements.
              </p>
              <a
                href="/contact"
                className="bg-slate-950 text-white px-10 py-4 rounded-full font-black hover:bg-slate-800 transition-all inline-flex items-center gap-3"
              >
                Request a Consultation <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            {/* Abstract background shapes for the CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
