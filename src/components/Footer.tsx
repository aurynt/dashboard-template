import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between my-3">
      <p>
        Development by{" "}
        <Link href={"#"} className="text-teal">
          Auryncode
        </Link>
      </p>
    </div>
  );
}
