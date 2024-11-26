"use client";

import React, { useEffect, useState } from "react";
import UserLoginForm from "./UserLoginForm";
import { FormContent, UserInfo } from "@/lib/types";
import OnboardPage from "./OnboardPage";
import { deleteUser } from "@/actions/user_onboard";

type Props = { user: UserInfo; formContent: FormContent };

export default function OnboardWizard({ user, formContent }: Props) {
  const [wizardPage, setWizardPage] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<UserInfo>(user || []);

  // Restore users last visited page
  useEffect(() => {
    if (!user) return setWizardPage(0);
    const savedPage = localStorage.getItem("wizardPage");
    setWizardPage(Number(savedPage) || 0);
  }, []);

  // Save users last visited page
  useEffect(() => {
    localStorage.setItem("wizardPage", String(wizardPage));
  }, [wizardPage]);

  const incrementPage = () => {
    setWizardPage((prev) => prev + 1);
  };

  const decrementPage = () => {
    setWizardPage((prev) => prev - 1);
  };

  const handleUpdateUserInfo = <T,>(field: string, info: T) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: info,
    }));
  };

  const handleDeleteUser = async () => {
    await deleteUser();
    setUserInfo({} as UserInfo);
    setWizardPage(0);
  };

  return (
    <section className="flex flex-col gap-12 border-2 border-black p-4">
      {wizardPage === 0 && <UserLoginForm incrementPage={incrementPage} />}
      {userInfo && wizardPage !== 0 && formContent.length > 0 && (
        <>
          <OnboardPage
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            page={wizardPage}
            pageContent={formContent[wizardPage - 1]}
            userInfo={userInfo}
            handleUpdateUserInfo={handleUpdateUserInfo}
          />
          <p className="self-center">
            Page {wizardPage} of {formContent.length}
          </p>
          <div className="flex flex-col justify-center items-center">
            <p>Delete user to restart whole process?</p>
            <button
              className="w-1/2 border-2 border-black rounded-lg p-1"
              onClick={handleDeleteUser}
            >
              Click here
            </button>
          </div>
        </>
      )}
      {wizardPage !== 0 && formContent.length === 0 && <>No form content...</>}
    </section>
  );
}
