import React from 'react'
import TextField from '@material-ui/core/TextField'

type Props = {
  label: string
  autoComplete: string
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function NumberComponent(props: Props) {
  const { label, autoComplete, changeHandler } = props
  return (
    <>
      <TextField
        id={`text-input-${label}`}
        label={label}
        type="type"
        autoComplete={autoComplete}
        onChange={changeHandler}
      />
    </>
  )
}
NumberComponent.defaultProps = {}
