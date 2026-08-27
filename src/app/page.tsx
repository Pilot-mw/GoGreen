import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import HomeAnnouncements from "@/components/HomeAnnouncements";
import HomeGallery from "@/components/HomeGallery";
import ImpactAreas from "@/components/ImpactAreas";
import { Users, RefreshCw, Leaf, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Clean Energy & Waste-to-Energy",
      description:
        "Converting organic and biomass waste into clean cooking fuel and supporting cleaner energy alternatives to charcoal and firewood.",
      icon: "leaf" as const,
      features: [
        "Community-linked biogas systems",
        "Cylinder and institutional distribution",
        "Recovery of bio-slurry as fertiliser",
        "Lower emissions and deforestation",
      ],
      href: "/solutions#clean-energy",
    },
    {
      title: "Materials Recovery & Recycling",
      description:
        "Building structured recovery networks for recyclable materials, beginning with aluminium used beverage cans.",
      icon: "recycle" as const,
      features: [
        "Community-based aggregators",
        "Sorting and processing",
        "Regional recycling value chains",
        "Reduced urban waste pollution",
      ],
      href: "/solutions#materials-recovery",
    },
  ];

  const differentiators = [
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Integrated Model",
      description:
        "Clean energy, materials recovery, and community livelihoods are combined into one mutually reinforcing circular economy system.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community-Centred",
      description:
        "Local ownership, participation, and income generation are designed into every programme we deliver.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Commercially Grounded",
      description:
        "Programmes are structured to move toward financial sustainability through revenue from energy, recycling, and environmental services.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Scalable & Adaptable",
      description:
        "Systems are modular and can be replicated across urban centres in Malawi and the wider region under different financing instruments.",
    },
  ];

  return (
    <>
      <Hero
        welcomeText="WELCOME TO"
        title="GO GREEN RESOURCES LIMITED"
        subtitle="Building a Circular Future for Malawi"
        description="Turning waste into value, energy, and opportunity."
        primaryCTA={{ label: "Explore Our Solutions", href: "/solutions" }}
        secondaryCTA={{ label: "Partner With Us", href: "/contact" }}
        bgImage="/hero.png"
        overlayOpacity={30}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="We recover waste and underused resources and transform them into clean energy, recovered materials, sustainable products, and economic opportunity."
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
            title="Our Impact"
            subtitle="Creating environmental and economic value across Malawi through circular economy solutions."
          />
          <div className="mt-12">
            <ImpactAreas />
          </div>
        </div>
      </section>

      <HomeAnnouncements />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Go Green Resources?"
            subtitle="An integrated, community-centred, and commercially grounded approach to the circular economy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeGallery />

      <section
        className="py-12 md:py-16"
        style={{ background: "linear-gradient(to right, #065f46, #1e3a5f)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Let&apos;s Build a Circular Future Together
          </h2>
          <p className="text-base sm:text-xl text-green-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Whether you are a community member, investor, partner, or institution,
            there is a place for you in building a sustainable Malawi.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-md font-semibold hover:bg-green-50 transition-colors text-sm md:text-base"
            >
              Partner With Us
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-md font-semibold hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
