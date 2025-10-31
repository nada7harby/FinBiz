import { motion } from "framer-motion";
import { Check, Sparkle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: 499,
    period: "/month",
    description: "Get started with our essential tools for small teams.",
    features: [
      "Only 10 team members",
      "5 GB cloud storage",
      "Limited support",
      "Basic analytics",
    ],
    isPopular: false,
    btn: "Get Started",
  },
  {
    name: "Pro",
    price: 499,
    period: "/month",
    description: "Perfect for growing businesses with advanced needs.",
    features: [
      "Up to 100 team members",
      "100 GB cloud storage",
      "Priority 24/7 support",
      "Advanced analytics",
      "Custom integrations",
    ],
    isPopular: true,
    btn: "Get Started",
  },
  {
    name: "Enterprise",
    price: 999,
    period: "/month",
    description: "Custom solutions for large-scale operations.",
    features: [
      "Unlimited team members",
      "Unlimited cloud storage",
      "Dedicated support team",
      "Advanced security",
      "Custom integrations",
      "SLA guarantee",
      "API access",
    ],
    isPopular: false,
    btn: "Contact Us",
  },
];

export function PricingSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-dynamicBorder text-sm font-medium mb-4">
            <Tag className="scale-x-[-1]" />
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Find the right plan
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Invest in your company's future with our comprehensive financial
            solution. Contact us for pricing details and see how we can help you
            streamline your finances and reach your business goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-background rounded-2xl border p-8 md:p-10 lg:p-12 transition-all duration-300 hover:shadow-card-hover`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <div className="absolute top-4 right-4 border border-[#33C6AB] rounded-full">
                  <span className="px-3 py-1 text-[#33C6AB] text-sm font-medium rounded-full flex justify-center items-center gap-1.5">
                    <Sparkle className="w-4 h-4" /> Popular
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 justify-center py-6">
                  <span className="text-4xl sm:text-5xl font-bold">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                size="lg"
                className={`w-full rounded-full ${
                  plan.isPopular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-popover text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.btn}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
