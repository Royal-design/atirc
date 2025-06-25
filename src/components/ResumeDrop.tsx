import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Button } from "./ui/button";

const ResumeDrop = ({ type, name }: { type: string; name: string }) => {
  const { control, setValue, watch } = useFormContext();
  const uploadedType = watch(type);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue(type, acceptedFiles[0], { shouldValidate: true });
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"]
    }
  });

  return (
    <FormField
      control={control}
      name={type}
      render={({}) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`flex items-center min-w-xs  justify-center flex-col border-2 border-dashed rounded-md p-6 cursor-pointer
                ${
                  isDragActive
                    ? "border-primary bg-blue-50"
                    : "border-accent-grey-3 bg-accent-grey-2"
                }`}
            >
              <input {...getInputProps()} className="hidden" />
              <p className="text-sm  text-gray-500 text-center max-w-full line-clamp-2">
                {uploadedType
                  ? uploadedType.name
                  : "Drag file here or click the button below"}
              </p>
              <Button className="rounded-none bg-white py-6 px-12 mt-6 text-primary hover:text-white">
                Upload file
              </Button>
            </div>
          </FormControl>
          <FormMessage className="text-primary" />
        </FormItem>
      )}
    />
  );
};

export default ResumeDrop;
