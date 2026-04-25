"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { navItems } from "@/data/navigation";

export function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-green-dark text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/bedrock-logo-white.png"
              alt="Bedrock Financial Planning"
              width={200}
              height={56}
              className="h-14 w-auto mb-6"
            />
            <p className="text-cream/60 text-sm leading-relaxed">
              Empowering investors with high-yield, secured alternative real
              estate investment opportunities designed for consistent growth and
              capital protection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-tan-light font-heading text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-cream/60 hover:text-tan-light transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="text-cream/60 hover:text-tan-light transition-colors duration-300 text-sm"
                >
                  All Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-tan-light font-heading text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=15770+Old+Conroe+Road+Conroe+TX+77384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream/60 hover:text-tan-light transition-colors duration-300 text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-tan" />
                  <span>
                    15770 Old Conroe Road
                    <br />
                    Conroe, TX 77384
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7199302059"
                  className="flex items-center gap-3 text-cream/60 hover:text-tan-light transition-colors duration-300 text-sm"
                  aria-label="Call us at 719-930-2059"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-tan" />
                  <span>719-930-2059</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:david@financialfreedom-inc.net"
                  className="flex items-center gap-3 text-cream/60 hover:text-tan-light transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-tan" />
                  <span>david@financialfreedom-inc.net</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-tan-light font-heading text-lg mb-6">
              Start Investing
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Ready to earn 13–28% annual returns with secured real estate
              investments? Get your free evaluation today.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="inline-block bg-tan text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-tan-dark transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 mt-16 pt-8">
          {/* Legal Disclaimer */}
          <p className="text-cream/30 text-xs leading-relaxed mb-6">
            All material presented herein is intended for information purposes
            only. The content is developed from sources believed to be providing
            accurate information. The information in this material is not
            intended as tax or legal advice. Please consult legal or tax
            professionals for specific information regarding your individual
            situation. The opinions expressed and material provided are for
            general information, and should not be considered a solicitation for
            the purchase or sale of any security.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-xs">
              &copy; {new Date().getFullYear()} Bedrock Financial Planning. All
              rights reserved.
            </p>
            <p className="text-cream/40 text-xs">
              15770 Old Conroe Road, Conroe, TX 77384
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
