import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former network engineer with 15+ years building fiber infrastructure",
    color: "bg-zentrix-blue-bright",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    bio: "Tech visionary who previously led teams at major ISPs",
    color: "bg-zentrix-orange-bright",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    bio: "Passionate about making tech accessible to everyone",
    color: "bg-zentrix-green-bright",
  },
  {
    name: "David Kim",
    role: "VP of Operations",
    bio: "Scaling expert who ensures smooth service delivery",
    color: "bg-zentrix-purple-dark",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind Zentrix Fiber, dedicated to revolutionizing internet connectivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group cursor-pointer"
            >
              <div className={`${member.color} text-background rounded-3xl p-8 shadow-xl h-full`}>
                <div className="w-24 h-24 bg-background/20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-black mb-2 text-center">{member.name}</h3>
                <p className="text-sm font-bold mb-4 text-center text-background/80">{member.role}</p>
                <p className="text-background/90 text-center mb-6">{member.bio}</p>
                <div className="flex gap-3 justify-center">
                  <button className="w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
