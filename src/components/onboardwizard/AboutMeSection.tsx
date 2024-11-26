import { UserInfo } from "@/lib/types";
import React from "react";

type Props = {
  handleUpdateUserInfo: <T>(field: keyof UserInfo, info: T) => void;
  userInfo: UserInfo;
};

export default function AboutMeSection({
  handleUpdateUserInfo,
  userInfo,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="about-me">About me</label>
      <textarea
        id="about-me"
        className="border-2 border-black"
        value={userInfo.bio || ""}
        onChange={(e) => handleUpdateUserInfo("bio", e.target.value)}
      ></textarea>
    </div>
  );
}
