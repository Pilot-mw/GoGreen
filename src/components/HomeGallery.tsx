"use client";

import SectionHeading from "@/components/SectionHeading";

export default function HomeGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="A glimpse into our work transforming waste into opportunity."
        />
        <div className="mt-12 text-center text-gray-600">
          Gallery coming soon
        </div>
      </div>
    </section>
  );
}