import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn } from "@/lib/animations";
import { SiGithub, SiLinkedin, SiNpm } from "react-icons/si";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />

      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="mb-8 flex justify-center"
          variants={fadeIn}
        >
          <Avatar className="h-32 w-32 border-4 border-primary/20">
            <AvatarImage src="/profile-pic.png" alt="Lasitha Wijenayake" />
            <AvatarFallback>LW</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          variants={slideUp}
        >
          Lasitha Wijenayake
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          variants={slideUp}
          custom={1}
        >
          Senior Software QA Engineer & Test Automation Specialist
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center mb-12"
          variants={fadeIn}
          custom={2}
        >
          <Button variant="outline" asChild>
            <a href="https://github.com/lasithdilshan20" target="_blank" rel="noopener noreferrer">
              <SiGithub className="mr-2" /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/lasitha-wijenayake-b8a43bb5/" target="_blank" rel="noopener noreferrer">
              <SiLinkedin className="mr-2" /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.npmjs.com/settings/lasithdilshan20/packages" target="_blank" rel="noopener noreferrer">
              <SiNpm className="mr-2" /> NPM
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}