'use client'
import {
  useId,
  useState,
  useEffect,
  type FunctionComponent,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from 'react'

export type RadioOption = {
  value: string
  label?: string
}

export type RadioGroupParameters = {
  options: Array<RadioOption>
  value?: RadioOption
  label: string
  onChange?: (value: RadioOption) => void
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onChange'
>

export const RadioGroupComponent: FunctionComponent<RadioGroupParameters> = ({
  options = [],
  value,
  label,
  onChange,
  ...divProps
}) => {
  const id = useId()
  const [selected, setSelected] = useState<RadioOption | undefined>(value)

  useEffect(() => {
    setSelected(value)
  }, [value])

  const handleChange = (option: RadioOption) => {
    setSelected(option)
    if (onChange) onChange(option)
  }

  return (
    <div {...divProps}>
      <h2 className="h3 mb-2 mt-0 font-medium">{label}</h2>
      <div>
        {options.map(option => {
          const checked = selected?.value === option.value
          return (
            <label
              key={id + option.value}
              className="cursor-pointer flex items-center rounded-lg mb-4 gap-2 font-normal"
            >
              <input
                type="radio"
                name={id}
                value={option.value}
                checked={checked}
                onChange={() => handleChange(option)}
                className="form-radio h-4 w-4"
              />
              <span>{option.label ?? option.value}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default RadioGroupComponent
