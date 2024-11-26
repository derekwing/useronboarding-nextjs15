export type UserInfo = {
  bio: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  birthmonth: number;
  birthdate: number;
  birthyear: number;
};

export type FormField = "About Me" | "Address" | "Birthdate";

export type PageContent = {
  page: number;
  fields: FormField[];
};

export type FormContent = PageContent[];
