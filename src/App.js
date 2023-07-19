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
  const [currentNum,setCurrentNum]=useState(null);

  function handleToggle(number){
    if(currentNum!==number){ setCurrentNum(number); return; }
    setCurrentNum(null);
  }

  return (
    <div className="accordion">
      {data.map((faq,index)=><AccordionItem key={index} currentNum={currentNum} number={index+1} title={faq.title} onToggle={handleToggle}>{faq.text}</AccordionItem>)}
      <AccordionItem currentNum={currentNum} number={22} title='Test title' onToggle={handleToggle}>
        <p>This is the test accordion item : </p>
        <ul>
          <li>Rendering using children</li>
          <li>Will have to use the children prop</li>
          <li>Obla dibla da yoohoo !</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({currentNum,number,title,onToggle,children}){
  const isOpen=currentNum===number;

  return (
    <div className={`item ${isOpen?'open':''}`} onClick={()=>onToggle(number)}>
      <p className="number">{number<9?`0${number}`:number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen?'-':'+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}