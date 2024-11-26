import AdminSection from "@/components/AdminSection";
import { db } from "@/lib/db";

export default async function Page() {
  // Get all custom form pages from admin
  const res = await db.query(
    "SELECT page, fields FROM customformcontent WHERE admin_id = $1",
    [1]
  );
  const customFormContent = res.rows;

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Edit Onboard Pages and Fields</h1>
      <AdminSection formContent={customFormContent} />
    </main>
  );
}
