import { z } from "zod";

export const createIssueSchema = z.object({
  // just need title and description //others are default existed in our db
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required."),
});
