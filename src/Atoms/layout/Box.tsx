import React from 'react'
import Box from '@material-ui/core/Box'

type Props = {
  border: string
  borderColor: string
  color: string
  content: string
  display: string
  className: string
  id: string
  width: number
  height: number
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

export function TextComponent(props: Props) {
  const {
    border,
    borderColor,
    color,
    content,
    display,
    className,
    width,
    height,
    id,
    handleClick,
  } = props
  return (
    <>
      <Box
        border={border}
        borderColor={borderColor}
        color={color}
        display={display}
        className={className}
        p={1}
        id={id}
        width={width}
        height={height}
        onClick={handleClick}
      >
        {content}
      </Box>
    </>
  )
}
TextComponent.defaultProps = {
  border: 2,
  borderColor: 'black',
  display: 'inline-block',
  content: '',
}
