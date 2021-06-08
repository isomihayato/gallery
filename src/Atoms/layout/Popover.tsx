import Popover from '@material-ui/core/Popover'

type Props = {
  anchorEl: HTMLElement
  content: HTMLElement
  open: boolean
  id: string
  handleClose:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined
}

export function PopoverComponent(props: Props) {
  const { anchorEl, content, open, id, handleClose } = props
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {content}
      </Popover>
    </>
  )
}
PopoverComponent.defaultProps = {}
