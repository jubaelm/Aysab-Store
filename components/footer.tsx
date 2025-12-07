"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";


export default function Footer() {
  const sections = [
    {
      title: "Customer Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns & Exchanges", href: "/returns" },
        { name: "Order Tracking", href: "/orders" },
      ],
    },
    {
      title: "Non-profit",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Youth Development", href: "/youth" },
        { name: "Community Programs", href: "/programs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Refund Policy", href: "/refunds" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="bg-gray-100 text-gray-800 mt-12 border-t border-gray-300">
      <div className="container mx-auto px-6 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          
          {sections.map((section, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center md:cursor-default md:pointer-events-none"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <h3 className="text-gray-900 font-semibold mb-4 md:mb-2">
                  {section.title}
                </h3>

                <span className="md:hidden">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <ul
                className={`space-y-2 text-sm overflow-hidden transition-all duration-300 
                ${openIndex === index ? "max-h-40" : "max-h-0 md:max-h-full"}`}
              >
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

   
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Stay Connected</h3>

            <p className="text-sm mb-4">
              Subscribe for updates and exclusive offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded mb-3 text-gray-900 bg-white border border-gray-300"
            />

            <button className="bg-gray-900 text-white w-full py-2 rounded hover:bg-gray-700 transition">
              Subscribe
            </button>

           
            <div className="flex gap-4 mt-6">
              <Link href="https://www.instagram.com/aysabfc/?hl=en" target="_blank">
                <Instagram className="w-6 h-6 hover:opacity-70" />
              </Link>
              <Link href="https://www.youtube.com/@aysabfc" target="_blank">
                <Youtube className="w-6 h-6 hover:opacity-70" />
              </Link>
              <Link href="https://www.facebook.com/aysabfc/" target="_blank">
                <Facebook className="w-6 h-6 hover:opacity-70" />
              </Link>
            </div>

         
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AYSAB. All rights reserved.
      </div>
    </footer>
  );
}
