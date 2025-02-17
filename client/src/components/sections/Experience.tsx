import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";

const experiences = [
  {
    title: "Senior QA Engineer",
    company: "Current Company",
    period: "2020 - Present",
    description: "Leading test automation initiatives and implementing best practices.",
  },
  {
    title: "QA Automation Engineer",
    company: "Previous Company",
    period: "2017 - 2020",
    description: "Developed and maintained automated test suites using Cypress and Selenium.",
  },
  {
    title: "Software QA Engineer",
    company: "First Company",
    period: "2014 - 2017",
    description: "Conducted manual and automated testing for web applications.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-accent/5">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={slideUp}
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              custom={index}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
