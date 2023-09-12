import {Pipe, PipeTransform} from '@angular/core'

type CastToParam =
  | 'string:number'
  | 'number:string'
  | 'array:object'
  | 'object:array'
  | 'object:string'
  | 'array:string'

// type CastToParam = `${CastToParamType}:${CastToParamType}`

@Pipe({name: 'castTo', pure: true})
export class CastToPipe implements PipeTransform {
  transform<T>(value: T, config: CastToParam) {
    switch (config) {
      case 'array:object':
        return Object.fromEntries(
          value as Iterable<readonly [PropertyKey, unknown]>
        )
      case 'object:array':
        return Array.from(value as Iterable<T>)
      case 'number:string':
        return (value as number).toString()
      case 'string:number':
        return +(value as string)
      case 'object:string':
      case 'array:string':
        return JSON.stringify(value)
      default:
        return value
    }
  }
}
