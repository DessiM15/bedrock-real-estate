"use client";

import { Article } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { DotNavigation } from "@/components/layout/DotNavigation";
import { Hero } from "@/components/sections/Hero";
import { InvestmentOverview } from "@/components/sections/InvestmentOverview";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Mission } from "@/components/sections/Mission";
import { Team } from "@/components/sections/Team";
import { Comparison } from "@/components/sections/Comparison";
import { Contact } from "@/components/sections/Contact";
import { LatestArticles } from "@/components/blog/LatestArticles";

interface HomeContentProps {
  latestArticles: Article[];
}

export function HomeContent({ latestArticles }: HomeContentProps) {
  return (
    <>
      <Header />
      <DotNavigation />
      <main>
        <Hero />
        <InvestmentOverview />
        <Benefits />
        <HowItWorks />
        <Mission />
        <Team />
        <Comparison />
        <LatestArticles articles={latestArticles} />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
