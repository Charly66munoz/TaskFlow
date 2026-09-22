import {
  About,
  CtaSection,
  Features,
  Footer,
  Hero,
  HowItWorks,
  Navbar,
  ProductivityInsights,
  TechStack,
} from "@/components/pages/landing";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar itShow={true} />
      <Hero />
      <About />
      <Features />
      <ProductivityInsights />
      <HowItWorks />
      <TechStack />
      <CtaSection />
      <Footer />
    </main>
  );
}
