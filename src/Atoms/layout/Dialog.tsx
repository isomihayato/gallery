import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

type Props = {
  open: boolean
  content: HTMLElement
  dialogTitle: string
  closeHandler:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined
}

export function DialogComponent(props: Props) {
  const { open, content, dialogTitle, closeHandler } = props
  return (
    <>
      <Dialog onClose={closeHandler} open={open} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
        {content}
      </Dialog>
    </>
  )
}
DialogComponent.defaultProps = {}
