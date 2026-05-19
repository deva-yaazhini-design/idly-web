"use client";

import ImageSequenceCanvas from "@/components/ImageSequenceCanvas";
import BookingForm from "@/components/BookingForm";
import WhatsAppFab from "@/components/WhatsAppFab";
import Footer from "@/components/layout/footer";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <>
      <WhatsAppFab />

      {/* Hero Section with Frame Sequence Canvas */}
      <section className="relative w-full h-[300vh]">
        {/* The canvas is pinned for the duration of the section */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ImageSequenceCanvas frameCount={192} />
          
          {/* Overlay Text for Hero */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 pointer-events-none mix-blend-difference"
          >
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-8xl text-surface-dim font-bold tracking-tight mb-6">
              Taste the Clouds
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-sans text-lg md:text-2xl text-surface-dim/90 max-w-2xl font-light mb-12">
              The softest, purest, most authentic luxury idlies for your premium occasions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-32 px-6 md:px-20 bg-background relative z-10 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16"
        >
          <div className="w-full md:w-1/2 space-y-8">
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl text-foreground font-medium leading-tight">
              A Legacy of <br />
              <span className="text-primary italic">Softness</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-accent rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-foreground/80 leading-relaxed font-sans">
              For over a decade, Yaazhini Idly has perfected the art of the traditional stone-ground batter. Sourced from the finest grains and fermented with ancestral precision, our idlies are crafted to melt in your mouth. 
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/80 leading-relaxed font-sans">
              We bring village-style authenticity to five-star hospitality, ensuring every bite at your event is a memorable testament to Tamil culinary heritage.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp} className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              {/* Fallback image if frame sequence isn't used here */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full bg-surface-dim bg-cover bg-center" 
                style={{ backgroundImage: 'url("/images/sequence/3d-00050.jpg")' }} 
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Signature Product Section */}
      <section className="py-32 bg-surface text-center px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="container mx-auto max-w-4xl space-y-12"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-7xl text-foreground">
            The Mallipoo Standard
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
            Visually flawless. Texturally cloud-like. Without excessive pores, our idlies represent the pinnacle of South Indian presentation.
          </motion.p>
        </motion.div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-32 px-6 md:px-20 bg-background">
        <div className="container mx-auto max-w-7xl space-y-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl text-foreground">Premium Catering</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 max-w-2xl mx-auto">Elevate your weddings, corporate events, and family gatherings with our live catering stations.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Catering Card 1 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-surface p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-border/50"
            >
              <h3 className="font-display text-2xl mb-4 text-primary">The Grand Wedding</h3>
              <p className="text-foreground/70 mb-6">A complete live-station setup featuring our signature idlies, 5 varieties of chutneys, and authentic sambar.</p>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider">500+ Guests</div>
            </motion.div>
            
            {/* Catering Card 2 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-primary text-primary-foreground p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(59,105,52,0.2)] md:scale-105 z-10 origin-bottom"
            >
              <h3 className="font-display text-2xl mb-4">Corporate Elite</h3>
              <p className="text-primary-foreground/80 mb-6">Sleek, hygienic, and fast-paced premium breakfast boxes or buffet setups for your distinguished team.</p>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider">100 - 500 Guests</div>
            </motion.div>

            {/* Catering Card 3 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-surface p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-border/50"
            >
              <h3 className="font-display text-2xl mb-4 text-primary">Intimate Gatherings</h3>
              <p className="text-foreground/70 mb-6">Perfectly packaged premium idly sets for housewarmings, poojas, and close family celebrations.</p>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider">Up to 100 Guests</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="inquire" className="py-32 px-6 md:px-20 bg-surface-dim relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 relative z-10"
        >
          <div className="w-full lg:w-5/12 space-y-8">
            <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-6xl text-foreground leading-tight">
              Reserve Your <br /> Experience
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/80 font-sans">
              Due to our meticulous preparation process, we accept a limited number of events per month. 
              Inquire early to secure Yaazhini Idly for your special day.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp} className="w-full lg:w-7/12">
            <BookingForm />
          </motion.div>
        </motion.div>
      </section>

      {/* Location Map Section */}
      <section className="py-32 px-6 md:px-20 bg-background relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto max-w-7xl space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-foreground font-medium">Find Us</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 max-w-2xl mx-auto font-sans">Visit our kitchen in Salem to experience the heritage firsthand.</motion.p>
          </div>
          <motion.div variants={fadeInUp} className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-border/50 relative group">
            <iframe 
              src="https://maps.google.com/maps?q=11.673463179664651,78.18410628361687&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
