import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { FloatingNav } from "@/components/ui/floating-nav";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        const rect = link.getBoundingClientRect();
        const isHovering = 
          e.clientX >= rect.left && 
          e.clientX <= rect.right && 
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom;

        if (isHovering) {
          document.querySelector('.custom-cursor')?.classList.add('hover');
        } else {
          document.querySelector('.custom-cursor')?.classList.remove('hover');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Set initial theme
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(isDark ? "dark" : "light");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeToggle />
      <Router />
      <FloatingNav />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;