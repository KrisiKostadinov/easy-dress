import { ComponentPropsWithoutRef } from "react";

export default function DisplayLogo({
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a href="/" className="text-2xl font-semibold" {...props}>
      EasyDress
    </a>
  );
}
