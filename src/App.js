import { useState } from "react";

const faqs = [
  {
    num: 1,
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    num: 2,
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    num: 3,
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App(){
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}){
  return (
    <div className="accordion">
      {data.map((faq,index)=><AccordionItem key={index} number={index+1} title={faq.title} text={faq.text} />)}
    </div>
  );
}

function AccordionItem({number,title,text}){
  const [isOpen,setIsOpen]=useState(false);

  function handleToggle(){
    setIsOpen(isOpen=>!isOpen);
  }

  return (
    <div className={`item ${isOpen?'open':''}`} onClick={handleToggle}>
      <p className="number">{number<9?`0${number}`:number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen?'-':'+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}