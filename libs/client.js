import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "jamstack-blog-tutorial",
  apiKey: process.env.API_KEY,
});
