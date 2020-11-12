export interface DialogConfig<T = any> {
  backdropClass: string
  header?: DialogHeader
  data?: T
  width?: string
  height?: string
  disableClose: boolean
  panelClass: string | string[]
  hasBackdrop?: boolean
  draggable?: boolean
}

export interface DialogHeader {
  title: string
  subtitle?: string,
  color?: 'primary' | 'accent'
}
export interface DialogPosition {
  top?: string
  bottom?: string
  left?: string
  right?: string
}