"use client";

import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

type FaqItems = {
    question: string;
    answer: string;
};

const Faqs: FaqItems[] = [{
    question: "Team Size",
    answer: "Team size can be of 2-4 members"
},{
    question: "Registration Costs?",
    answer: "Nada"
}, {
    question: "Are Inter College Teams allowed?",
    answer: "Yes, Inter College teams are allowed"
}, {
    question: "Will There Be wifi at the Venue?",
    answer: "Yes, of course (even we can't survive without Internet 😭)"
}, {
    question: "Can I participate solo?",
    answer: "While we encourage participation as a team (as you'll get networking opportunities and it's always fun with friends) you can participate solo"
}, {
    question: "Is this Hackathon free?",
    answer: "You have to just 36 crore, then we'll tell you the answer (jk, it's completely free, we'll never ask for any payment ❤️)"
}, {
    question: "whats the duration of the hackathon?",
    answer: "It's a 24 hour offline hackathon (be prepared to hack all night!)"
}, {
    question: "what should I bring offline to hack?",
    answer: "Bring your laptop, charger, any necessary software tools, and a collaborative spirit."
}, {
    question: "It is my first hackathon, what is something I should know?",
    answer: "Hackathons are not only meant for winning (although that is the goal) but they provide you with so many networking opportunities (our community core members met in hacks too). Win or lose you'll definitely learn something, so come from a learning mindset and you will have fun along the way (we promise 😁)"
}, {
    question: "Will there be enough charging ports available?",
    answer: "We will definitely ensure the availability of charging ports for every team (we've been to enough hacks and we know how that can be a problem 😚)"
}, {
    question: "I'm a beginner, should I apply?",
    answer: "Most definitely, we cannot emphasise how necessary this kind of exposure is. Just make sure you have a good linkedin profile and GitHub"
}, {
    question: "Do I need to bring food, snacks and all?",
    answer: "Nahh, we're your hosts for the duration of the hack, all food and snacks will be on us!"
}, {
    question: "where can I find the details like problem statement, judges and schedule?",
    answer: "You can check the codekshetra website or the devfolio sections"
}, {
    question: "I've already applied but my application status is still pending",
    answer: "Be patient, we've got so many registrations, we are still in the process of accepting teams, just hold on for some time"
}, {
    question: "Is hackathon open for all domain?",
    answer: "Yes, just come over and build anything you want! (There'll be separate problem statements too for extra points)"
}, {
    question: "will our travel expenses be covered?",
    answer: "While we wish we could cover all of you guy's travel expenses, we cannot reimburse for travel costs. Food and accommodation is on us for the duration of the hack 😊"
}];

const CustomAccordionTrigger = React.forwardRef((props: any, ref: any) => (
  <AccordionTrigger 
    {...props}
    className="group flex justify-between items-center py-6 px-4 w-full hover:no-underline text-left"
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
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
                <div className='dark:text-white text-black text-center py-12'>
                    <p>Got more Questions? Reach Out to <Link href='/contact' className='text-squidPink'>VIPs</Link></p>
                </div>
            </main>
        </div>
    );
}