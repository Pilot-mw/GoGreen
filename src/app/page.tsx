import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import { Leaf, Recycle, TrendingUp, Users, TreePine, Factory } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const stats = [
    {
      value: 2500,
      suffix: "+",
      label: "Tonnes of CO₂ Reduced",
      icon: <TreePine className="h-8 w-8" />,
    },
    {
      value: 1500,
      suffix: "+",
      label: "Tonnes Recycled",
      icon: <Recycle className="h-8 w-8" />,
    },
    {
      value: 3000,
      suffix: "+",
      label: "Households Served",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: 200,
      suffix: "+",
      label: "Green Jobs Created",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  const services = [
    {
      title: "Community Biogas Production",
      description:
        "Transforming organic waste into clean cooking fuel for households and institutions across Lilongwe.",
      icon: "leaf" as const,
      features: [
        "Clean cooking alternative to charcoal",
        "Cheaper than LPG",
        "Reduces deforestation",
        "Scalable community-based model",
      ],
      href: "/solutions#biogas",
    },
    {
      title: "Aluminium Can Recycling (UBC)",
      description:
        "Building a collection network for used beverage cans, creating income opportunities and reducing landfill waste.",
      icon: "recycle" as const,
      features: [
        "Collection from communities & markets",
        "Sorting and baling operations",
        "Export to regional recyclers",
        "Income generation for collectors",
      ],
      href: "/solutions#recycling",
    },
  ];

  const testimonials = [
    {
      quote: "GoGreen has transformed how our community accesses clean cooking fuel. The biogas is affordable and reliable.",
      author: "Sarah Banda",
      role: "Community Leader",
      company: "Lilongwe",
    },
    {
      quote: "The aluminium can collection program has created steady income for our youth group while cleaning up our environment.",
      author: "James Mwale",
      role: "Youth Coordinator",
      company: "Kanengo",
    },
    {
      quote: "Partnering with GoGreen has been a game-changer for our restaurant's sustainability goals.",
      author: "Mary Chirwa",
      role: "Restaurant Owner",
      company: "City Centre",
    },
  ];

  return (
    <>
      <Hero
        welcomeText="Welcome to"
        title="GOGREEN RESOURCES"
        subtitle="Powering Clean Communities. Turning Waste into Opportunity."
        description="Sustainable biogas energy and aluminium recycling solutions in Malawi."
        primaryCTA={{ label: "Our Solutions", href: "/solutions" }}
        secondaryCTA={{ label: "Get Involved", href: "/contact" }}
        bgImage="/biogas-cylinders.jpg"
        overlayOpacity={30}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Building a Sustainable Future"
            subtitle="GoGreen Resources Limited is pioneering clean energy and recycling solutions that create environmental and economic impact across Malawi."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Impact in Numbers"
            subtitle="Measurable results driving environmental sustainability and community development."
          />
          <StatsCounter stats={stats} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why It Matters"
            subtitle="Our solutions address critical environmental and economic challenges in Malawi."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Protection",
                description:
                  "Reducing deforestation by replacing charcoal with biogas, and keeping aluminium waste out of landfills.",
                icon: <TreePine className="h-10 w-10 text-primary" />,
              },
              {
                title: "Economic Opportunity",
                description:
                  "Creating sustainable livelihoods through waste collection, biogas distribution, and recycling operations.",
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
              },
              {
                title: "Energy Security",
                description:
                  "Providing reliable, affordable clean cooking fuel that reduces dependence on imported LPG and diminishing forests.",
                icon: <Leaf className="h-10 w-10 text-primary" />,
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Partners Say"
            subtitle="Hear from communities and businesses we work with."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Green Revolution?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a community member, investor, or partner, there&apos;s a place for you in building a sustainable Malawi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
