/**
 * Button component
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

export interface ButtonProps {
  label: string;
  type?: string;
  isPressed?: boolean;
  styles?: React.CSSProperties;
}

function Button(props: ButtonProps) {
  const [setPressed, setButtonState] = useState(!!props.isPressed);

  function toggleButton() {
    setButtonState(!setPressed);
  }

  return (
    <button className='arc-button'
      onClick={toggleButton}
      css={css`
        box-sizing: border-box;
        background: none;
        border: 1px solid black;
        cursor: pointer;
        font-size: 2rem;
        padding: 15px;
        :hover {
          text-decoration: underline;
        }
      `}
    >
    {props.label}
    </button>
  );
}

export default Button;
