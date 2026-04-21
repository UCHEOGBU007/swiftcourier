// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
// import { toast } from "sonner";

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Message sent successfully! We'll get back to you soon.");
//     setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen pt-16">
//       <section
//         className="relative h-[350px] flex items-center justify-center text-white"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1557023279-753a4ae10313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnbG9iYWwlMjBuZXR3b3JrJTIwd29ybGQlMjBtYXB8ZW58MXx8fHwxNzc2NzQ0MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080)",
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
//             Contact Us
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl"
//           >
//             Get in touch with our logistics experts
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl mb-6">Get In Touch</h2>
//               <p className="text-gray-600 mb-8">
//                 Have questions about our services? Need a custom quote? Our team
//                 is here to help you find the perfect logistics solution.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-lg">
//                     <MapPin className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Office Address</h3>
//                     <p className="text-gray-600">
//                       123 Logistics Ave, Shipping District
//                       <br />
//                       New York, NY 10001, USA
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-lg">
//                     <Phone className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Phone Numbers</h3>
//                     <p className="text-gray-600">
//                       Main: +1 (555) 123-4567
//                       <br />
//                       Support: +1 (555) 123-4568
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-lg">
//                     <Mail className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Email Addresses</h3>
//                     <p className="text-gray-600">
//                       General: info@swiftcourier.com
//                       <br />
//                       Support: support@swiftcourier.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-lg">
//                     <Clock className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Business Hours</h3>
//                     <p className="text-gray-600">
//                       Monday - Friday: 8:00 AM - 8:00 PM
//                       <br />
//                       Saturday: 9:00 AM - 5:00 PM
//                       <br />
//                       Sunday: Closed
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-white p-8 rounded-lg shadow-lg"
//             >
//               <h3 className="text-2xl mb-6">Send us a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="+1 (555) 000-0000"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">Subject *</label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Select a subject</option>
//                     <option value="quote">Request a Quote</option>
//                     <option value="tracking">Tracking Issue</option>
//                     <option value="complaint">File a Complaint</option>
//                     <option value="partnership">Partnership Inquiry</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">Message *</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Tell us how we can help you..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//                 >
//                   <Send className="w-5 h-5" />
//                   Send Message
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-0">
//         <div className="w-full h-96">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION - Softened Typography */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1557023279-753a4ae10313?auto=format&fit=crop&q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm"
          >
            Communication Hub
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-4"
          >
            Let's <span className="italic font-normal">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 font-light"
          >
            Our logistics experts are ready to optimize your supply chain
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-slate-950 mb-6">
                Reach Out
              </h2>
              <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                Have questions about our global network? Need a custom quote?
                Our team is here to help you find the perfect logistics
                solution.
              </p>

              <div className="grid gap-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Office Address
                    </h3>
                    <p className="text-slate-600">
                      123 Logistics Ave, Shipping District
                      <br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Phone Numbers
                    </h3>
                    <p className="text-slate-600">
                      Main: +1 (555) 123-4567
                      <br />
                      Support: +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Email Addresses
                    </h3>
                    <p className="text-slate-600">
                      General: info@swiftcourier.com
                      <br />
                      Support: support@swiftcourier.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Business Hours
                    </h3>
                    <p className="text-slate-600">
                      Mon - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Sat: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-2xl font-black text-slate-950 mb-8 uppercase tracking-tight">
                Direct Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="quote">Request a Quote</option>
                    <option value="tracking">Tracking Issue</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/20"
                >
                  <Send className="w-5 h-5" />
                  Send Dispatch
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION - Kept as requested */}
      <section className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1677685432123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
