import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, stagger } from "@/lib/animations";

const skills = [
  "Cypress",
  "Selenium",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "API Testing",
  "Test Automation",
  "CI/CD",
  "Git",
  "Agile Methodologies",
  "Performance Testing",
  "Test Strategy",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 mt-20"> {/*Section ID added here*/}
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeIn}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div variants={stagger}>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div key={skill} variants={fadeIn}>
                    <Badge variant="outline" className="text-base py-2">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}