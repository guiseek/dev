interface JwtVerifyOptions {
  secret?: string
  publicKey?: string
}

export abstract class JwtService {
  abstract sign<T>(value: T, options?: JwtVerifyOptions): string
  abstract verify<T extends object>(
    token: string,
    options?: JwtVerifyOptions
  ): T
}
