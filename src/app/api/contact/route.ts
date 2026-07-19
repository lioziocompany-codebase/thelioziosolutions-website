import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { looksLikeDrumrollSupportIssue, sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail(result.data);
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong sending your message. Please try again shortly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    isDrumrollRelated: looksLikeDrumrollSupportIssue(result.data),
  });
}
