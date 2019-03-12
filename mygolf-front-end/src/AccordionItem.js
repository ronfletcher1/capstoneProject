import React, { Component } from 'react';

class AccordionItem extends Component {
  state = {
    opened: false
  };

  render() {
    const {
      props: { title, content },
      state: { opened }
    } = this;
    const onClick = () => {
      this.setState({ opened: !opened });
    };
    const className = `accordion-item ${opened && 'accordion-item--opened'}`;
    return (
      <div className={className} onClick={onClick}>
        <div className="accordion-item__line">
          <h4 className="accordion-item__title">{title}</h4>
          <span className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">
            <p className="accordion-item__paragraph">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
