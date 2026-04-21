// import { motion } from "framer-motion";
// import { Target, Eye, Users, TrendingUp, Award, Globe2 } from "lucide-react";

// export function About() {
//   const values = [
//     {
//       icon: <Shield className="w-10 h-10 text-blue-600" />,
//       title: "Reliability",
//       description:
//         "We deliver on our promises with consistent, dependable service every time.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-blue-600" />,
//       title: "Customer First",
//       description:
//         "Your satisfaction is our priority. We go the extra mile for every client.",
//     },
//     {
//       icon: <Award className="w-10 h-10 text-blue-600" />,
//       title: "Excellence",
//       description:
//         "Striving for the highest standards in every aspect of our service.",
//     },
//     {
//       icon: <Globe2 className="w-10 h-10 text-blue-600" />,
//       title: "Global Vision",
//       description:
//         "Connecting businesses worldwide with seamless logistics solutions.",
//     },
//   ];

//   const milestones = [
//     {
//       year: "2010",
//       event: "Company Founded",
//       description: "Started with a single warehouse and 10 employees",
//     },
//     {
//       year: "2014",
//       event: "International Expansion",
//       description: "Expanded operations to 50 countries",
//     },
//     {
//       year: "2018",
//       event: "Technology Integration",
//       description: "Launched real-time tracking system",
//     },
//     {
//       year: "2022",
//       event: "Carbon Neutral",
//       description: "Achieved carbon-neutral delivery operations",
//     },
//     {
//       year: "2026",
//       event: "Industry Leader",
//       description: "Serving 50,000+ businesses globally",
//     },
//   ];

//   const team = [
//     {
//       name: "John Anderson",
//       role: "CEO & Founder",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
//     },
//     {
//       name: "Sarah Mitchell",
//       role: "Chief Operations Officer",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
//     },
//     {
//       name: "David Park",
//       role: "Head of Logistics",
//       image:
//         "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
//     },
//     {
//       name: "Maria Garcia",
//       role: "Customer Relations Director",
//       image:
//         "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-16">
//       <section
//         className="relative h-[400px] flex items-center justify-center text-white"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1771308136615-3cded1ed5cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc2NzQ0MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 to-blue-900/80"></div>
//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl mb-4"
//           >
//             About SwiftCourier
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl"
//           >
//             Pioneering the future of global logistics since 2010
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl mb-6">Our Story</h2>
//               <p className="text-gray-600 text-lg mb-4">
//                 Founded in 2010, SwiftCourier started as a small local delivery
//                 service with a big vision: to revolutionize the logistics
//                 industry through technology, reliability, and exceptional
//                 customer service.
//               </p>
//               <p className="text-gray-600 text-lg mb-4">
//                 Today, we've grown into a global logistics powerhouse, serving
//                 over 50,000 businesses across 150+ countries. Our success is
//                 built on our unwavering commitment to innovation,
//                 sustainability, and putting our customers first.
//               </p>
//               <p className="text-gray-600 text-lg">
//                 We continue to invest in cutting-edge technology, sustainable
//                 practices, and our people to ensure we remain the trusted
//                 logistics partner for businesses of all sizes.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="grid grid-cols-2 gap-4"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1769477145932-edd5a9d7567c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc2NzQ0MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
//                 alt="Logistics"
//                 className="rounded-lg shadow-lg w-full h-48 object-cover"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1773125929765-99d4d67e831d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3YXJlaG91c2UlMjBzaGlwcGluZyUyMGJveGVzfGVufDF8fHx8MTc3Njc0NDE5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
//                 alt="Warehouse"
//                 className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1766561993769-b834c1c6e456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc2NzQ0MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
//                 alt="Delivery"
//                 className="rounded-lg shadow-lg w-full h-48 object-cover"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1775756789951-3f2ef4307258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc2NzQ0MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
//                 alt="Transport"
//                 className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl mb-4">Mission & Vision</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-white p-8 rounded-lg shadow-lg"
//             >
//               <Target className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-2xl mb-4">Our Mission</h3>
//               <p className="text-gray-600 text-lg">
//                 To provide world-class logistics solutions that empower
//                 businesses to thrive in a connected world. We are committed to
//                 delivering excellence through innovation, sustainability, and
//                 unwavering dedication to customer success.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="bg-white p-8 rounded-lg shadow-lg"
//             >
//               <Eye className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-2xl mb-4">Our Vision</h3>
//               <p className="text-gray-600 text-lg">
//                 To be the world's most trusted and innovative logistics partner,
//                 setting new standards for efficiency, sustainability, and
//                 customer satisfaction. We envision a future where seamless
//                 global commerce is accessible to all.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl mb-4">Our Core Values</h2>
//             <p className="text-gray-600 text-lg">
//               The principles that guide everything we do
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-4">{value.icon}</div>
//                 <h3 className="text-xl mb-3">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl mb-4">Our Journey</h2>
//             <p className="text-gray-600 text-lg">
//               Key milestones in our growth story
//             </p>
//           </div>
//           <div className="relative">
//             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`mb-8 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
//               >
//                 <div
//                   className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}
//                 >
//                   <div className="bg-white p-6 rounded-lg shadow-lg">
//                     <div className="text-blue-600 text-2xl mb-2">
//                       {milestone.year}
//                     </div>
//                     <h3 className="text-xl mb-2">{milestone.event}</h3>
//                     <p className="text-gray-600">{milestone.description}</p>
//                   </div>
//                 </div>
//                 <div className="hidden md:block w-2/12 justify-center">
//                   <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
//                 </div>
//                 <div className="hidden md:block w-5/12"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl mb-4">Meet Our Leadership</h2>
//             <p className="text-gray-600 text-lg">
//               Experienced professionals driving our success
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
//                 />
//                 <h3 className="text-xl mb-1">{member.name}</h3>
//                 <p className="text-gray-600">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function Shield({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//       />
//     </svg>
//   );
// }

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  TrendingUp,
  Award,
  Globe2,
  Shield,
  CheckCircle,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Reliability",
      description:
        "We deliver on our promises with consistent, dependable service every time.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go the extra mile for every client.",
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Excellence",
      description:
        "Striving for the highest standards in every aspect of our service.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-orange-500" />,
      title: "Global Vision",
      description:
        "Connecting businesses worldwide with seamless logistics solutions.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      event: "Company Founded",
      description: "Started with a single warehouse and 10 employees",
    },
    {
      year: "2014",
      event: "International Expansion",
      description: "Expanded operations to 50 countries",
    },
    {
      year: "2018",
      event: "Technology Integration",
      description: "Launched real-time tracking system",
    },
    {
      year: "2022",
      event: "Carbon Neutral",
      description: "Achieved carbon-neutral delivery operations",
    },
    {
      year: "2026",
      event: "Industry Leader",
      description: "Serving 50,000+ businesses globally",
    },
  ];

  const team = [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operations Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "David Park",
      role: "Head of Logistics",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
    {
      name: "Maria Garcia",
      role: "Customer Relations Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER SECTION */}
      <section
        className="relative h-[450px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-orange-500 text-sm font-bold uppercase tracking-widest mb-6"
          >
            Our Legacy
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            About <span className="text-orange-500">SwiftCourier</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200"
          >
            Pioneering the future of global logistics since 2010
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
                Our History
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 leading-tight">
                From Local Deliveries to{" "}
                <span className="text-orange-500">Global Excellence.</span>
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, SwiftCourier started as a small local
                  delivery service with a big vision: to revolutionize the
                  logistics industry through technology, reliability, and
                  exceptional customer service.
                </p>
                <p>
                  Today, we've grown into a global logistics powerhouse, serving
                  over 50,000 businesses across 150+ countries. Our success is
                  built on our unwavering commitment to innovation and
                  sustainability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Logistics"
                className="rounded-3xl shadow-xl w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
                alt="Warehouse"
                className="rounded-3xl shadow-xl w-full h-64 object-cover mt-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-4xl border border-white/10"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To provide world-class logistics solutions that empower
                businesses to thrive in a connected world. We deliver excellence
                through innovation and unwavering dedication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-4xl border border-white/10"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the world's most trusted logistics partner, setting new
                standards for efficiency and sustainability. We envision a
                future where global commerce is accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Foundations
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-950">
              Our Core Values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-2xl transition-all group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              The Journey
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-950">
              Milestones of Growth
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-black mb-4">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center z-10">
                  <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white ring-4 ring-orange-100 shadow-sm"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Leadership
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-950">
              Expert Minds Behind SwiftCourier
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      Leading with integrity and innovation.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
