import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  Icon?: LucideIcon;
}

const SectionHeader = ({ badge, title, description, centered = true, Icon }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 ${centered ? "" : ""}`}>
          {Icon && <Icon className="w-4 h-4" />}
          {badge}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
