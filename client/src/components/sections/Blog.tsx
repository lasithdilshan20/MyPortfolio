import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fadeIn, slideUp } from "@/lib/animations";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  return (
    <section className="py-20 px-4">
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
          Latest Blog Posts
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? (
            Array(4).fill(0).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))
          ) : (
            posts?.map((post, index) => (
              <motion.div
                key={post.link}
                variants={fadeIn}
                custom={index}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <a 
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {new Date(post.pubDate).toLocaleDateString()}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
}
