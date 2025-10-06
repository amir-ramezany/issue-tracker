import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  // just need title and description //others are default existed in our db
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

//api for creating isuue and save to db
export async function POST(requset: NextRequest) {
  const body = await requset.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 }); //bad -- request
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
