import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Vansaher", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/javanherlambang/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/__van.h?igsh=MXhvNTIycDkzZ2RkbQ==", label: "Instagram" },
  { icon: Mail, href: "mailto:javan.herlambang@gmail.com", label: "Email" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // let's connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Let's create something amazing together.
          </p>

          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary hover:scale-[1.02] transition-transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>

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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
