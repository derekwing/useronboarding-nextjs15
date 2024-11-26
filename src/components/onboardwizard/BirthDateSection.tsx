import { UserInfo } from "@/lib/types";
import React from "react";

type Props = {
  handleUpdateUserInfo: <T>(field: keyof UserInfo, info: T) => void;
  userInfo: UserInfo;
};

const numberOfMonths = Array(12).fill(null);
const numberOfDays = Array(31).fill(null);
const numberOfYears = Array(110).fill(null);

export default function BirthDateSection({
  handleUpdateUserInfo,
  userInfo,
}: Props) {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2">
        <label htmlFor="month">Month</label>
        <select
          id="month"
          value={userInfo.birthmonth || ""}
          onChange={(e) =>
            handleUpdateUserInfo("birthmonth", Number(e.target.value))
          }
        >
          <option value="" disabled>
            Month
          </option>
          {numberOfMonths.map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="day">Day</label>
        <select
          id="day"
          value={userInfo.birthdate || ""}
          onChange={(e) =>
            handleUpdateUserInfo("birthdate", Number(e.target.value))
          }
        >
          <option value="" disabled>
            Day
          </option>
          {numberOfDays.map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="year">Year</label>
        <select
          id="year"
          value={userInfo.birthyear || ""}
          onChange={(e) =>
            handleUpdateUserInfo("birthyear", Number(e.target.value))
          }
        >
          <option value="" disabled>
            Year
          </option>
          {numberOfYears.map((_, index) => (
            <option key={index} value={index + 1915}>
              {index + 1915}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
