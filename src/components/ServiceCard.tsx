import { Leaf, Recycle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "leaf" | "recycle";
  features: string[];
  href: string;
}

export default function ServiceCard({ title, description, icon, features, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="mb-6">
        {icon === "leaf" ? (
          <Leaf className="h-12 w-12 text-primary" />
        ) : (
          <Recycle className="h-12 w-12 text-primary" />
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-primary font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
