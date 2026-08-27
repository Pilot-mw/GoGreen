"use client";

import { motion } from "framer-motion";
import { Zap, Recycle, Users, RefreshCw, HeartHandshake, Leaf } from "lucide-react";

interface ImpactArea {
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const impactAreas: ImpactArea[] = [
  {
    title: "Clean Energy",
    tagline: "Powering a cleaner, more sustainable Malawi.",
    description:
      "We develop and promote clean, affordable energy solutions that reduce dependence on fossil fuels and unreliable traditional energy sources. Our approach includes renewable energy, solar power, biogas, energy-efficient technologies, and sustainable mobility solutions that help households and businesses access cleaner energy while reducing emissions.",
    icon: <Zap className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Waste Recovery",
    tagline: "Turning waste into valuable resources.",
    description:
      "We turn waste into valuable resources through collection, sorting, recycling, reuse, composting, and energy recovery. Instead of allowing waste to end up in landfills, waterways, and open spaces, we create systems that recover materials and convert organic waste into useful products such as compost, biogas, and other forms of energy.",
    icon: <Recycle className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Green Jobs",
    tagline: "Creating livelihoods through the green economy.",
    description:
      "We create opportunities for meaningful employment and entrepreneurship within Malawi's growing green economy. From waste collection and recycling to renewable energy installation, maintenance, manufacturing, and distribution, our work supports skills development, local businesses, and sustainable livelihoods—particularly for young people and communities.",
    icon: <Users className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Circular Supply Chains",
    tagline: "Keeping resources in use and value within our communities.",
    description:
      "We help build supply chains where materials are kept in productive use for as long as possible. By connecting waste producers, collectors, recyclers, manufacturers, farmers, businesses, and consumers, we enable resources to move back into the economy instead of becoming waste. This reduces resource consumption, lowers costs, and strengthens local industries.",
    icon: <RefreshCw className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Community Empowerment",
    tagline: "Building skills, opportunities, and sustainable communities.",
    description:
      "We believe sustainable development starts with empowered communities. We work with households, businesses, institutions, and local communities to promote environmental awareness, practical skills, clean technologies, and income-generating opportunities. By involving communities directly, we help create solutions that are locally relevant, inclusive, and sustainable.",
    icon: <HeartHandshake className="h-8 w-8" aria-hidden="true" />,
  },
  {
    title: "Environmental Protection",
    tagline: "Protecting our environment for generations to come.",
    description:
      "Our solutions are designed to protect Malawi's land, water, air, and natural ecosystems. By reducing pollution, improving waste management, promoting renewable energy, and encouraging responsible resource use, we contribute to healthier communities and a cleaner environment while supporting long-term climate resilience.",
    icon: <Leaf className="h-8 w-8" aria-hidden="true" />,
  },
];

export default function ImpactAreas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {impactAreas.map((area, idx) => (
        <motion.div
          key={area.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-100">
            <div className="text-primary mb-4" aria-hidden="true">
              {area.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{area.title}</h3>
            <p className="text-sm font-medium text-primary mb-3">
              {area.tagline}
            </p>
            <p className="text-gray-700 text-sm">{area.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
