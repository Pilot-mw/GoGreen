import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/go-green-logo.png"
                alt="GoGreen Resources Limited Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Powering clean communities in Malawi through sustainable biogas energy and aluminium recycling solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Solutions", "Impact", "Projects"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-primary-light text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-light flex-shrink-0" />
                <span>Lilongwe, Malawi</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-primary-light flex-shrink-0" />
                <span>info@gogreen.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-primary-light flex-shrink-0" />
                <span>+265 XXX XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GoGreen Resources Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
