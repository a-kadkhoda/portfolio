import SignatureChip from "./SignatureChip";

const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-var(--spacing-navbar))]">
      <SignatureChip />
    </div>
  );
};

export default HeroSection;
