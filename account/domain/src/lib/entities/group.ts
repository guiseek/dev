export const enum Permission {
  '---' = 0b000,
  '--x' = 0b001,
  '-w-' = 0b010,
  '-wx' = 0b011,
  'r--' = 0b100,
  'r-x' = 0b101,
  'rw-' = 0b110,
  'rwx' = 0b111,
}

export interface Group {
  id: string
  name: string
  label: string | null
  permission: number
  createdAt: Date
  updatedAt: Date
}
