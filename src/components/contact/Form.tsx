import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";
import formImage from "@/assets/contact/form.jpg";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const Form = () => {
  return (
    <div className="bg-[#EEEEEE]">
      <div className="hidden md:flex items-stretch min-h-[500px] py-4 px-4 md:py-12 md:px-24">
        <form className="flex-1">
          <Card className="h-full border-accent-grey border-none rounded-none bg-white flex flex-col">
            <CardHeader>
              <CardTitle className="font-bold">Send Message</CardTitle>
              <CardDescription className="text-sm text-accent-grey">
                Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel
                semper nisLorem ipsum dolor sit amet consectetur.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex-1">
                  <Label className="sr-only">First Name</Label>
                  <Input
                    placeholder="First Name"
                    className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px]"
                  />
                </div>
                <div className="flex-1">
                  <Label className="sr-only">Last Name</Label>
                  <Input
                    placeholder="Last Name"
                    className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px]"
                  />
                </div>
              </div>
              <div className="flex-1">
                <Label className="sr-only">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px]"
                />
              </div>
              <div className="flex-1">
                <Label className="sr-only">Message</Label>
                <Textarea
                  placeholder="Message"
                  className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px] resize-none min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>
        </form>
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
        <form className="flex-1">
          <Card className="h-full border-accent-grey border-none rounded-none bg-white flex flex-col">
            <CardHeader>
              <CardTitle className="font-bold">Send Message</CardTitle>
              <CardDescription className="text-sm text-accent-grey">
                Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel
                semper nisLorem ipsum dolor sit amet consectetur.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex-1">
                  <Label className="sr-only">First Name</Label>
                  <Input
                    placeholder="First Name"
                    className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px]"
                  />
                </div>
                <div className="flex-1">
                  <Label className="sr-only">Last Name</Label>
                  <Input
                    placeholder="Last Name"
                    className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px]"
                  />
                </div>
              </div>
              <div className="flex-1">
                <Label className="sr-only">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px]"
                />
              </div>
              <div className="flex-1">
                <Label className="sr-only">Message</Label>
                <Textarea
                  placeholder="Message"
                  className="w-full placeholder-accent-grey placeholder-shown:text-xs border-accent-grey focus-visible:ring-[1px] resize-none min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};
