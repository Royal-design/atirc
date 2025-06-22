import { z } from "zod";

export const jobPositions = [
  "Frontend Developer",
  "Backend Developer",
  "Designer"
] as const;
export type JobPositions = (typeof jobPositions)[number];

export const formSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),

  jobposition: z.enum(jobPositions, {
    required_error: "You must select a job type"
  }),

  uploadResume: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    {
      message: "Resume is required"
    }
  ),

  uploadApplicationLetter: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    {
      message: "Application letter is required"
    }
  )
});
