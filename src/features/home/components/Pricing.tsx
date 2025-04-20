import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { C_PRICING } from "../constants/HomeConstants";
import { tiers } from "../HomeMockData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="pricing" className="py-16 bg-primary">
      <div className="flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="rounded-full bg-tertiary-100 ring ring-inset ring-tertiary-400 text-tertiary-950 font-semibold leading-4 text-sm">
            {C_PRICING.title}
          </Badge>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
            {C_PRICING.shortDescription}
          </p>
          <p className="mt-4 text-lg leading-6 text-primary-500/90">
            {C_PRICING.description}
          </p>

          {/* Billing toggle */}
          <div className="mt-6 flex justify-center">
            <div className="relative flex">
              <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-full">
                <Button
                  variant={annual ? "ghost" : "default"}
                  className={`cursor-pointer rounded-2xl m-0 ${
                    !annual
                      ? "bg-secondary-500 shadow-sm group text-primary hover:bg-secondary-500"
                      : "text-primary-500"
                  } py-2 px-4 text-sm font-medium whitespace-nowrap transition-all duration-100 ease-in`}
                  onClick={() => setAnnual(false)}>
                  {C_PRICING.buttons.monthly.text}
                </Button>
                <Button
                  variant={annual ? "default" : "ghost"}
                  className={`cursor-pointer rounded-2xl m-0 ${
                    annual
                      ? "bg-secondary-500 shadow-sm group text-primary hover:bg-secondary-500"
                      : "text-primary-500"
                  } py-2 px-4 text-sm font-medium whitespace-nowrap transition-all duration-100 ease-in`}
                  onClick={() => setAnnual(true)}>
                  {C_PRICING.buttons.annual.text}
                  <span
                    className={`${
                      annual ? "text-primary" : "text-primary-500"
                    } text-xs font-bold ml-1 group-hover:text-primary-500 transition-all duration-100 ease-in`}>
                    -20%
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className="mx-auto max-w-xl sm:max-w-none mt-10 flex flex-col lg:flex-row justify-center items-center gap-8">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              className={`flex gap-4`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.2, ease: "easeIn" },
                    }
                  : { scale: 0.95 }
              }>
              <Card
                className={`${
                  tier.highlighted
                    ? "shadow-lg sm:scale-105 lg:scale-110 z-10 border-secondary-500 border"
                    : "border-primary-100"
                } px-6 h-full flex flex-col py-8`}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-primary-900">
                    <span className="text-3xl font-bold tracking-tight">
                      {annual ? tier.price.annually : tier.price.monthly}
                    </span>
                    <span className="text-sm font-medium text-primary-500">
                      {annual ? "/year" : "/month"}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul role="list" className="mt-2 space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-secondary-500" />
                        <p className="ml-3 text-sm text-primary-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`cursor-pointer ${
                      tier.highlighted
                        ? "bg-secondary-500 text-primary hover:bg-secondary-600"
                        : "bg-secondary-50 hover:bg-secondary-600 hover:text-primary border border-secondary-600 text-secondary-600"
                    } w-full`}
                    size="lg">
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
