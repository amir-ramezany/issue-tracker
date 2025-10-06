"use client";

import React from "react";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newIssuePage;
