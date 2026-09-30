"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { contact } from "@/utils/data/content";

export default function WhatsApp() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      className="fixed bottom-10 right-6 z-50 bg-green-600 hover:bg-green-500 w-fit px-3 py-1 rounded-xl text-white"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Link
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-center items-center"
      >
        <Image src="/icons/whatapp-icon.png" alt="whatsapp icon" width={30} height={30} />
        <span className="max-sm:hidden font-medium">Chat</span>
      </Link>
    </div>
  );
}
