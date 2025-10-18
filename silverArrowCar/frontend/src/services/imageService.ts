export type CloudinaryUploadResponse = {
  asset_id: string;
  public_id: string;
  version?: number;
  version_id?: string;
  signature?: string;
  width: number;
  height: number;
  format: string;
  resource_type: "image" | "video" | "raw";
  created_at: string;
  tags?: string[];
  bytes: number;
  type: string;
  etag?: string;
  placeholder?: boolean;
  url: string;
  secure_url: string;
  folder?: string;
  original_filename?: string;
  delete_token?: string;
};

export default async function uploadImagesToCloudinary(
  files: File[],
  folder: string
): Promise<CloudinaryUploadResponse[]> {
  const uploadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Create-frontend");
    formData.append("folder", folder);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/difysvjo4/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Upload failed");

    const data = (await res.json()) as CloudinaryUploadResponse;
    return data;
  });

  return Promise.all(uploadPromises);
}

export async function deleteImagesByDeleteToken(
  responses: { delete_token?: string }[]
): Promise<void> {
  const jobs = responses
    .map((r) => r.delete_token)
    .filter((tkn): tkn is string => !!tkn)
    .map(async (token) => {
      const fd = new FormData();
      fd.append("token", token);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/difysvjo4//delete_by_token`,
        {
          method: "POST",
          body: fd,
        }
      );
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.log("Delete by token failed:", res.status, text);
      }
    });

  await Promise.allSettled(jobs);
}
