"use client";

import { createUser } from "@/actions/user_onboard";
import React, { useState } from "react";

type Props = {
  incrementPage: () => void;
};

export default function UserLoginForm({ incrementPage }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        createUser(username, password);
        incrementPage();
      }}
    >
      <div className="flex gap-2">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="Input username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="Input password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="border-2 border-black rounded-lg p-2" type="submit">
        Create Account
      </button>
    </form>
  );
}
