import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";
import { CollapsibleText } from "@/components/ui/collapsible-text";

const experiences = [
  {
    title: "Software Developer in Test",
    company: "Trackman",
    period: "August 2024 - Present",
    location: "Capital Region of Denmark, Denmark",
    description: "Focusing on test automation and quality assurance practices for tracking and analysis software.",
    details: [
      "Leading test automation initiatives using Cypress and TypeScript",
      "Implementing comprehensive testing strategies",
      "Collaborating with development teams for quality solutions",
      "Contributing to CI/CD pipeline optimization"
    ]
  },
  {
    title: "Senior Software Quality Assurance Engineer",
    company: "INSCALE (Team - Teletrac Navman)",
    period: "September 2022 - July 2024",
    location: "Federal Territory of Kuala Lumpur, Malaysia",
    description: `Led and implemented test automation strategies with Cypress for GPS/Fleet Management applications. 
    Designed, executed, and maintained comprehensive test cases and scenarios. 
    Experienced in Functional, Regression, Smoke, Sanity, and Re-testing. 
    Integrated automation testing into every phase of the software development lifecycle. 
    Delivered scalable and efficient testing methodologies for web applications. 
    Collaborated closely with product and development teams on long-term testing solutions. 
    Utilized Agile methodologies to enhance testing processes and outcomes. 
    Proficient with JIRA for defect tracking and Testrail for test case management.`,
    details: [
      "Technologies: Cypress, TypeScript, JavaScript, Git",
      "Tools: IntelliJ IDEA, VS Code, Jenkins, Bitbucket",
      "Led test automation strategies for GPS/Fleet Management applications",
      "Implemented comprehensive testing methodologies",
      "Integrated automation into the development lifecycle",
      "Managed defect tracking and test case management"
    ]
  },
  {
    title: "Lead Software Engineer - Quality Assurance",
    company: "IFS",
    period: "January 2022 - August 2022",
    location: "Colombo, Western Province, Sri Lanka",
    description: `Developed scalable automation testing frameworks for web applications, including integration, unit, and end-to-end (E2E) testing. 
    Specialized in automated UI and API testing using Cypress Test Automation, enhancing test efficiency and coverage. 
    Contributed to the development of scalable testing strategies, ensuring high-quality code through rigorous code reviews and validation testing. 
    Led the migration of all Protractor test automation scripts to Cypress, optimizing test processes and troubleshooting failures to improve reliability. 
    Conducted research and development (R&D) and code review processes, integrating continuous integration/continuous deployment (CI/CD) with Jenkins and Bitbucket for streamlined deployment.`,
    details: [
      "Led migration from Protractor to Cypress",
      "Developed E2E testing frameworks",
      "Implemented UI and API testing strategies",
      "Integrated CI/CD with Jenkins and Bitbucket",
      "Worked with Angular-based applications",
      "Technologies: Cypress, Protractor, TypeScript, Git",
      "Tools: IntelliJ IDEA, VS Code, Jenkins, Testrail"
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
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.period} • {exp.location}
                  </p>

                  <CollapsibleText 
                    text={exp.description} 
                    maxLength={150}
                    className="mb-4"
                  />

                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
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