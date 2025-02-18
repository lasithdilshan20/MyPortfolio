
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        size="icon"
        variant="default"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full shadow-lg"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-background rounded-lg shadow-lg p-2 min-w-[150px]"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
