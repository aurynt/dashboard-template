"use server";

import { getCsrfToken } from "next-auth/react";

export const handleSubmit = async (form: FormData) => {
  const data = {
    csrfToken: await getCsrfToken(),
    username: form.get("username"),
    password: form.get("password"),
  };
  const res = await fetch("http://localhost:3000/api/auth/callback/credentials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json= await res.json()
  return json
};
