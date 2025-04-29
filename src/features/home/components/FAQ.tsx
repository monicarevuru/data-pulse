import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../HomeMockData";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  return (
    <section className="pt-16 pb-8 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center">
          <Badge className="rounded-full bg-tertiary-100 ring ring-inset ring-tertiary-400 text-tertiary-950 font-semibold leading-4 text-sm">
            {"We've got you covered"}
          </Badge>
          <h2 className="text-4xl font-bold text-primary-950 text-center">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl px-6 my-4 shadow-sm bg-[#f5f5f5]">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger
                    className={`text-lg font-semibold hover:no-underline text-primary-950 cursor-pointer flex items-center`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`mt-2 text-primary-500 ${
                      index === faqs.length - 1 ? "border-0" : "border-b"
                    } border-primary-200 rounded-none`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
