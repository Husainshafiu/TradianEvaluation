import Hero from "@/app/(home)/_components/hero";
import PopularProcedures from "@/app/(home)/_components/popular-procedures";
import NeedAssistance from "@/app/(home)/_components/need-assistance";
import NewsAndUpdates from "@/app/(home)/_components/news-and-updates";
import FAQ from "@/app/components/faq";

export default function Home() {
  return (
        <>
            <Hero/>
            <PopularProcedures />
            <NeedAssistance />
            <NewsAndUpdates />
            <FAQ />
        </>
  );
}
