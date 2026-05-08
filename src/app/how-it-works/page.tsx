"use client";

import SectionHeading from "@/components/SectionHeading";
import StepCard from "@/components/StepCard";
import { Leaf, Recycle, Trash2, Factory, Truck, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  const biogasSteps = [
    {
      step: 1,
      title: "Waste Collection",
      description:
        "Organic waste is collected from markets, farms, and households across Lilongwe. We work with waste pickers and community collectors to establish reliable supply chains.",
      icon: "leaf" as const,
    },
    {
      step: 2,
      title: "Anaerobic Digestion",
      description:
        "The organic waste is fed into anaerobic digesters where bacteria break down the material in oxygen-free conditions, producing biogas (mainly methane and CO₂).",
      icon: "leaf" as const,
    },
    {
      step: 3,
      title: "Gas Purification",
      description:
        "The raw biogas goes through a purification process to remove impurities and increase methane concentration, ensuring clean-burning cooking fuel.",
      icon: "leaf" as const,
    },
    {
      step: 4,
      title: "Cylinder Distribution",
      description:
        "Purified biogas is compressed into cylinders and distributed to households, restaurants, and institutions, providing affordable clean cooking energy.",
      icon: "leaf" as const,
    },
  ];

  const recyclingSteps = [
    {
      step: 1,
      title: "Community Collection",
      description:
        "Used beverage cans (UBC) are collected from households, markets, schools, and businesses by our network of community collectors, many of whom are youth and women.",
      icon: "recycle" as const,
    },
    {
      step: 2,
      title: "Sorting & Quality Control",
      description:
        "Collected cans are brought to our facility where they are sorted by type, cleaned, and checked for quality to meet export standards.",
      icon: "recycle" as const,
    },
    {
      step: 3,
      title: "Baling & Aggregation",
      description:
        "Quality-checked aluminium cans are compacted into bales using hydraulic baling machines, optimizing storage and transport efficiency.",
      icon: "recycle" as const,
    },
    {
      step: 4,
      title: "Export to Recyclers",
      description:
        "Baled aluminium is exported to regional recycling partners where it is melted and reformed into new aluminium products, closing the circular economy loop.",
      icon: "recycle" as const,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Understanding our processes from waste collection to delivering sustainable solutions."
            centered={false}
            subtitleClass="text-white/90"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-green-100 rounded-lg">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Biogas Production Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {biogasSteps.map((step, index) => (
              <StepCard key={step.step} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-green-100 rounded-lg">
              <Recycle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Aluminium Recycling Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {recyclingSteps.map((step, index) => (
              <StepCard key={step.step} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Circular Economy in Action"
            subtitle="Both our biogas and recycling operations demonstrate how waste can become valuable resources."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Trash2 className="h-10 w-10 text-primary" />,
                title: "Waste Input",
                desc: "Collecting organic waste and aluminium cans that would otherwise pollute the environment.",
              },
              {
                icon: <Factory className="h-10 w-10 text-primary" />,
                title: "Processing",
                desc: "Converting waste into valuable products through biogas digestion and aluminium recycling.",
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Distribution",
                desc: "Delivering clean energy to communities and exporting recycled materials to global markets.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See Our Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Visit our facilities in Lilongwe to see how we transform waste into valuable resources.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors inline-block"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </>
  );
}
