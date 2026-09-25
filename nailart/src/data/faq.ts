export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "duration",
    question: "How long does an appointment take?",
    answer: "Typically 60–120 minutes depending on the service. Custom nail art and extensions may take longer.",
  },
  {
    id: "appointment",
    question: "Do I need to make an appointment?",
    answer: "Appointments are recommended so we can prepare your slot and preferred nail artist. Walk-ins are subject to availability.",
  },
  {
    id: "own-design",
    question: "Can I bring my own nail design?",
    answer: "Yes. Customers can send reference designs via WhatsApp before the appointment and we will confirm feasibility.",
  },
  {
    id: "gel-duration",
    question: "How long does gel polish last?",
    answer: "Typically around 2–3 weeks with proper care. We also provide aftercare tips to keep them glossy.",
  },
  {
    id: "cancel",
    question: "Can I cancel my appointment?",
    answer: "Yes — please contact the business as early as possible via WhatsApp so we can reschedule or free up the slot.",
  },
];
