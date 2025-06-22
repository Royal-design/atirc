import { formSchema } from "@/schema/formSchema";
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

type FormData = z.infer<typeof formSchema>;

export const ApplicationForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      jobposition: undefined,
      uploadResume: undefined,
      uploadApplicationLetter: undefined
    }
  });

  const onSubmit = (values: FormData) => {
    console.log(values);

    const resumeFile = values.uploadResume;

    // ✅ You now have access to the actual File object
    console.log("Resume file name:", resumeFile.name);
    console.log("Resume type:", resumeFile.type);
    console.log("Resume size (bytes):", resumeFile.size);

    form.reset();
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

        <ResumeDrop type="uploadResume" name="Upload Resume" />
        <ResumeDrop
          type="uploadApplicationLetter"
          name="Upload Application Letter"
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            className="rounded-none text-white hover:bg-primary/90 px-15 py-6"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
