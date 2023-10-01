import {TypedFormGroup} from '@dev/shared-ui-forms'
import {FormControl} from '@angular/forms'

interface Permissions {
  r: boolean
  w: boolean
  x: boolean
}

const base: Record<string, number> = {r: 4, w: 2, x: 1}

export function mapToPermission(permissions: Partial<Permissions>) {
  return Object.entries(permissions)
    .filter(([, v]) => v)
    .map(([k]) => base[k])
    .reduce((p, c) => p + c, 0)
}

export function mapFromPermission(value: number) {
  switch (value) {
    case 1:
      return {r: false, w: false, x: true}
    case 2:
      return {r: false, w: true, x: false}
    case 3:
      return {r: false, w: true, x: false}
    case 4:
      return {r: true, w: false, x: false}
    case 5:
      return {r: true, w: false, x: true}
    case 6:
      return {r: true, w: true, x: false}
    case 7:
      return {r: true, w: true, x: true}
    default:
      return {r: false, w: false, x: false}
  }
}

export class PermissionForm extends TypedFormGroup<Permissions> {
  constructor() {
    super({
      r: new FormControl(false, {
        nonNullable: true,
      }),
      w: new FormControl(false, {
        nonNullable: true,
      }),
      x: new FormControl(false, {
        nonNullable: true,
      }),
    })
  }
}
