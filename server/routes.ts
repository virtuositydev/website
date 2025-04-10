import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();

  // Contact form submission
  apiRouter.post("/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create timestamp
      const createdAt = new Date().toISOString();
      
      // Store the contact submission
      const contactSubmission = await storage.createContactSubmission({
        ...validatedData,
        createdAt
      });
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: contactSubmission.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      res.status(500).json({ 
        message: "Failed to submit contact form" 
      });
    }
  });

  // Register API routes
  app.use("/api", apiRouter);

  const httpServer = createServer(app);

  return httpServer;
}
