import React from "react";

import { Form } from "./_components";

export default function CreatePost() {
  return (
    <main className="px-2.5 py-6 max-w-[1120px] mx-auto bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <Form />
    </main>
  );
}
