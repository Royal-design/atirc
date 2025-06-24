import { z } from "zod";

export const jobPositions = [
  "Frontend Developer",
  "Backend Developer",
  "Designer"
] as const;

const baseSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phonenumber: z
    .string()
    .min(10)
    .max(15, "Phone number must be between 10 and 15 characters"),
  jobposition: z.enum(jobPositions)
});

const resumeSchema = z.object({
  uploadResume: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    {
      message: "Resume is required"
    }
  ),
  uploadApplicationLetter: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    { message: "Application letter is required" }
  )
});

const researchSchema = z.object({
  uploadResume: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    { message: "Resume is required" }
  ),
  uploadResearchProposalLetter: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    { message: "Research proposal is required" }
  )
});

const incubationSchema = z.object({
  uploadStartupPitchDeck: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    { message: "Pitch deck is required" }
  )
});

export const getFormSchema = (type: string) => {
  let schema = baseSchema;

  if (type === "regular") {
    schema = schema.merge(resumeSchema);
  }

  if (type === "research") {
    schema = schema.merge(researchSchema);
  }

  if (type === "incubation") {
    schema = schema.merge(incubationSchema);
  }

  return schema;
};
