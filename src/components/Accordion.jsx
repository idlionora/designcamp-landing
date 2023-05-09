import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";


const IconAccordion = () => {
    return (
		<svg
			width="14"
			height="13"
			viewBox="0 0 14 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
            transform="rotate(45)"
		>
			<path
				d="M12.5 12L1.50006 1M1.5 12L12.4999 1"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

const mockAnswer = "Yes, you can work on the DesignCamp course at your own pace and on your own schedule. The course is flexible and you can access the learning materials and resources whenever it is convenient for you. There are no specific schedules or deadlines to follow, although the program does provide you with a structured learning plan with clear objectives and deadlines to help keep you on track."

const homeAccordionDatas = [
	{
		id: 1,
		question: 'What is graphic design?',
		answer: mockAnswer,
	},
	{
		id: 2,
		question: 'What are the career opportunities in graphic design?',
		answer: mockAnswer,
	},
	{
		id: 3,
		question: 'Do I need any previous experience in design to enroll in DesignCamp',
		answer: mockAnswer,
	},
	{
		id: 4,
		question: 'How does DesignCamp differ from other graphic design courses?',
		answer: 'DesignCamp is different from other graphic design courses because it offers a structured and comprehensive learning path, mentorship and support from experienced instructors and peers, high-quality learning resources, and hands-on practice opportunities through real-world projects and design challenges. This provides students with a strong foundation of knowledge and skills, personalized attention and feedback, effective learning tools, and valuable experience to showcase their skills to potential employers.',
	},
	{
		id: 5,
		question: 'What software will I need to complete the course?',
		answer: mockAnswer,
	},
	{
		id: 6,
		question: 'Will I have access to a mentor during the course?',
		answer: mockAnswer,
	},
	{
		id: 7,
		question: 'Will I receive a certificate of completion?',
		answer: mockAnswer,
	},
	{
		id: 8,
		question: 'Can I enroll in individual courses or must I complete the entire program?',
		answer: mockAnswer,
	},
	{
		id: 9,
		question: 'Is the tuition fee refundable?',
		answer: mockAnswer,
	},
	{
		id: 10,
		question: 'How do I access the learning materials and resources?',
		answer: mockAnswer,
	},
	{
		id: 11,
		question:
			'Can I work on the course on my own schedule or is there a specific schedule to follow?',
		answer: mockAnswer,
	},
	{
		id: 12,
		question: 'Can I contact other students in the program?',
		answer: mockAnswer,
	},
	{
		id: 13,
		question: 'How can I get more information about DesignCamp and the courses offered?',
		answer: mockAnswer,
	},
	{
		id: 14,
		question: 'What payment methods are accepted for DesignCamp?',
		answer: mockAnswer,
	},
	{
		id: 15,
		question: 'Can I take DesignCamp course offline?',
		answer: mockAnswer,
	},
	{
		id: 16,
		question: 'Is there any hands-on experience or internships included in the course?',
		answer: mockAnswer,
	},
	{
		id: 17,
		question: 'How do I get feedback on my work during the courses?',
		answer: mockAnswer,
	},
];

const HomeAccordionContent = ({id = 99, question = 'Insert question here.', answer = 'Insert answer here.'}) => {
return (
	<Accordion
		className="border-solid border-0 border-b border-black before:hidden"
		disableGutters
		elevation={0}
		square
		key={`accordion-${id}`}
	>
		<AccordionSummary className="home-accordion-summary"
			expandIcon={<IconAccordion />}
			aria-controls={`panel${id}-content`}
			id={`panel${id}-header`}
		>
			<p className="font-semibold mr-3">{question}</p>
		</AccordionSummary>
		<AccordionDetails>
			<p className="leading-normal">{answer}</p>
		</AccordionDetails>
	</Accordion>
);
}

const HomeAccordion = () => {
    return (
        <div id='faq-accordion-container' className="w-full h-[60vh] lg:h-[833px] overflow-hidden relative my-0 mx-auto">
            <div id='faq-accordion-frame' className="hide-scrollbar overflow-y-scroll h-full">
                {homeAccordionDatas.map(({id, question, answer})=> {return (<HomeAccordionContent key={`faq-accordion-${id}`}id={id} question={question} answer={answer}/>)})}                
            </div>
        </div>
    )
}

export default HomeAccordion
