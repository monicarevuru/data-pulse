import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { CheckIcon } from "lucide-react";
import { C_PRICING } from "../HomeConstants";
import { tiers } from "../HomeMockData";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="pricing" className="py-10 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {C_PRICING.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {C_PRICING.shortDescription}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {C_PRICING.description}
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex">
              <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-full">
                <Button
                  variant={annual ? "ghost" : "default"}
                  className={`rounded-2xl m-0 ${
                    !annual
                      ? "bg-white shadow-sm text-gray-900 hover:text-white"
                      : "text-gray-500"
                  } py-2 px-4 text-sm font-medium whitespace-nowrap transition-all duration-400 ease-in`}
                  onClick={() => setAnnual(false)}>
                  {C_PRICING.buttons.monthly.text}
                </Button>
                <Button
                  variant={annual ? "default" : "ghost"}
                  className={`rounded-2xl m-0 ${
                    annual
                      ? "bg-white shadow-sm group text-gray-900 hover:text-white"
                      : "text-gray-500"
                  } py-2 px-4 text-sm font-medium whitespace-nowrap transition-all duration-400 ease-in`}
                  onClick={() => setAnnual(true)}>
                  {C_PRICING.buttons.annual.text}
                  <span className="text-primary text-xs font-bold ml-1 group-hover:text-white transition-all duration-400 ease-in">
                    -20%
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              className={`${
                tier.highlighted
                  ? "z-10 relative mx-2 sm:my-0 lg:my-0"
                  : "sm:my-8 lg:my-0"
              } flex flex-col`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeIn" } } : { scale: 0.95 }}>
              <Card
                className={`${
                  tier.highlighted
                    ? "border-primary/50 shadow-lg shadow-primary/10 scale-105 lg:scale-110 z-10"
                    : ""
                } h-full flex flex-col`}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-3xl font-bold tracking-tight">
                      {annual ? tier.price.annually : tier.price.monthly}
                    </span>
                    <span className="ml-1 text-sm font-medium text-gray-500">
                      {annual ? "/year" : "/month"}
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
                          <CheckIcon
                            className="h-5 w-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`${
                      tier.highlighted
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-primary/90 hover:bg-primary"
                    } w-full`}
                    size="lg"
                    asChild>
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
};

export default Pricing;
