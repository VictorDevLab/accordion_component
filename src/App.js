import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem faqObj={faq} index={i} />
      ))}
    </div>
  );
}

function AccordionItem({ faqObj, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="item">
      <p className="number">0{index + 1}</p>
      <p className="title">{faqObj.title}</p>
      <p className="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && (
        <div className="content-box">
          <p>{faqObj.text}</p>
        </div>
      )}
    </div>
  );
}
