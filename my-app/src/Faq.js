import React, { useState } from 'react';
import Style from './component/Faq.css';

function AccordionItem({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
   
    <div className="accordion-item">
      <button
        aria-expanded={isExpanded ? 'true' : 'false'}
        onClick={toggleAccordion}
      >
        <span className="accordion-title">{title}</span>
        <span className="icon" aria-hidden="true"></span>
      </button>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
 
  );
}

function Accordion() {
  const items = [
    { id: 1, title: 'Why is the moon sometimes out during the day?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { id: 2, title: 'Why is the sky blue?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { id: 3, title: 'Will we ever discover aliens?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { id: 4, title: 'How much does the Earth weigh?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { id: 5, title: 'How do airplanes stay up?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' }
  ];

  return (
    <section className='top'>
    <div className="container">
      <h2 className='text-center'>Frequently Asked Questions</h2>
      <div className="accordion py-4">
        {items.map(item => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={<p>{item.content}</p>}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default Accordion;
