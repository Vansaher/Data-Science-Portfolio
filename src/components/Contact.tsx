import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/Vansaher", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
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

    // This opens the user's local email client with the details filled in
    window.location.href = `mailto:javan.herlambang@gmail.com?subject=${subject} (from ${name})&body=${message} %0D%0A%0D%0AFrom: ${email}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// get in touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Contact <span className="text-gradient">Me</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full py-6 text-lg group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Your Specific Connect Block */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
                <p className="text-muted-foreground text-sm mb-6">
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
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                <p className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary">const</span> email = 
                  <span className="text-accent"> "javan.herlambang@gmail.com"</span>;
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