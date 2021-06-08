import React from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 'inherit',
      height: '100vh',
    },
  }),
)
type Props = {
  content: React.ReactElement
  open: boolean
}
export default function SideComponent(props: Props) {
  const classes = useStyles()
  const { content, open } = props
  const dom = open ? <Box className={classes.root}>{content}</Box> : null

  return <>{dom}</>
}
SideComponent.defaultProps = {}
