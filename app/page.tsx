import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-var(--spacing-navbar))] ">
      <HeroSection />
    </div>
  );
}
