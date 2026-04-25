import { getLatestArticles } from "@/lib/articles";
import { HomeContent } from "@/components/HomeContent";

export const revalidate = 86400;

export default function Home() {
  const latestArticles = getLatestArticles(3);

  return <HomeContent latestArticles={latestArticles} />;
}
