"use server";

import { db } from "@/lib/db";
import { FormContent } from "@/lib/types";

export async function updateUserOnboardForm(
  formContent: FormContent
): Promise<void> {
  console.log("updating user onboard form content...");

  const adminId = 1;

  for (const pageContent of formContent) {
    const { page, fields } = pageContent;

    // console.log("Updating page:", page);
    // console.log("With fields:", fields);

    await db.query(
      "UPDATE customformcontent SET fields = $1 WHERE admin_id = $2 AND page = $3",
      [fields, adminId, page]
    );
  }
}
