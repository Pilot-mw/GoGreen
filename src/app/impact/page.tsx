"use client";

import { useEffect, useState, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import { Leaf, Recycle, Users, TreePine, TrendingUp, Factory } from "lucide-react";
import { motion, useInView } from "framer-motion";

function ImpactBar({ label, value, maxValue, color }: { label: string; value: number; maxValue: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth((value / maxValue) * 100), 200);
    }
  }, [isInView, value, maxValue]);

  return (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">{label}</span>
          <span className="text-gray-900 font-bold">{value.toLocaleString()}</span>
        </div>
      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function ImpactPage() {
  const stats = [
    {
      value: 2500,
      suffix: "+",
      label: "Tonnes of CO₂ Reduced",
      icon: <TreePine className="h-8 w-8" />,
    },
    {
      value: 1200,
      suffix: "+",
      label: "Tonnes of Charcoal Displaced",
      icon: <Leaf className="h-8 w-8" />,
    },
    {
      value: 1500,
      suffix: "+",
      label: "Tonnes of Aluminium Recycled",
      icon: <Recycle className="h-8 w-8" />,
    },
    {
      value: 200,
      suffix: "+",
      label: "Green Jobs Created",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: 3000,
      suffix: "+",
      label: "Households Using Biogas",
      icon: <Factory className="h-8 w-8" />,
    },
    {
      value: 60,
      suffix: "%",
      label: "Women & Youth Employed",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  const impactAreas = [
    {
      title: "Environmental Impact",
      items: [
        { label: "CO₂ Emissions Reduced (tonnes)", value: 2500, maxValue: 5000, color: "bg-green-600" },
        { label: "Charcoal Displaced (tonnes)", value: 1200, maxValue: 3000, color: "bg-green-500" },
        { label: "Aluminium Recycled (tonnes)", value: 1500, maxValue: 3000, color: "bg-blue-500" },
        { label: "Trees Saved (estimated)", value: 8000, maxValue: 15000, color: "bg-emerald-600" },
      ],
    },
    {
      title: "Social Impact",
      items: [
        { label: "Households Served", value: 3000, maxValue: 10000, color: "bg-purple-600" },
        { label: "Jobs Created", value: 200, maxValue: 500, color: "bg-indigo-600" },
        { label: "Women Employed (%)", value: 60, maxValue: 100, color: "bg-pink-600" },
        { label: "Youth Employed (%)", value: 60, maxValue: 100, color: "bg-orange-500" },
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Impact"
            subtitle="Measurable results driving environmental sustainability and community development across Malawi."
            centered={false}
            subtitleClass="text-white/90"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </section>

       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Impact Breakdown"
            subtitle="See how our operations create measurable change across environmental and social dimensions."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {impactAreas.map((area) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{area.title}</h3>
                {area.items.map((item) => (
                  <ImpactBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    maxValue={item.maxValue}
                    color={item.color}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sustainable Development Goals"
            subtitle="Our work contributes to multiple UN Sustainable Development Goals."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {[
              { number: "7", title: "Clean Energy", color: "bg-yellow-500" },
              { number: "8", title: "Decent Work", color: "bg-red-500" },
              { number: "11", title: "Sustainable Cities", color: "bg-green-500" },
              { number: "12", title: "Responsible Consumption", color: "bg-blue-500" },
              { number: "13", title: "Climate Action", color: "bg-orange-500" },
              { number: "15", title: "Life on Land", color: "bg-emerald-500" },
            ].map((goal) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 ${goal.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3`}
                >
                  {goal.number}
                </div>
                <p className="text-sm font-medium text-gray-700">{goal.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
