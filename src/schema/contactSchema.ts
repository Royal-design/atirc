import { z } from "zod";

export const contactSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(3, "Message must be at least 3 characters long")
});
