import {Observable} from 'rxjs'

export abstract class UseCase<I, O> {
  abstract execute(input: I): O | Promise<O> | Observable<O>
}
