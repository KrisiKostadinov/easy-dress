import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type DisplayLogoProps = {} & ComponentPropsWithoutRef<"a">;

export default function DisplayLogo({ ...props }: DisplayLogoProps) {
  return (
    <>
      <Link href="/" className="text-2xl font-semibold" {...props}>
        EasyDress
      </Link>
    </>
  );
}