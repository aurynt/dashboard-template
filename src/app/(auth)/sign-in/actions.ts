"use server";

import { getCsrfToken, signIn } from "next-auth/react";

export const handleSubmit = (form: FormData) => {
  signIn("credentials", {
    username: form.get("username"),
    password: form.get("password"),
    redirect: false,
  });
};
