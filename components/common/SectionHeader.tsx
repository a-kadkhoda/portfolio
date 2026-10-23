import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <header className="max-w-155">
      <div className="font-mono text-eyebrow text-highlight">{`// ${title}`}</div>
      <h2 className="text-h2 font-heading ">{description}</h2>
    </header>
  );
};

export default SectionHeader;
