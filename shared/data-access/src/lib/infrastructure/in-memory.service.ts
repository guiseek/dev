import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import {Observable, of} from 'rxjs'

export class InMemoryService<T extends object> implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo, ...items: T[]): Observable<T[]> {
    console.log(reqInfo)
    return of([...items])
  }

  genId() {
    return crypto.randomUUID()
  }
}
