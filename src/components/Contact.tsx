import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/Vansaher", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/javanherlambang", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/__van.h", label: "Instagram" },
  { icon: Mail, href: "mailto:javan.herlambang@gmail.com", label: "Email" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    window.location.href = `mailto:javan.herlambang@gmail.com?subject=${subject} (from ${name})&body=${message} %0D%0A%0D%0AFrom: ${email}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("javan.herlambang@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="font-mono text-primary font-bold tracking-widest uppercase text-sm">// get in touch</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-4">Contact <span className="text-gradient">Me</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass p-8 border-2 border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-primary/30"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-primary/30"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full py-8 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Connect Block */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-2xl text-primary mb-4 tracking-tight">Connect With Me</h3>
                <p className="text-primary/70 text-sm mb-8 leading-relaxed">
                  Feel free to reach out through any of these platforms. 
                  I typically respond within 24 hours.
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/50 border border-primary/10 hover:border-primary hover:bg-secondary/30 transition-all duration-300 group shadow-sm"
                    >
                      <div className="p-2 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                        <social.icon className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <span className="font-bold text-primary tracking-tight">
                        {social.label}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Copy Box */}
              <div 
                onClick={copyToClipboard}
                className="mt-8 p-4 bg-secondary/40 border border-primary/10 cursor-pointer hover:bg-secondary/60 transition-colors group"
                title="Click to copy email"
              >
                <p className="font-mono text-sm text-primary/80">
                  <span className="text-primary font-bold">const</span> email = 
                  <span className="text-primary/60"> "</span>
                  <span className="text-primary font-bold group-hover:underline">javan.herlambang@gmail.com</span>
                  <span className="text-primary/60">"</span>;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;