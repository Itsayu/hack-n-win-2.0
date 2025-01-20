import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaqItems } from "@/types"


export default function FaqsPage() {

    const Faqs: FaqItems[] = [{
        question: "what is the team size",
        answer: "team can be of 3-4 members and participants can also join individually"
    }, {
        question: "what is the team size",
        answer: "team can be of 3-4 members and participants can also join individually"
    }, {
        question: "what is the team size",
        answer: "team can be of 3-4 members and participants can also join individually"
    }, {
        question: "what is the team size",
        answer: "team can be of 3-4 members and participants can also join individually"
    }, {
        question: "what is the team size",
        answer: "team can be of 3-4 members and participants can also join individually"
    },]


    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
            <div className='sm:grid grid-cols-6'>
                <h1 className="text-4xl font-bold dark:text-squidPink text-squidPink py-4 text-center col-span-2">FAQs/</h1>
                <div className="col-span-4 dark:text-white text-black max-w-full">
                    {Faqs.map((props, i) => {
                        return (
                            <div key={i} className="backdrop-blur-md dark:border-squidTeal border-squidPink px-4 border-[2px] rounded-md mt-5">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="md:font-bold font-semibold md:text-[26px] text-[23px]">{props.question}</AccordionTrigger>
                                        <AccordionContent>
                                            {props.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}