"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFab() {
  const phoneNumber = "917010250187";
  const defaultMessage = encodeURIComponent("Hello! I'm interested in Yaazhini Idly's luxury catering services. Can we discuss a booking?");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-colors group"
      aria-label="Contact us on WhatsApp"
      whileHover={{ scale: 1.12, boxShadow: "0 15px 40px rgba(37,211,102,0.6)" }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <MessageCircle size={32} className="relative z-10" />
    </motion.a>
  );
}
