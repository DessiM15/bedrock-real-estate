"use client";

import { motion } from "motion/react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  {
    vehicle: "Traditional Savings",
    returns: "~0.5%",
    secured: false,
    downside: "Inflation erodes value",
    volatility: "None",
    highlight: false,
  },
  {
    vehicle: "Certificates of Deposit",
    returns: "4–5%",
    secured: true,
    downside: "Locked in, low returns",
    volatility: "None",
    highlight: false,
  },
  {
    vehicle: "Stock Market (S&P 500)",
    returns: "~10% avg.",
    secured: false,
    downside: "High — market crashes",
    volatility: "High",
    highlight: false,
  },
  {
    vehicle: "Bedrock Alternative RE",
    returns: "13–28%",
    secured: true,
    downside: "Fully mitigated",
    volatility: "None",
    highlight: true,
  },
];

export function Comparison() {
  return (
    <SectionWrapper id="comparison" cream>
      <SectionHeading subtitle="Compare Your Options">
        See the
        <br />
        <span className="italic text-tan">Difference</span>
      </SectionHeading>

      {/* Desktop Table */}
      <motion.div
        className="hidden md:block overflow-hidden rounded-sm border border-cream-dark"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <table className="w-full">
          <thead>
            <tr className="bg-green-dark text-cream">
              <th className="text-left py-5 px-6 font-heading text-base font-normal">
                Investment Vehicle
              </th>
              <th className="text-center py-5 px-6 font-heading text-base font-normal">
                Annual Returns
              </th>
              <th className="text-center py-5 px-6 font-heading text-base font-normal">
                UCC Secured
              </th>
              <th className="text-center py-5 px-6 font-heading text-base font-normal">
                Downside Risk
              </th>
              <th className="text-center py-5 px-6 font-heading text-base font-normal">
                Volatility
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={row.vehicle}
                className={
                  row.highlight
                    ? "bg-tan/10 border-l-4 border-l-tan"
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-cream"
                }
              >
                <td
                  className={`py-5 px-6 text-sm ${
                    row.highlight
                      ? "font-bold text-green-dark"
                      : "text-green-dark/80"
                  }`}
                >
                  {row.vehicle}
                </td>
                <td className="text-center py-5 px-6">
                  <span
                    className={`text-sm font-semibold ${
                      row.highlight ? "text-tan text-lg" : "text-green-dark"
                    }`}
                  >
                    {row.returns}
                  </span>
                </td>
                <td className="text-center py-5 px-6">
                  {row.secured ? (
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </td>
                <td className="text-center py-5 px-6">
                  <span
                    className={`text-sm ${
                      row.highlight
                        ? "text-green-600 font-medium"
                        : "text-green-dark/60"
                    }`}
                  >
                    {row.downside}
                  </span>
                </td>
                <td className="text-center py-5 px-6">
                  <span
                    className={`text-sm ${
                      row.highlight
                        ? "text-green-600 font-medium"
                        : "text-green-dark/60"
                    }`}
                  >
                    {row.volatility}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((row, index) => (
          <motion.div
            key={row.vehicle}
            className={`p-6 rounded-sm border ${
              row.highlight
                ? "border-tan bg-tan/10"
                : "border-cream-dark bg-white"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3
              className={`font-heading text-lg mb-4 ${
                row.highlight ? "text-tan" : "text-green-dark"
              }`}
            >
              {row.vehicle}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-green-dark/50 text-xs uppercase tracking-wider">
                  Returns
                </span>
                <p
                  className={`font-semibold mt-1 ${
                    row.highlight ? "text-tan text-lg" : "text-green-dark"
                  }`}
                >
                  {row.returns}
                </p>
              </div>
              <div>
                <span className="text-green-dark/50 text-xs uppercase tracking-wider">
                  UCC Secured
                </span>
                <p className="mt-1">
                  {row.secured ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                </p>
              </div>
              <div>
                <span className="text-green-dark/50 text-xs uppercase tracking-wider">
                  Downside
                </span>
                <p className="text-green-dark/70 mt-1">{row.downside}</p>
              </div>
              <div>
                <span className="text-green-dark/50 text-xs uppercase tracking-wider">
                  Volatility
                </span>
                <p className="text-green-dark/70 mt-1">{row.volatility}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
