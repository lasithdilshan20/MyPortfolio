
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fadeIn } from "@/lib/animations";

interface Recommendation {
  id: string;
  recommenderName: string;
  recommenderTitle: string;
  recommenderImage: string;
  content: string;
  date: string;
  relationship: string;
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    recommenderName: "Willem Germishuys",
    recommenderTitle: "Senior Manager, Software Engineering - ANZ at Teletrac Navman",
    recommenderImage: "",
    content: "Lasitha was a QA in one of the teams I'm working with. He was always willing to go above and beyond of what was asked of him. He completed his work on time and was a shining start when it got to our QA automation. Lasitha is a great asset to any team.",
    date: "July 29, 2024",
    relationship: "Willem managed Lasitha directly"
  },
  {
    id: "2",
    recommenderName: "Ronald Williams",
    recommenderTitle: "Ecosystem Builder | Event Producer | Alchemist | Your Biggest Advocate",
    recommenderImage: "",
    content: "I have the pleasure of supporting Lasitha as the Manager of our Ambassador program. His commitment to educating new users on such a complex tool is a true testament to his leadership and instructional abilities. It has been an honor to watch him Co-lead the Sri Lanka user group for Cypress!",
    date: "April 17, 2023",
    relationship: "Ronald worked with Lasitha on the same team"
  },
  {
    id: "3",
    recommenderName: "Anneli Björner",
    recommenderTitle: "Senior Director RnD Quality & Support",
    recommenderImage: "",
    content: "Lasitha was a reliable and very skilled member of my QA-team for a time. With his deep knowledge about Cypress and end-to-end testing he contributed to increasing test coverage as well as the quality and stability of our tests. Lasitha is also a very humble and easy person to work with, and I will miss having him on my team.",
    date: "September 5, 2022",
    relationship: "Anneli managed Lasitha directly"
  },
  {
    id: "4",
    recommenderName: "Adrian Miles Rosario Lopez",
    recommenderTitle: "Software Architect QA",
    recommenderImage: "",
    content: "I had the great pleasure to work with Lasitha at IFS as I was his mentor when he joined the company as Senior Engineer in QA. He did impress me with his proficiency in Cypress and how quickly he could understand the complexity of the product and improve our quality assurance overall. His soft skills made him a very appreciated team member in a very short time, contributing with his expertise yet always being truly humble and willing to listen and learn from others. I can say without a doubt that Lasitha would be a valuable asset for any QA team around the World.",
    date: "June 11, 2022",
    relationship: "Adrian Miles managed Lasitha directly"
  },
  {
    id: "5",
    recommenderName: "Karolis Gotoveckis",
    recommenderTitle: "Product Owner Hosting & Deployment @ Coolblue",
    recommenderImage: "",
    content: "Lasitha has been a proactive and reliable team member with strong communication and collaboration skills. He has consistently delivered high-quality and timely results, and has contributed greatly in his critical role as test automation engineer to the successes of the Scrum team at Sana Commerce. With his knowledge, experience, and dedication, Lasitha will be a valuable asset in any development team.",
    date: "",
    relationship: ""
  },
  // Add the remaining recommendations similarly
];

export default function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="recommendations" className="py-32 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Recommendations
        </motion.h2>

        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={recommendations[currentIndex].recommenderImage} alt={recommendations[currentIndex].recommenderName} />
                      <AvatarFallback>{recommendations[currentIndex].recommenderName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">{recommendations[currentIndex].recommenderName}</h3>
                        <p className="text-sm text-muted-foreground">{recommendations[currentIndex].recommenderTitle}</p>
                      </div>
                      <p className="text-muted-foreground">{recommendations[currentIndex].content}</p>
                      {recommendations[currentIndex].date && (
                        <p className="text-sm text-muted-foreground">{recommendations[currentIndex].date}</p>
                      )}
                      {recommendations[currentIndex].relationship && (
                        <p className="text-sm text-muted-foreground italic">{recommendations[currentIndex].relationship}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`Go to recommendation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
