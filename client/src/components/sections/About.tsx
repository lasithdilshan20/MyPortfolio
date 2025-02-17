import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";

export default function About() {
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
          About Me
        </motion.h2>

        <motion.div variants={fadeIn}>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 10 years of experience in Software Quality Assurance and Test Automation,
                I specialize in ensuring software reliability and performance. As a Cypress Ambassador,
                I'm passionate about sharing knowledge and best practices in test automation.
                My expertise includes designing and implementing comprehensive test strategies,
                CI/CD integration, and leading QA teams to deliver high-quality software products.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
