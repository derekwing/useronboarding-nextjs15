"use server";

import { db } from "@/lib/db";
import { UserInfo } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function createUser(
  username: string,
  password: string
): Promise<void> {
  await db.query(
    "INSERT INTO users (id, username, password) VALUES ($1, $2, $3)",
    [1, username, password]
  );
  revalidatePath("/");
}

export async function deleteUser(): Promise<void> {
  await db.query("DELETE FROM users WHERE id = $1", [1]);
}

export async function updateUserInfo(userInfo: UserInfo): Promise<void> {
  const userId = 1;
  const {
    bio,
    address,
    city,
    state,
    zipcode,
    birthmonth,
    birthdate,
    birthyear,
  } = userInfo;
  await db.query(
    "UPDATE users SET bio = $1, address = $2, city = $3, state = $4, zipcode = $5, birthmonth = $6, birthdate = $7, birthyear = $8 WHERE id = $9",
    [
      bio,
      address,
      city,
      state,
      zipcode,
      birthmonth,
      birthdate,
      birthyear,
      userId,
    ]
  );
}
