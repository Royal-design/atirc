import formImage from "@/assets/contact/form.jpg";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { contactSchema } from "@/schema/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form
} from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

type ContactData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    }
  });
  const onSubmit = async (data: ContactData) => {
    setLoading(true);
    const params: Record<string, string> = {
      firstname: data.firstname || "",
      lastname: data.lastname || "",
      email: data.email || "",
      message: data.message || ""
    };
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_CONTACT_US;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, params, publicKey);

      toast.success("Email sent successfully!");
      form.reset();
      console.log("Email sent:", params);
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#EEEEEE]">
      <div className="hidden md:flex items-stretch min-h-[500px] py-4 px-4 md:py-12 md:px-24">
        <div className="flex-1 bg-white p-6">
          <header className="flex flex-col space-y-3 mb-4">
            <h2 className="font-bold">Send Message</h2>
            <p className="text-sm text-accent-grey">
              Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel
              semper nisLorem ipsum dolor sit amet consectetur.
            </p>
          </header>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First name"
                          {...field}
                          className="py-5 placeholder-shown:text-xs border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
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
                      <FormLabel className="sr-only">Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Last name"
                          {...field}
                          className="py-5 placeholder-shown:text-xs border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
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
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="py-5 placeholder-shown:text-xs border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-primary" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-0 resize-none min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage className="text-primary" />
                  </FormItem>
                )}
              />

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
        </div>

        <div className="flex-1">
          <img
            src={formImage}
            alt="Form Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden items-stretch min-h-[500px] py-4 px-4 md:py-12 md:px-24">
        <div className="flex-1">
          <img
            src={formImage}
            alt="Form Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 bg-white p-6">
          <header className="flex flex-col space-y-3 mb-4">
            <h2 className="font-bold">Send Message</h2>
            <p className="text-sm text-accent-grey">
              Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel
              semper nisLorem ipsum dolor sit amet consectetur.
            </p>
          </header>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First name"
                          {...field}
                          className="py-5 placeholder-shown:text-xs border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
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
                      <FormLabel className="sr-only">Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Last name"
                          {...field}
                          className="py-5 placeholder-shown:text-xs border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
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
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="py-5 placeholder-shown:text-xs border border-accent-grey-3 focus:border-accent-grey focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="text-primary" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        {...field}
                        className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px] resize-none min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage className="text-primary" />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading
                      ? "bg-primary/50 cursor-not-allowed"
                      : "  hover:bg-primary/90 "
                  } rounded-none px-15 py-6 text-white`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
