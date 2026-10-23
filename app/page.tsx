import Hero from "@/components/page-components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-var(--spacing-navbar))] ">
      <Hero />
    </div>
  );
}
