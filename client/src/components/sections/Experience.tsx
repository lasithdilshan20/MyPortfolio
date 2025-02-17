import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";
import { CollapsibleText } from "@/components/ui/collapsible-text";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const recentExperiences = [
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

const pastExperiences = [
  {
    title: "Test Automation Engineer",
    company: "Sana Commerce Sri Lanka",
    period: "January 2021 - December 2021",
    location: "Colombo, Western, Sri Lanka",
    description: `Developed a web-based test automation framework from scratch using Cypress Test Automation, showcasing initiative and innovation in testing practices. 
    Enhanced and maintained an existing Selenium C# test automation framework, demonstrating proficiency in both development and maintenance tasks. 
    Implemented automation scripts for testing complex eCommerce web application add-ons/plugins, such as Payment Service Providers (PSP) and Shipping add-ons, showcasing the ability to handle complex testing scenarios.`,
    details: [
      "Built Cypress Test Automation framework from scratch",
      "Maintained Selenium C# automation framework",
      "Implemented comprehensive testing strategies",
      "Experienced in various testing types including Accessibility Testing",
      "Skills: Cypress, Selenium, NUnit, JavaScript, TypeScript, C#",
      "Tools: IntelliJ IDEA, VS Code, Azure DevOps"
    ]
  },
  {
    title: "Software Quality Assurance Engineer",
    company: "Sana Commerce Sri Lanka",
    period: "August 2018 - January 2021",
    location: "Sri Lanka",
    description: `Working as main product QA for e-commerce solutions provider, testing various add-ons and plugins including payment service providers, content blocks, and scheduled tasks. Responsible for comprehensive testing across multiple platforms and devices.`,
    details: [
      "Tested payment service providers (Wirecard, Paypal, PayFabric)",
      "Content blocks testing (Image Slider, Flexi Tiles, Video)",
      "Mobile testing for iOS and Android platforms",
      "API test automation with custom framework",
      "Cross-browser testing and localization testing"
    ]
  },
  {
    title: "Robotics Process Automation Developer & QA Engineer",
    company: "John Keells Computer Services Pvt. Ltd.",
    period: "June 2017 - August 2018",
    location: "Sri Lanka",
    description: `Founded the Robotic Process Automation (RPA) team and managed end-to-end test automation projects. Developed automation frameworks and participated in knowledge sharing initiatives.`,
    details: [
      "Founded RPA team and led automation initiatives",
      "Developed Selenium and Java test framework",
      "Managed stakeholder communications",
      "Tools: UiPath, Selenium, JavaScript, WorkFusion",
      "Domains: Finance and Textile"
    ]
  },
  {
    title: "Associate QA Engineer Specialist",
    company: "Virtusa",
    period: "November 2015 - June 2017",
    location: "Sri Lanka",
    description: `Specialized in Web Application Testing with focus on usability and accessibility. Contributed to RPA projects and maintained documentation.`,
    details: [
      "Web Application Testing specialist",
      "Selenium automation expert",
      "Usability and accessibility testing",
      "Documentation and knowledge sharing",
      "Domains: Banking, Telco, FinTech"
    ]
  },
  {
    title: "Junior QA Engineer",
    company: "Virtusa",
    period: "January 2015 - November 2015",
    location: "Sri Lanka",
    description: "Started career with VTAF (Virtusa Test Automation framework), focusing on fundamental QA practices and automation basics.",
    details: [
      "Learned test automation fundamentals",
      "Worked with VTAF framework",
      "Basic QA practices and methodologies"
    ]
  }
];

export default function Experience() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [timelineHeight, setTimelineHeight] = useState("100%");

  useEffect(() => {
    // Update timeline height when experiences are shown/hidden
    const updateTimelineHeight = () => {
      const timeline = document.querySelector('.timeline-container');
      if (timeline) {
        setTimelineHeight(`${timeline.scrollHeight}px`);
      }
    };

    // Use setTimeout to ensure DOM has updated
    setTimeout(updateTimelineHeight, 100);
  }, [showAllExperiences]);

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

        <div className="relative timeline-container">
          <div 
            className="absolute left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 transition-all duration-500"
            style={{ height: timelineHeight }}
          />

          <div className="space-y-8">
            {recentExperiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}

            {showAllExperiences && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {pastExperiences.map((exp, index) => (
                  <ExperienceCard 
                    key={`past-${index}`} 
                    experience={exp} 
                    index={index + recentExperiences.length} 
                  />
                ))}
              </motion.div>
            )}
          </div>

          <motion.div 
            className="flex justify-center pt-8"
            variants={fadeIn}
          >
            <Button
              variant="outline"
              onClick={() => setShowAllExperiences(!showAllExperiences)}
              className="gap-2"
            >
              {showAllExperiences ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Experiences <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    details: string[];
  };
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div 
      variants={fadeIn}
      custom={index}
      className={`relative ${index % 2 === 0 ? 'ml-auto pl-8 pr-0' : 'mr-auto pr-8 pl-0'} w-1/2`}
    >
      <div 
        className="absolute top-0 w-3 h-3 bg-primary rounded-full"
        style={{ [index % 2 === 0 ? 'left' : 'right']: '-6px' }} 
      />

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            {experience.company}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {experience.period} • {experience.location}
          </p>

          <CollapsibleText 
            text={experience.description} 
            maxLength={150}
            className="mb-4"
          />

          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            {experience.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}