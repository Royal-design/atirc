import axios from "axios";

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();

  // Upload payload
  formData.append("file", file);
  formData.append("upload_preset", "job_applications_public"); // Your unsigned preset
  formData.append("folder", "uploads/application"); // Optional: folder path

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/atirc/raw/upload", // Use 'raw' for PDF/doc files
      formData
    );

    const originalUrl: string = response.data.secure_url;

    // ✅ Force download by modifying the URL
    const forceDownloadUrl = originalUrl.replace(
      "/upload/",
      "/upload/fl_attachment/"
    );

    return forceDownloadUrl;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
};
