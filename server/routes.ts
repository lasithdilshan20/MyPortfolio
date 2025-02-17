import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import Parser from "rss-parser";

export async function registerRoutes(app: Express): Promise<Server> {
  const parser = new Parser();

  app.get("/api/blog-posts", async (_req, res) => {
    try {
      const feed = await parser.parseURL("https://medium.com/feed/@lasithdilshan20");
      const posts = feed.items.slice(0, 4).map(item => ({
        title: item.title || "",
        link: item.link || "",
        pubDate: item.pubDate || "",
        content: item.content || "",
        thumbnail: item["content:encoded"]?.match(/<img[^>]+src="([^">]+)"/)?.[1]
      }));
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json(contact);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
