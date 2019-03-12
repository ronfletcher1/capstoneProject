import React from 'react';
import AccordionItem from './AccordionItem';
const Accordion = ({rules}) =>{
    return (
        <div className="wrapper">
      <ul className="accordion-list">
        {rules.map((rules, index) => {
          return (
            <li className="accordion-list__item" key ={index}>
              <AccordionItem {...rules} />
            </li>
          );
        })}
      </ul>
    </div>
    )
}
export default Accordion;