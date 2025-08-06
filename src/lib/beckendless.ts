import Backendless from "backendless";
import { ITestimonials } from "@/types/testimonial";

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;

if (!APP_ID || !API_KEY) {
  throw new Error(
    "Backendless APP_ID atau API_KEY tidak ditemukan di .env.local"
  );
}
Backendless.initApp(APP_ID, API_KEY);

export const getDataTestimonials = async (): Promise<ITestimonials[]> => {
  try {
    const testimonials = await Backendless.Data.of("testimonials").find();
    return testimonials as ITestimonials[];
  } catch (error) {
    console.error("Gagal fetch testimonials:", error);
    return [];
  }
};

export default Backendless;
