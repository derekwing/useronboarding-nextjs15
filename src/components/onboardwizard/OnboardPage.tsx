import React from "react";
import AboutMeSection from "./AboutMeSection";
import AddressSection from "./AddressSection";
import BirthDateSection from "./BirthDateSection";
import { FormField, PageContent, UserInfo } from "@/lib/types";
import { updateUserInfo } from "@/actions/user_onboard";

type Props = {
  incrementPage: () => void;
  decrementPage: () => void;
  page: number;
  pageContent: PageContent;
  userInfo: UserInfo;
  handleUpdateUserInfo: <T>(field: keyof UserInfo, info: T) => void;
};

export default function OnboardPage({
  incrementPage,
  decrementPage,
  page,
  pageContent,
  userInfo,
  handleUpdateUserInfo,
}: Props) {
  // ALL AVAILABLE FIELDS ALLOWS FOR ONBOARDING PAGES
  const AVAILABLE_FIELDS: Record<FormField, JSX.Element> = {
    Address: (
      <AddressSection
        handleUpdateUserInfo={handleUpdateUserInfo}
        userInfo={userInfo}
      />
    ),
    Birthdate: (
      <BirthDateSection
        handleUpdateUserInfo={handleUpdateUserInfo}
        userInfo={userInfo}
      />
    ),
    "About Me": (
      <AboutMeSection
        handleUpdateUserInfo={handleUpdateUserInfo}
        userInfo={userInfo}
      />
    ),
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">
        Please add details about yourself
      </h2>
      <div className="flex flex-col gap-6">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            updateUserInfo(userInfo);
          }}
        >
          {pageContent.fields.map((field) => {
            return <div key={field}>{AVAILABLE_FIELDS[field]}</div>;
          })}
          <button
            type="submit"
            className="border-2 border-black rounded-lg p-2"
          >
            Save changes
          </button>
        </form>

        {page === 1 && (
          <button
            className="border-2 border-black rounded-lg p-2"
            onClick={incrementPage}
          >
            Next Page
          </button>
        )}
        {page === 2 && (
          <button
            className="border-2 border-black rounded-lg p-2"
            onClick={decrementPage}
          >
            Previous Page
          </button>
        )}
      </div>
    </div>
  );
}
