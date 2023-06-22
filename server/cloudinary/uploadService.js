import cloudinary from "../config/cloudinary.js";

export async function uploadImage(result) {
  const res = await cloudinary.v2.uploader.upload(result.path, {
    folder: "safety",
    use_filename: true,
  });

  return res.secure_url;
}
