"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  date: z.string().min(1, "Event date is required"),
  eventType: z.string().min(2, "Event type is required"),
  count: z.string().min(1, "Guest/Idly count is required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormValues) => {
    const phoneNumber = "917010250187";
    const message = `Hello Yaazhini Idly!\n\nI would like to inquire about catering.\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Date:* ${data.date}\n*Event:* ${data.eventType}\n*Count:* ${data.count}\n\nPlease let me know the availability and pricing.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface p-8 md:p-12 rounded-[2rem] shadow-[0_10px_50px_rgba(29,28,21,0.05)] border border-surface-dim relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="space-y-2">
        <h3 className="font-display text-3xl font-medium text-foreground">Inquire Now</h3>
        <p className="text-foreground/70 text-sm">Fill out the details below, and we'll connect with you on WhatsApp instantly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Full Name</label>
          <input
            {...register("name")}
            className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
            placeholder="Your name"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
            placeholder="+91 00000 00000"
          />
          {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Event Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
          />
          {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Event Type</label>
          <select
            {...register("eventType")}
            className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
          >
            <option value="">Select event</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Housewarming">Housewarming</option>
            <option value="Other">Other</option>
          </select>
          {errors.eventType && <span className="text-red-500 text-xs">{errors.eventType.message}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Expected Guest / Idly Count</label>
        <input
          {...register("count")}
          className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
          placeholder="E.g., 500 guests or 1000 idlies"
        />
        {errors.count && <span className="text-red-500 text-xs">{errors.count.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Submit via WhatsApp
      </button>
    </form>
  );
}
