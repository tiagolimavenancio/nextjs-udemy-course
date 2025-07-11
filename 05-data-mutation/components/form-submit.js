"use client";
import { useActionState } from "react-dom";

export default function FormSubmit() {
  const status = useActionState();

  if (status.pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
