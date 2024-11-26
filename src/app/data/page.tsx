export const dynamic = "force-dynamic";

import UsersDataTable from "@/components/UsersDataTable";
import { db } from "@/lib/db";

export default async function Page() {
  const res = await db.query(
    "SELECT bio,address,city,state,zipcode,birthmonth,birthdate,birthyear FROM users"
  );
  const users = res.rows;

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Users data</h1>
      {users.length > 0 ? (
        <UsersDataTable users={users} />
      ) : (
        <>No users in database</>
      )}
    </main>
  );
}
