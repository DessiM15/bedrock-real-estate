"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionWrapper";
import { team } from "@/data/team";
import { User } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="bg-green-dark py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading subtitle="Our Team" light>
          The People Behind
          <br />
          <span className="italic text-tan-light">Your Success</span>
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Photo */}
              <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-8 overflow-hidden rounded-full border-2 border-tan/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add(
                        "flex",
                        "items-center",
                        "justify-center",
                        "bg-green-dark-light"
                      );
                      const icon = document.createElement("div");
                      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-tan/40"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>

              {/* Info */}
              <h3 className="font-heading text-2xl text-cream mb-2">
                {member.name}
              </h3>
              <p className="text-tan-light text-sm uppercase tracking-[0.15em] mb-5">
                {member.role}
              </p>
              <p className="text-cream/60 text-sm leading-relaxed max-w-sm mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
