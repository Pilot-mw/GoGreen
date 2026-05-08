import SectionHeading from "@/components/SectionHeading";
import { Leaf, Recycle, Users, TrendingUp, Shield, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Environmental stewardship at the core of everything we do.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Empowering local communities through green livelihoods.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Pioneering scalable environmental enterprise solutions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Accountability",
      description: "Transparent operations and measurable impact delivery.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About GoGreen Resources Limited"
            subtitle="Building scalable environmental enterprise across Malawi."
            centered={false}
            subtitleClass="text-white/90"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <p className="text-gray-700 mb-4">
                GoGreen Resources Limited is a clean energy and recycling company based in Lilongwe, Malawi. 
                We transform waste into valuable resources, creating sustainable solutions that benefit both 
                the environment and local communities.
              </p>
              <p className="text-gray-700 mb-4">
                Founded with a vision to build scalable environmental enterprise, we operate at the 
                intersection of clean energy production and circular economy principles.
              </p>
              <p className="text-gray-700">
                Our operations demonstrate that environmental sustainability and commercial viability 
                go hand in hand, creating a model for sustainable development across Malawi.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To reduce emissions, create green livelihoods, and build sustainable urban systems 
                    through innovative waste-to-energy and recycling solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To become the leading environmental enterprise in Malawi, scaling sustainable 
                    solutions that transform communities and protect our environment.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Leaf className="h-5 w-5" />
                    <span>Based in Lilongwe, Malawi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our operations and decision-making."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-primary flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-800 to-blue-900 text-white p-8 md:p-12 rounded-lg">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Not Charity. Business.</h2>
              <p className="text-green-100 text-lg mb-6">
                We operate as a commercial enterprise that delivers environmental and social impact. 
                Our model proves that sustainability and profitability can work together to create 
                lasting change.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-sm font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-green-100">Join 200+ team members across Lilongwe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
