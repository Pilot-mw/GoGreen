"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  welcomeText?: string;
  title: string;
  titleColor?: string;
  titleStroke?: string;
  subtitle: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  bgImage?: string;
  overlayOpacity?: number;
}

export default function Hero({
  welcomeText,
  title,
  titleColor = "text-white",
  titleStroke,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  bgImage,
  overlayOpacity = 50,
}: HeroProps) {
  return (
    <section className="relative min-h-[500px] md:h-[85vh] md:min-h-[600px] flex items-center">
      {bgImage && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div
            className="absolute inset-0 bg-black/"
            style={{ opacity: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
        </div>
      )}

      <div className="relative z-10 w-full py-16 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            {welcomeText && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-2xl text-white mb-2 md:mb-4 font-medium"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
              >
                {welcomeText}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight"
              style={{
                color: "#ffffff",
                textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.4)",
                fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-2xl text-white mb-4 md:mb-6 leading-relaxed"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              {subtitle}
            </motion.p>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-sm md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
              >
                {description}
              </motion.p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-3 md:gap-4 justify-center"
              >
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="bg-white text-[#0b5d3b] px-6 md:px-8 py-2.5 md:py-3 rounded-md font-semibold hover:bg-green-50 transition-colors text-sm md:text-base"
                  >
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="border-2 border-primary bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-md font-semibold hover:bg-primary-dark hover:border-primary-dark transition-colors text-sm md:text-base"
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
