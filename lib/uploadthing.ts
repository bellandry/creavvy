import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

// Initialize UploadThing API
// export const utapi = new UTApi();

// // Create a helper function for uploading files
// export async function uploadFile(file: File) {
//   try {
//     const response = await utapi.uploadFiles(file);
//     return response;
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     throw error;
//   }
// }

// React helpers for client-side usage
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
