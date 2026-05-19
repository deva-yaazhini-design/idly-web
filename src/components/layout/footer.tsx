import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 md:px-20 mt-32 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-medium tracking-tight text-surface-dim">
            Yaazhini Idly
          </h2>
          <p className="text-surface-dim/70 max-w-sm text-sm leading-relaxed">
            Five-star concierge service meets ancestral Tamil culinary heritage. Serving pure, soft, handcrafted idlies for your premium events.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold text-lg text-surface-dim">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <a href="tel:+917010250187" className="text-surface-dim/70 hover:text-primary transition-colors text-sm">
                  +91 70102 50187
                </a>
                <a href="tel:+919443409783" className="text-surface-dim/70 hover:text-primary transition-colors text-sm">
                  +91 94434 09783
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-surface-dim/70 text-sm leading-relaxed max-w-[250px]">
                19/13, Pillayar Kovil Street,<br />
                Vaikkalpattarai, Ponnammapet,<br />
                Salem - 636017
              </span>
            </li>
            <li>
              <a href="https://wa.me/917010250187" className="text-surface-dim/70 hover:text-primary transition-colors text-sm ml-8">
                WhatsApp Booking
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold text-lg text-surface-dim">Social & Legal</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-surface-dim/70 hover:text-primary transition-colors text-sm">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-surface-dim/70 hover:text-primary transition-colors text-sm">
                Facebook
              </a>
            </li>
            <li>
              <Link href="#" className="text-surface-dim/70 hover:text-primary transition-colors text-sm mt-4 block">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl mt-20 pt-8 border-t border-surface-dim/10 text-center">
        <p className="text-surface-dim/50 text-xs">
          &copy; {new Date().getFullYear()} Yaazhini Idly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
