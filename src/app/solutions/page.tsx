import SectionHeading from "@/components/SectionHeading";
import { Leaf, Recycle, Flame, TreePine, Factory, TrendingUp } from "lucide-react";

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Scalable, sustainable, and commercially viable environmental solutions."
            centered={false}
            subtitleClass="text-white/90"
          />
        </div>
      </section>

      <section id="biogas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Biogas Energy</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Our community biogas production transforms organic waste from markets, farms, and 
                households into clean cooking gas. This sustainable solution replaces charcoal and 
                LPG, reducing deforestation and providing affordable energy to communities.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
              <p className="text-gray-700 mb-6">
                Organic waste is collected and fed into anaerobic digesters where bacteria break 
                down the material, producing biogas (methane). The gas is then purified, compressed 
                into cylinders, and distributed to households and institutions.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                {[
                  "Cheaper than LPG - significant cost savings for households",
                  "Replaces charcoal - reducing deforestation and smoke-related health issues",
                  "Reduces methane emissions from decomposing waste",
                  "Creates local jobs in collection, operation, and distribution",
                  "Scalable community-based model",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                {[
                  { icon: <Flame className="h-6 w-6" />, title: "Clean Cooking", desc: "Smokeless, efficient cooking fuel" },
                  { icon: <TreePine className="h-6 w-6" />, title: "Deforestation Reduction", desc: "Preserves Malawi's forests" },
                  { icon: <Factory className="h-6 w-6" />, title: "Waste Management", desc: "Diverting organic waste from landfills" },
                  { icon: <TrendingUp className="h-6 w-6" />, title: "Cost Effective", desc: "30-40% cheaper than LPG" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recycling" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-lg">
                <div className="space-y-6">
                  {[
                    { icon: <Recycle className="h-6 w-6" />, title: "Circular Economy", desc: "Closing the loop on aluminium waste" },
                    { icon: <TrendingUp className="h-6 w-6" />, title: "Income Generation", desc: "Steady earnings for collectors" },
                    { icon: <Factory className="h-6 w-6" />, title: "Export Grade", desc: "International quality standards" },
                    { icon: <Leaf className="h-6 w-6" />, title: "Pollution Reduction", desc: "Keeping cans out of landfills" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="text-primary mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Aluminium Can Recycling (UBC)</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Our aluminium can collection and recycling program builds a network of community 
                collectors who gather used beverage cans (UBC) from households, markets, and 
                businesses. These are sorted, baled, and exported to regional recyclers.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Process</h3>
              <p className="text-gray-700 mb-6">
                We establish collection points across Lilongwe, train community members as collectors, 
                and aggregate the materials at our facility. After sorting and baling, the aluminium 
                is exported to regional recycling partners, supporting the global circular economy.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                {[
                  "Reduces environmental pollution from aluminium waste",
                  "Creates income opportunities for youth and women",
                  "Supports the global circular economy",
                  "Reduces energy use compared to new aluminium production",
                  "Scalable collection network model",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement These Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Partner with us to bring clean energy and recycling solutions to your community or organization.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
