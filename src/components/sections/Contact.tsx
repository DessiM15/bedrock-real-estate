"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contactSchema, ContactFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <SectionWrapper id="contact" cream>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Side - Info */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-tan text-sm uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-green-dark font-medium leading-tight mb-6">
            Ready to Start Building
            <br />
            <span className="italic text-tan">Real Wealth?</span>
          </h2>
          <p className="text-green-dark/70 text-lg leading-relaxed mb-8">
            Take the first step toward higher returns and secured investments.
            Schedule your complimentary evaluation, and our team will work with
            you to build a strategy that aligns with your financial goals.
          </p>

          {/* Click-to-Call */}
          <motion.a
            href="tel:7199302059"
            className="inline-flex items-center gap-4 bg-green-dark text-cream px-8 py-5 rounded-sm hover:bg-green-dark-light transition-colors duration-300 self-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Call us at 719-930-2059"
          >
            <Phone className="w-6 h-6 text-tan" />
            <div>
              <p className="text-xs text-cream/60 uppercase tracking-wider">
                Call Us Directly
              </p>
              <p className="text-xl font-heading">719-930-2059</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="bg-white p-8 md:p-10 lg:p-12 rounded-sm border border-cream-dark shadow-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {submitStatus === "success" ? (
            <motion.div
              className="flex flex-col items-center justify-center text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="font-heading text-2xl text-green-dark mb-3">
                Thank You!
              </h3>
              <p className="text-green-dark/70 leading-relaxed max-w-sm">
                Your inquiry has been received. A member of our team will reach
                out within one business day to schedule your complimentary
                evaluation.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 text-tan hover:text-tan-dark transition-colors text-sm uppercase tracking-wider"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="font-heading text-2xl text-green-dark mb-2">
                Get Your Free Evaluation
              </h3>
              <p className="text-green-dark/60 text-sm mb-8">
                Fill out the form below and we&apos;ll be in touch shortly.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-green-dark/70 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={cn(
                      "w-full px-4 py-3.5 bg-cream border rounded-sm text-green-dark placeholder:text-green-dark/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-colors text-sm",
                      errors.name ? "border-red-400" : "border-cream-dark"
                    )}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-green-dark/70 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(
                      "w-full px-4 py-3.5 bg-cream border rounded-sm text-green-dark placeholder:text-green-dark/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-colors text-sm",
                      errors.email ? "border-red-400" : "border-cream-dark"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-green-dark/70 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={cn(
                      "w-full px-4 py-3.5 bg-cream border rounded-sm text-green-dark placeholder:text-green-dark/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-colors text-sm",
                      errors.phone ? "border-red-400" : "border-cream-dark"
                    )}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-green-dark/70 mb-2"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-3.5 bg-cream border border-cream-dark rounded-sm text-green-dark placeholder:text-green-dark/30 focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan transition-colors text-sm resize-none"
                    placeholder="Tell us about your investment goals..."
                  />
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full bg-tan text-white py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-tan-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitStatus === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get Your Free Evaluation
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
