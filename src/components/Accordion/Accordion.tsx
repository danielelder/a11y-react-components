/**
 * Accordion component
 *
 * Emotion (CSS-in-JS)
 * https://emotion.sh/docs/css-prop
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';

export interface AccordionProps {
  heading: string;
  children: React.ReactNode;
  isToggled?: boolean;
  styles?: React.CSSProperties;
}

function Accordion(props: AccordionProps) {
  const [setPressed, setButtonState] = useState(!!props.isToggled);
  const [setHidden, setContentState] = useState(!props.isToggled);

  function toggleAccordion() {
    setButtonState(!setPressed);
    setContentState(!setHidden);
  }

  return (
    <div className='react-accordion' style={props.styles}
      css={css`
        box-sizing: border-box;
      `}
    >
    <button aria-pressed={setPressed} onClick={toggleAccordion}>
        <h2>{props.heading}</h2>
     </button>
      <div aria-hidden={setHidden}>
        {props.children}
      </div>
    </div>
  );
}

export default Accordion;
