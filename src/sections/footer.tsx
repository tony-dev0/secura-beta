import React from "react";
import { footerData, socialLinks } from "../assets/data";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 lg:gap-0">
        <div className="max-w-[500px] space-y-4">
          <img src="/secura-logo.png" alt="Secura Logo" />
          <p className="text-[#4D4D4D] font-medium text-base lg:text-lg">
            Safe, fast, and affordable rides anytime, anywhere. Connecting
            people and cities with technology you can trust.
          </p>
        </div>
        <div className="flex gap-4 lg:gap-18 w-fit">
          {footerData.map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="font-semibold text-base lg:text-lg">
                {item.title}
              </h4>
              <ul className="">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-[#4D4D4D] font-medium hover:underline text-xs lg:text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row lg:items-center justify-between">
        <p className="text-[#4D4D4D] font-medium text-sm">
          Copyright Secura &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-1 mt-6">
          {socialLinks.map((social, index) => (
            <React.Fragment key={index}>
              <a
                href={social.url}
                className="text-[#4D4D4D] text-[10px] lg:text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.platform}
              </a>
              {index < socialLinks.length - 1 && (
                <span className=" text-[#4D4D4D]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
