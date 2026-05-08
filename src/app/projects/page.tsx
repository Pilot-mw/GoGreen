"use client";

import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Leaf, Recycle, Calendar, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function ProjectsPage() {
  const timeline = [
    {
      phase: "Phase 1: Setup",
      duration: "Months 1-6",
      status: "completed",
      items: [
        "Site identification and acquisition in Lilongwe",
        "Equipment procurement and installation",
        "Community engagement and collector recruitment",
        "Regulatory compliance and licensing",
      ],
    },
    {
      phase: "Phase 2: Operations",
      duration: "Months 6-18",
      status: "in-progress",
      items: [
        "Commence biogas production from organic waste",
        "Launch aluminium can collection network",
        "Establish baling and processing facility",
        "Begin community distribution of biogas cylinders",
      ],
    },
    {
      phase: "Phase 3: Scale",
      duration: "Months 18-36",
      status: "upcoming",
      items: [
        "Expand collection network to surrounding districts",
        "Increase biogas production capacity",
        "Establish additional collection centers",
        "Develop export partnerships for recycled aluminium",
      ],
    },
    {
      phase: "Phase 4: Sustainability",
      duration: "Year 3+",
      status: "upcoming",
      items: [
        "Achieve operational profitability",
        "Replicate model in other Malawian cities",
        "Train local entrepreneurs to franchise model",
        "Establish research partnership with universities",
      ],
    },
  ];

  const partnerships = [
    { icon: <Calendar className="h-6 w-6" />, title: "Markets & Farms", desc: "Organic waste suppliers for biogas production" },
    { icon: <Users className="h-6 w-6" />, title: "Community Collectors", desc: "Local youth and women in collection network" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "Export Buyers", desc: "Regional recyclers for aluminium cans" },
    { icon: <Leaf className="h-6 w-6" />, title: "Environmental NGOs", desc: "Technical and knowledge partnerships" },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Projects"
            subtitle="Highlighting our flagship initiative and future expansion plans."
            centered={false}
            subtitleClass="text-white/90"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-900/60 via-green-800/60 to-blue-900/60 p-8 md:p-12 rounded-lg mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Community Biogas & Aluminium Recycling Initiative
              </h2>
            </div>
            <p className="text-white/90 text-lg mb-6">
              Our flagship project in Lilongwe integrates biogas production from organic waste with 
              aluminium can recycling, creating a comprehensive waste-to-resource ecosystem that 
              benefits the environment and local communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Lilongwe-Based
              </span>
              <span className="bg-green-700 text-green-100 px-4 py-2 rounded-full text-sm font-semibold">
                Multi-Phase Project
              </span>
              <span className="bg-blue-800 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
                Community-Driven
              </span>
            </div>
          </div>

          <SectionHeading
            title="Project Timeline"
            subtitle="Our phased approach to building a sustainable environmental enterprise."
          />

          <div className="mt-12 space-y-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        phase.status === "completed"
                          ? "bg-green-600"
                          : phase.status === "in-progress"
                          ? "bg-yellow-500"
                          : "bg-gray-600"
                      }`}
                    >
                      {phase.status === "completed" ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        index + 1
                      )}
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-800 p-6 rounded-lg">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="text-sm text-white/70">{phase.duration}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          phase.status === "completed"
                            ? "bg-green-900 text-green-100"
                            : phase.status === "in-progress"
                            ? "bg-yellow-900 text-yellow-100"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {phase.status === "completed"
                          ? "Completed"
                          : phase.status === "in-progress"
                          ? "In Progress"
                          : "Upcoming"}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-white/90">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Partnerships"
            subtitle="Collaborating with diverse stakeholders to maximize impact."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {partnerships.map((partner) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-primary flex justify-center mb-4">{partner.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{partner.title}</h3>
                <p className="text-white/90 text-sm">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Partner on Future Projects?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for strategic partners, investors, and community organizations to join our mission.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors inline-block"
          >
            Become a Partner
          </a>
        </div>
      </section>
    </>
  );
}
