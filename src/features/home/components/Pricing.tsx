import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: { monthly: "$29", annually: "$290" },
    description: "Perfect for small teams just getting started with data analytics.",
    features: [
      "Up to 5 team members",
      "50,000 API calls per month",
      "5 custom dashboards",
      "7-day data history",
      "Basic team chat",
      "Email support"
    ],
    cta: "Start with Starter",
    highlighted: false
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: { monthly: "$79", annually: "$790" },
    description: "Ideal for growing teams with advanced analytics needs.",
    features: [
      "Up to 15 team members",
      "500,000 API calls per month",
      "Unlimited dashboards",
      "30-day data history",
      "Team & client chat",
      "Custom branding",
      "Priority support",
      "Advanced export options"
    ],
    cta: "Start with Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: { monthly: "$299", annually: "$2,990" },
    description: "For organizations requiring maximum performance and security.",
    features: [
      "Unlimited team members",
      "5,000,000 API calls per month",
      "Unlimited dashboards",
      "Unlimited data history",
      "Advanced team collaboration",
      "White labeling",
      "SSO & advanced security",
      "Dedicated account manager",
      "24/7 phone & email support"
    ],
    cta: "Contact sales",
    highlighted: false
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find a plan that fits your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the right plan for your team's size and requirements. All plans include our core analytics features.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex rounded-full bg-gray-100 p-1">
              <button
                type="button"
                className={`${
                  !annual
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500'
                } relative rounded-full py-2 px-4 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${
                  annual
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500'
                } relative rounded-full py-2 px-4 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary`}
                onClick={() => setAnnual(true)}
              >
                Annual <span className="text-primary text-xs font-bold ml-1">-20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`${
                tier.highlighted
                  ? 'relative z-10 lg:-mx-8 lg:mt-0'
                  : 'lg:mt-0'
              } flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`${
                  tier.highlighted
                    ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105 lg:scale-110 z-10'
                    : ''
                } h-full flex flex-col`}
              >
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-3xl font-bold tracking-tight">
                      {annual ? tier.price.annually : tier.price.monthly}
                    </span>
                    <span className="ml-1 text-sm font-medium text-gray-500">
                      {annual ? '/year' : '/month'}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul role="list" className="mt-2 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`${
                      tier.highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-primary/90 hover:bg-primary'
                    } w-full`}
                    size="lg"
                    asChild
                  >
                    <a href="#demo">{tier.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;