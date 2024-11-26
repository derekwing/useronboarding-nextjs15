export const dynamic = "force-dynamic";

import OnboardWizard from "@/components/onboardwizard/OnboardWizard";
import { db } from "@/lib/db";

export default async function Page() {
  const res = await db.query(
    "SELECT bio,address,city,state,zipcode,birthmonth,birthdate,birthyear FROM users WHERE id = $1",
    [1]
  );
  const user = res.rows[0];

  let formContent = [];
  if (user) {
    const res = await db.query(
      "SELECT page, fields FROM customformcontent WHERE admin_id = $1",
      [1]
    );
    formContent = res.rows;
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">User Onboard</h1>
      <OnboardWizard user={user} formContent={formContent} />
    </main>
  );
}
