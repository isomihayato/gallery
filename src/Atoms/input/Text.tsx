import React from 'react'
import TextField from '@material-ui/core/TextField'

type Props = {
  label: string
  autoComplete: string
  clickHandler: (event: React.MouseEvent<HTMLInputElement>) => void
}

export function TextComponent(props: Props) {
  const { label, autoComplete, clickHandler } = props
  return (
    <>
      <TextField
        id={`text-input-${label}`}
        label={label}
        type="text"
        autoComplete={autoComplete}
        onClick={clickHandler}
      />
    </>
  )
}

TextComponent.defaultProps = {}
