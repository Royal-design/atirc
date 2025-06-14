import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-accent-grey-3 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* ATIRC Description - Always full width on small screens */}
          <div className="md:col-span-1 lg:col-span-1">
            <img src={logo} alt="logo" />
            <p className="text-accent-black text-[7px] mb-4">
              ATIRC stands as a beacon of hope for aspiring tech enthusiasts,
              entrepreneurs, and researchers aged 15 to 35. Our vision is to
              become Africa's leading technology incubation and research center,
              driving advancements in emerging technologies and providing a
              platform for young innovators to thrive.
            </p>
            <div className="flex space-x-2 mt-4">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaXTwitter size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <AiOutlineTikTok size={15} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-accent-black">
              Products
            </h2>
            <ul className="space-y-2">
              {["Who are we", "What we do", "News", "Career", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-accent-black hover:text-accent-black/80 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-accent-black">
              Company
            </h2>
            <ul className="space-y-2">
              {["About", "FAQs", "News"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-accent-black hover:text-accent-black/80 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-accent-black">
              Legal
            </h2>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-accent-black hover:text-accent-black/80 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Takes full width on small screens, then 2 columns on larger screens */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4 text-accent-black">
              Contact
            </h2>
            <p className="text-accent-black text-[8px] max-w-[70%]">
              It's also a new year because it is ATRC. Many established local
              from your Ministry you have established about our programs,
              partnerships, or organizations, further to reach out. Our team is
              here to support your small private market innovation, which
              forward its connectivity and collaboratively with your team!
            </p>

            <p className="text-accent-black mb-4">Contact @ATIRC.com</p>
            <p className="text-accent-black">+234 700 001 000</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
