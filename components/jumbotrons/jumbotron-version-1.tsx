import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/navbar";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type JumbotronVersion1Props = {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
  buttonUrl?: string;
  opacity?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export default function JumbotronVersion1({
  title,
  text,
  imageUrl,
  imageAlt,
  buttonText = "Разглеждане",
  buttonUrl = "/products?tab=featured",
  opacity = "40",
  children,
  ...props
}: JumbotronVersion1Props) {
  return (
    <div {...props}>
      {children}
      <section className="relative text-white bg-black/10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-black/${opacity}`} />
        </div>

        <div className="relative text-center max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center items-center gap-5 max-md:px-5">
          <h1 className="text-4xl font-semibold">
            {process.env.WEBSITE_TITLE}
          </h1>
          <p className="text-xl">{text}</p>
          <div className="flex gap-5">
            <Link
              className="bg-black py-3 px-6 rounded-md text-lg flex items-center gap-2 hover:text-primary hover:bg-secondary duration-100"
              href={buttonUrl}
            >
              <ArrowRight />
              {buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
