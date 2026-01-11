import { useState } from 'react';
import { useFormStore } from "../store/useFormStore";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { id: 1, question: 'What is StreamVibe?', answer: 'StreamVibe is a streaming service that offers movies, TV shows, and documentaries.' },
  { id: 2, question: 'How much does StreamVibe cost?', answer: 'Plans start from $9.99/month for basic and $15.99 for premium with 4K.' },
  { id: 3, question: 'What content is available on StreamVibe?', answer: 'Over 10,000 movies, 500+ TV shows, documentaries, and live sports.' },
  { id: 4, question: 'How can I contact StreamVibe customer support?', answer: 'Use the form below, email support@streamvibe.com or live chat 24/7.' },
  { id: 5, question: 'What is StreamVibe Pro?', answer: 'Ad-free experience, 4K streaming, and 4 simultaneous streams.' },
  { id: 6, question: 'How do I contact StreamVibe?', answer: 'Fill the support form below or use live chat in the app.' },
  { id: 7, question: 'What are the StreamVibe payment methods?', answer: 'Credit cards, PayPal, Apple Pay, Google Pay, and bank transfer.' },
  { id: 8, question: 'Can I download StreamVibe?', answer: 'Yes, download movies and shows for offline viewing on mobile devices.' },
];

export default function Support() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { setField, submitForm, errors } = useFormStore();

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-16 lg:px-200">

      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to our support page!</h1>
        
        <div className="grid grid-cols-2 gap-6 max-w-2xl">
          <div>
            <input
              className="p-4 bg-neutral-800/80 border border-neutral-700 rounded-xl w-full focus:outline-none focus:border-red-500/50"
              placeholder="First Name"
              onChange={(e) => setField("firstName", e.target.value)}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
          </div>

          <div>
            <input
              className="p-4 bg-neutral-800/80 border border-neutral-700 rounded-xl w-full focus:outline-none focus:border-red-500/50"
              placeholder="Last Name"
              onChange={(e) => setField("lastName", e.target.value)}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
          </div>

          <div className="col-span-2">
            <input
              className="p-4 bg-neutral-800/80 border border-neutral-700 rounded-xl w-full focus:outline-none focus:border-red-500/50"
              placeholder="Email"
              onChange={(e) => setField("email", e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>

          <div className="col-span-2">
            <input
              className="p-4 bg-neutral-800/80 border border-neutral-700 rounded-xl w-full focus:outline-none focus:border-red-500/50"
              placeholder="Phone Number"
              onChange={(e) => setField("phone", e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
          </div>

          <div className="col-span-2">
            <textarea
              className="p-4 h-32 bg-neutral-800/80 border border-neutral-700 rounded-xl w-full focus:outline-none focus:border-red-500/50 resize-vertical"
              placeholder="Message"
              onChange={(e) => setField("message", e.target.value)}
            />
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>

          <button className="p-4 rounded-xl col-span-2 font-medium hover:shadow-lg hover:scale-105 transition-transform duration-300" onClick={submitForm}>
            Send Message
          </button>
        </div>
      </div>

     
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <button className="hover:scale-105 transition-transform duration-300 px-6 py-2 rounded-full font-medium whitespace-nowrap">
            Ask a Question
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            {faqs.slice(0, 4).map((item) => (
              <FAQCard key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFAQ(item.id)} />
            ))}
          </div>
          <div className="space-y-3">
            {faqs.slice(4).map((item) => (
              <FAQCard key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFAQ(item.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQCardProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCard: React.FC<FAQCardProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="group bg-neutral-800/30 border border-neutral-700/50 rounded-xl hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-5 pl-6 flex items-center justify-between text-left hover:bg-neutral-800/30 transition-all duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-neutral-700/80 group-hover:bg-neutral-600 rounded-lg flex items-center justify-center text-sm font-bold text-white/80 group-hover:text-white transition-all">
            0{item.id}
          </div>
          <span className="text-base font-medium flex-1 pr-4">{item.question}</span>
        </div>
        <span className={`text-xl font-bold transition-transform duration-200 ${isOpen ? 'rotate-45 scale-110' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-32 pt-4 pb-6 px-6 border-t border-neutral-700/50' : 'max-h-0 p-0'}`}>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};
