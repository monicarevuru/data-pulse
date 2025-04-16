import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "SalePilot has transformed how we communicate with clients. Being able to share real-time dashboards with them has increased transparency and trust.",
    author: {
      name: "Sarah Johnson",
      title: "CTO at TechNova",
      imageInitials: "SJ"
    }
  },
  {
    content: "The team collaboration features have streamlined our workflow tremendously. We've reduced our meeting time by 30% since everyone can see the data in real-time.",
    author: {
      name: "Michael Rodriguez",
      title: "Lead Developer at Stackify",
      imageInitials: "MR"
    }
  },
  {
    content: "As a product manager, having all our metrics in one place with easy sharing capabilities has been a game changer. I can't imagine going back to our old system.",
    author: {
      name: "Lauren Taylor",
      title: "Product Manager at GrowthMetrics",
      imageInitials: "LT"
    }
  },
  {
    content: "The custom reporting features are powerful yet intuitive. We've been able to create exactly what our executives need without any development resources.",
    author: {
      name: "David Chen",
      title: "Data Analyst at Vizion",
      imageInitials: "DC"
    }
  },
  {
    content: "Our client satisfaction scores have increased by 40% since implementing SalePilot. The transparency it provides has completely changed our client relationships.",
    author: {
      name: "Emma Williams",
      title: "Client Success Director at DevShop",
      imageInitials: "EW"
    }
  },
  {
    content: "The mobile experience is flawless. I can check on critical metrics while traveling and respond to issues immediately rather than waiting to get back to my desk.",
    author: {
      name: "James Peterson",
      title: "Engineering Manager at MobileDev",
      imageInitials: "JP"
    }
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by developers and teams worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our customers have to say about how SalePilot has transformed their data communication.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40 mb-4">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.author.imageInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{testimonial.author.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;