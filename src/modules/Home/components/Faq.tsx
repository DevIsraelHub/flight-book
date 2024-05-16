import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Section from "@/components/Section";
import { faq } from "@/constants";

const Faq = () => {
  return (
    <Section classNames="mx-auto pb-8 lg:pb-20 flex items-center justify-center flex-col">
      <h3 className=" font-semibold text-brandColorAlt">FAQ</h3>
      <h2 className="text-3xl mt-3 mb-5 lg:text-4xl font-bold">Frequently Asked Question</h2>
      <Accordion type="single" collapsible className="w-full lg:space-y-4 lg:w-[80%] text-left bg-[#39A0FF] dark:bg-brandBg p-4 md:p-8 rounded-3xl shadow-xl shadow-[#5D50C6]/20 dark:shadow-none">
        {
          faq.map((item, index) => (
            <AccordionItem key={index} value={`${item.id}`}>
              <AccordionTrigger className="text-sm md:text-lg text-brandWhite w-full text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-brandWhite">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </Section>
  )
}

export default Faq;