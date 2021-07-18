import { useCallback, useRef } from "react"
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  number?: boolean;
  mask?: string;
}

export const Input = ({ name, label, mask = '', number = false, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const maxlenght = mask.length > 0 ? mask.length : undefined;

  const handleApplyMask = useCallback((value: string) => {
    if (mask) {
      const splitedMask = mask.split('');
      const splitedValue = value.split('');

      const maskedValue = splitedValue.map((digit, index) => {
        const maskDigit = splitedMask[index];
        if (digit === maskDigit) {
          return digit;
        }

        if (number) {
          if (!digit.match(/^[0-9]$/)) {
            return '';
          }
        }

        if (maskDigit === '#' && !number) {
          return digit;
        }
        if (maskDigit === '9') {
          return digit.match(/^[0-9]$/) ? digit : '';
        }

        if (mask.length === index + 1) {
          return maskDigit;
        }
        return maskDigit + digit;
      })

      if (inputRef.current) {
        inputRef.current.value = maskedValue.join('');
      }
    } else {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    }
  }, [mask, number]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input ref={inputRef} maxLength={maxlenght} type="text" name={name} id={name} {...rest} onChangeCapture={(e) => handleApplyMask(e.currentTarget.value)} />
    </>
  )
}