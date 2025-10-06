import { Button } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
const IssuesPage = () => {
  return (
    <Link href="/issues/new">
      <Button>new issue</Button>{" "}
    </Link>
  );
};

export default IssuesPage;
