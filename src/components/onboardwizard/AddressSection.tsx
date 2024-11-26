import { UserInfo } from "@/lib/types";
import React from "react";

type Props = {
  handleUpdateUserInfo: <T>(field: keyof UserInfo, info: T) => void;
  userInfo: UserInfo;
};

export default function AddressSection({
  handleUpdateUserInfo,
  userInfo,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="street-address">Street Address</label>
      <input
        id="street-address"
        placeholder="Enter Street Address"
        value={userInfo.address || ""}
        onChange={(e) => handleUpdateUserInfo("address", e.target.value)}
      ></input>
      <label htmlFor="city">City</label>
      <input
        id="city"
        placeholder="Enter City"
        value={userInfo.city || ""}
        onChange={(e) => handleUpdateUserInfo("city", e.target.value)}
      ></input>
      <label htmlFor="State">State</label>
      <input
        id="state"
        placeholder="Enter State"
        value={userInfo.state || ""}
        onChange={(e) => handleUpdateUserInfo("state", e.target.value)}
      ></input>
      <label htmlFor="zipcode">Zipcode</label>
      <input
        id="zipcode"
        placeholder="Enter Zipcode"
        value={userInfo.zipcode || ""}
        onChange={(e) => handleUpdateUserInfo("zipcode", e.target.value)}
      ></input>
    </div>
  );
}
