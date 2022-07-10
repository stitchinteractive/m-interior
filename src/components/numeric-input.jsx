import * as React from "react"
import { wrap, increment, decrement, input } from "./numeric-input.module.css"
export function NumericInput({
  onIncrement,
  onDecrement,
  className,
  disabled,
  ...props
}) {
  return (
    <div className={wrap}>
      <input
        disabled={disabled}
        type="numeric"
        className={[input, className].join(" ")}
        {...props}
      />
      <button
        disabled={disabled}
        className={increment}
        aria-label="Increment"
        onClick={onIncrement}
      >
        <span>
          <img src="./icons/btn_plus.png" alt="+" />
        </span>
      </button>
      <button
        disabled={disabled}
        className={decrement}
        aria-label="Decrement"
        onClick={onDecrement}
      >
        <span>
          <img src="./icons/btn_minus.png" alt="-" />
        </span>
      </button>
    </div>
  )
}
