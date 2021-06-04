import React from 'react'
import Select from '@material-ui/core/Select'

type Props = {
  inputPropsName: string
  value: string
  values: [{ key: string | number; val: string | number }]
  handleChange:
    | ((
        event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
        child: React.ReactNode,
      ) => void)
    | undefined
}

export function SelectComponent(props: Props) {
  const { inputPropsName, handleChange, value, values } = props
  return (
    <>
      <Select
        native
        value={value}
        onChange={handleChange}
        inputProps={{
          name: { inputPropsName },
          id: `select-${inputPropsName}-id`,
        }}
      >
        <option aria-label="None" value="">
          選択してください
        </option>
        {values.map((val) => {
          ;<option value={val.key}>{val.val}</option>
        })}
      </Select>
    </>
  )
}
SelectComponent.defaultProps = {}
