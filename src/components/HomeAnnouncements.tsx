"use client";

import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const announcements = [
  {
    title: "Building a Circular Economy in Malawi",
    date: "Our Focus",
    excerpt:
      "Go Green Resources Limited recovers waste and underused resources and converts them into clean energy, recovered materials, and sustainable livelihoods.",
  },
  {
    title: "Community Collection Networks",
    date: "Ongoing",
    excerpt:
      "Our aggregator and community networks recover organic waste and recyclable materials while creating local income opportunities.",
  },
  {
    title: "Partnerships for Sustainable Impact",
    date: "Open",
    excerpt:
      "We work with government institutions, development partners, financial institutions, and private-sector clients to deliver circular economy solutions.",
  },
];

export default function HomeAnnouncements() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Announcements"
          subtitle="Stay up to date with the latest news and initiatives from Go Green Resources Limited."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {announcements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-green-100 px-3 py-1 rounded-full mb-4">
                {item.date}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
