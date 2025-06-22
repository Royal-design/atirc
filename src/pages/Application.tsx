import { ApplicationForm } from "@/components/ApplicationForm";
import { useParams } from "react-router-dom";

export const Application = () => {
  const { id } = useParams();
  const getHeading = () => {
    switch (id) {
      case "internship":
        return "Application for Internship";
      case "job":
        return "Application for Job";
      case "incubation":
        return "Application for Incubation";
      default:
        break;
    }
  };
  return (
    <div className="bg-[#EEEEEE] p-4">
      <div className="w-full flex flex-col md:max-w-4xl mx-auto mt-24 ">
        <h1 className="text-lg md:text-2xl font-bold text-center my-4 md:my-8">
          {getHeading()}
        </h1>
        <div className="bg-white p-8 md:py-12 mb-12">
          <h1 className="text-lg md:text-xl text-center mt-4 mb-8 text-accent-black">
            Fill in your information Appropriately
          </h1>
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
};
