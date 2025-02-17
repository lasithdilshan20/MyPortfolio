import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";

const experiences = [
  {
    title: "Senior QA Automation Engineer",
    company: "Pearson",
    period: "2021 - Present",
    description: "Lead QA Automation Engineer for enterprise-level educational technology platforms. Specialized in designing and implementing comprehensive test automation frameworks using Cypress and Selenium.",
    highlights: [
      "Cypress Ambassador contributing to community growth and best practices",
      "Developed and maintained robust test automation frameworks",
      "Led team of QA engineers and mentored junior members",
      "Implemented CI/CD pipelines for automated testing"
    ]
  },
  {
    title: "Lead QA Engineer",
    company: "DirectFN",
    period: "2019 - 2021",
    description: "Led quality assurance initiatives for financial technology solutions, focusing on real-time trading platforms and market data systems.",
    highlights: [
      "Established test automation strategies and frameworks",
      "Managed end-to-end testing processes",
      "Improved test coverage and reduced regression testing time",
      "Collaborated with cross-functional teams for quality delivery"
    ]
  },
  {
    title: "Senior Software QA Engineer",
    company: "Cambio Software Engineering",
    period: "2016 - 2019",
    description: "Responsible for quality assurance of healthcare software solutions, specializing in test automation and performance testing.",
    highlights: [
      "Implemented automated testing solutions",
      "Conducted performance and load testing",
      "Developed test strategies and documentation",
      "Mentored junior QA engineers"
    ]
  }
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
          className="text-3xl font-bold mb-12 text-center"
          variants={slideUp}
        >
          Experience
        </motion.h2>

        <div className="relative space-y-8">
          <div className="absolute left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              custom={index}
              className={`relative ${index % 2 === 0 ? 'ml-auto pl-8 pr-0' : 'mr-auto pr-8 pl-0'} w-1/2`}
            >
              <div className="absolute top-0 w-3 h-3 bg-primary rounded-full"
                   style={{ [index % 2 === 0 ? 'left' : 'right']: '-6px' }} />

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}