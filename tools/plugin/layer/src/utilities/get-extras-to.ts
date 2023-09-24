import {names} from '@nx/devkit'

type Property<T extends string> = `${T}Property`
type Class<T extends string> = `${T}Class`
type Kind<T extends string> = `${T}`
type Key<T extends string> = {[P in T]: string}

export function getExtrasTo<N extends string, K extends string>(
  name: N,
  kind: K
) {
  const options = names(name)
  return {
    [`${kind}Property`]: options.propertyName,
    [`${kind}Class`]: options.className,
    [kind]: options.fileName,
  } as Key<Property<K>> & Key<Class<K>> & Key<Kind<K>>
}
