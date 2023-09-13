import {
  Catch,
  HttpStatus,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common'
import {HttpAdapterHost} from '@nestjs/core'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const {httpAdapter} = this.httpAdapterHost

    const ctx = host.switchToHttp()

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    const path = httpAdapter.getRequestUrl(ctx.getRequest())

    const timestamp = new Date().toISOString()

    httpAdapter.reply(
      ctx.getResponse(),
      {statusCode, message: exception.message, timestamp, path},
      statusCode
    )
  }
}
