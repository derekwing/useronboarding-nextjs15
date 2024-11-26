"use client";

import { updateUserOnboardForm } from "@/actions/admin";
import { FormContent, FormField } from "@/lib/types";
import React, { useState } from "react";

const AVAILABLE_FORM_FIELDS = ["About Me", "Address", "Birthdate"];

type Props = { formContent: FormContent };

export default function AdminSection({ formContent }: Props) {
  const [formContentState, setFormContentState] =
    useState<FormContent>(formContent);

  // Checks if the current page contains the targeted field
  const currentPageUsingField = (page: number, field: FormField) => {
    return formContentState[page].fields.includes(field);
  };

  // Checks if any other page contains the targeted field
  const otherPagesUsingField = (page: number, field: FormField) => {
    return formContentState.some((formPage, index) => {
      return index !== page && formPage.fields.includes(field);
    });
  };

  // Handles adding and removing a field/component based on given page
  const handleCheckboxClick = (page: number, field: FormField) => {
    setFormContentState((prevState) => {
      const updatedState = prevState.map((formPage, index) => {
        if (index === page) {
          // Don't allow untoggle when the field is the only field in the given page
          if (formPage.fields.length === 1 && formPage.fields.includes(field)) {
            return formPage;
          }

          // Toggle the field for the current page
          const fields = formPage.fields.includes(field)
            ? formPage.fields.filter((f) => f !== field) // Remove field
            : [...formPage.fields, field]; // Add field
          return { ...formPage, fields };
        }
        return formPage;
      });
      return updatedState;
    });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        updateUserOnboardForm(formContentState);
      }}
    >
      <div className="flex gap-2">
        {formContentState.map((_, index) => (
          <div key={index}>
            <div>Page {index + 1} Onboard Fields</div>
            {AVAILABLE_FORM_FIELDS.map((field) => (
              <div key={field} className="flex">
                <input
                  type="checkbox"
                  id={index + field}
                  value={field}
                  checked={currentPageUsingField(index, field as FormField)}
                  disabled={otherPagesUsingField(index, field as FormField)}
                  onChange={() =>
                    handleCheckboxClick(index, field as FormField)
                  }
                />
                <label htmlFor={index + field}>{field}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="border-2 border-black rounded-lg p-2" type="submit">
        Save Changes
      </button>
    </form>
  );
}
