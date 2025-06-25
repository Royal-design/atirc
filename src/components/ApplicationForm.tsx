import { getFormSchema } from "@/schema/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import ResumeDrop from "./ResumeDrop";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "sonner";
import { uploadToCloudinary } from "@/utils/cloudinary";

export const ApplicationForm = ({
  type,
  heading
}: {
  type: string;
  heading: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const title = heading.charAt(0).toUpperCase() + heading.slice(1);

  const formSchema = getFormSchema(type);

  const defaultValues: any = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    jobposition: undefined
  };

  if (type === "regular") {
    defaultValues.uploadResume = undefined;
    defaultValues.uploadApplicationLetter = undefined;
  }

  if (type === "research") {
    defaultValues.uploadResume = undefined;
    defaultValues.uploadResearchProposalLetter = undefined;
  }

  if (type === "incubation") {
    defaultValues.uploadStartupPitchDeck = undefined;
  }

  // Extend FormData to include possible file fields for all types
  type FormData = z.infer<typeof formSchema> & {
    uploadResume?: File;
    uploadApplicationLetter?: File;
    uploadResearchProposalLetter?: File;
    uploadStartupPitchDeck?: File;
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (values: FormData) => {
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    try {
      let resumeUrl = "";
      let applicationLetterUrl = "";
      let researchProposalLetterUrl = "";
      let startupPitchDeckUrl = "";

      if (values.uploadResume) {
        resumeUrl = await uploadToCloudinary(values.uploadResume);
      }
      if (values.uploadApplicationLetter) {
        applicationLetterUrl = await uploadToCloudinary(
          values.uploadApplicationLetter
        );
      }
      if (values.uploadResearchProposalLetter) {
        researchProposalLetterUrl = await uploadToCloudinary(
          values.uploadResearchProposalLetter
        );
      }
      if (values.uploadStartupPitchDeck) {
        startupPitchDeckUrl = await uploadToCloudinary(
          values.uploadStartupPitchDeck
        );
      }

      const params = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phonenumber: values.phonenumber,
        jobposition: values.jobposition,
        resumeUrl: resumeUrl || null,
        applicationLetterUrl: applicationLetterUrl || null,
        researchProposalLetterUrl: researchProposalLetterUrl || null,
        startupPitchDeckUrl: startupPitchDeckUrl || null,
        title: title || "Job Application"
      };

      await emailjs.send(serviceId, templateId, params, publicKey);
      console.log("Email sent successfully:", params);

      toast.success("Application sent successfully!");
      form.reset();
      console.log("Email sent:", params);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First name"
                    {...field}
                    className="py-5 border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last name"
                    {...field}
                    className="py-5  border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="py-5  border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-primary" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobposition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Position</FormLabel>
              <Select
                key={form.watch("jobposition")}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full py-5 border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0">
                    <SelectValue placeholder="Select job type here" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border-accent-grey-3">
                  {formSchema.shape.jobposition.options.map((job) => (
                    <SelectItem
                      key={job}
                      value={job}
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {job}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-primary" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter phone number"
                  {...field}
                  className="py-5  border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-primary" />
            </FormItem>
          )}
        />
        {type === "regular" && (
          <>
            <ResumeDrop type="uploadResume" name="Upload Resume" />
            <ResumeDrop
              type="uploadApplicationLetter"
              name="Upload Application Letter"
            />
          </>
        )}

        {type === "incubation" && (
          <ResumeDrop
            type="uploadStartupPitchDeck"
            name="Upload Startup pitch deck"
          />
        )}

        {type === "research" && (
          <>
            <ResumeDrop type="uploadResume" name="Upload Resume" />
            <ResumeDrop
              type="uploadResearchProposalLetter"
              name="Upload Research Proposal Letter"
            />
          </>
        )}
        <div className="flex justify-center">
          <Button
            disabled={loading}
            type="submit"
            className={`${
              loading
                ? "bg-primary/50 cursor-not-allowed"
                : " hover:bg-primary/90 "
            } rounded-none px-15 py-6 text-white`}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
