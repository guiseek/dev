import {EnvConfig, EnvInject, token} from '@dev/shared-util-data'

const ENV_CONFIG_TOKEN = token('env-config')

export function getEnvConfigToken() {
  return ENV_CONFIG_TOKEN
}

export function provideEnv<T extends EnvInject<object>>(config: EnvConfig<T>) {
  return {
    provide: getEnvConfigToken(),
    useValue: config,
  }
}
