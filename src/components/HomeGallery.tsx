"use client";

import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  { src: "/biogas-cylinders.jpg", caption: "Biogas cylinders ready for distribution" },
  { src: "/go-green-logo.png", caption: "Go Green Resources brand" },
  { src: "/biogas-cylinders.jpg", caption: "Clean cooking fuel for communities" },
  { src: "/go-green-logo.png", caption: "Building a sustainable Malawi" },
];

export default function HomeGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="A glimpse into our work transforming waste into opportunity."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md bg-gray-100"
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <p className="text-sm text-gray-600 p-3">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
