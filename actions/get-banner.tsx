// file: actions/get-banner.ts
import { Banner } from "@/types";

const getBanner = async (id: string): Promise<Banner> => {
  const res = await fetch(`${process.env.PUBLIC_API_URL}/banners/${id}`);
  return res.json(); 
};

export default getBanner;
