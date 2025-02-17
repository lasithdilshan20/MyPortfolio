import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";

const experiences = [
  {
    title: "Software Developer in Test",
    company: "Trackman",
    period: "August 2024 - Present",
    description: "Leading test automation initiatives and quality assurance practices for tracking and analysis software.",
    highlights: [
      "Developing and maintaining test automation frameworks",
      "Implementing best practices for software testing",
      "Collaborating with development teams for quality solutions",
      "Contributing to CI/CD pipeline optimization"
    ]
  },
  {
    title: "Senior Software Quality Assurance Engineer",
    company: "INSCALE (Team - Teletrac Navman)",
    period: "September 2022 - July 2024",
    description: "Led test automation strategies for GPS/Fleet Management applications with focus on comprehensive testing methodologies.",
    highlights: [
      "Led and implemented test automation strategies with Cypress",
      "Designed and maintained comprehensive test cases and scenarios",
      "Integrated automation testing into the software development lifecycle",
      "Delivered scalable testing methodologies for web applications",
      "Collaborated with product and development teams on long-term solutions",
      "Utilized Agile methodologies and JIRA for project management"
    ]
  },
  {
    title: "Lead Software Engineer - Quality Assurance",
    company: "IFS",
    period: "January 2022 - August 2022",
    description: "Led quality assurance initiatives for Enterprise Software Solutions, specializing in automated testing frameworks and methodologies.",
    highlights: [
      "Developed scalable automation testing frameworks for web applications",
      "Specialized in UI and API testing using Cypress Test Automation",
      "Led migration from Protractor to Cypress test automation",
      "Conducted R&D and code review processes",
      "Integrated CI/CD with Jenkins and Bitbucket",
      "Worked with Angular-based applications for Swedish headquarters"
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