"use client";

import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle } from 'lucide-react';

type FaqItems = {
    question: string;
    answer: string;
};

const Faqs: FaqItems[] = [{
    question: "What is the team size",
    answer: "Team can be of 3-4 members and participants can also join individually"
}, {
    question: "What is the team size",
    answer: "Team can be of 3-4 members and participants can also join individually"
}, {
    question: "What is the team size",
    answer: "Team can be of 3-4 members and participants can also join individually"
}, {
    question: "What is the team size",
    answer: "Team can be of 3-4 members and participants can also join individually"
}, {
    question: "What is the team size",
    answer: "Team can be of 3-4 members and participants can also join individually"
}];

const CustomAccordionTrigger = React.forwardRef((props: any, ref: any) => (
  <AccordionTrigger 
    {...props}
    className="group flex justify-between items-center py-6 px-4 w-full hover:no-underline"
  >
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <PlusCircle className="w-6 h-6 dark:text-squidTeal text-squidPink group-data-[state=open]:rotate-45 transition-transform duration-300" />
      </div>
      <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-squidPink dark:group-hover:text-squidTeal transition-colors duration-300">
        {props.children}
      </span>
    </div>
  </AccordionTrigger>
));

CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

export default function FaqsPage() {
    const [openItem, setOpenItem] = useState<string | undefined>(undefined);

    return (
        <div className="min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </span>
                    </h1>
                    <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {Faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="group relative"
                            style={{
                                animation: 'fadeInUp 0.5s ease-out forwards',
                                animationDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Decorative side line */}
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-squidPink to-squidTeal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Card */}
                            <div className="ml-2 backdrop-blur-lg dark:bg-white/5 bg-white rounded-lg border 
                                          dark:border-squidTeal/30 border-squidPink/30 
                                          dark:hover:border-squidPink/50 hover:border-squidTeal/50 
                                          shadow-lg transition-all duration-300
                                          hover:shadow-xl">
                                <Accordion 
                                    type="single" 
                                    value={openItem} 
                                    onValueChange={setOpenItem}
                                >
                                    <AccordionItem value={`item-${index}`} className="border-none">
                                        <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
                                        <AccordionContent className="px-14 pb-6">
                                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}