import {
  Content,
  ContentService,
  CreateContent,
  UpdateContent,
} from '@dev/content-domain'
import {FindParams, Paged, Where} from '@dev/shared-util-data'
import {Http} from '@dev/shared-data-access'
import {Observable} from 'rxjs'

export class ContentServiceImpl implements ContentService {
  constructor(private readonly http: Http) {}

  find({options}: FindParams<Content> = {options: {}}) {
    return this.http.get<Paged<Content>>('/api/content', {params: options})
  }

  filter(
    {where = {}, options}: FindParams<Content> = {where: {}, options: {}}
  ) {
    return this.http.post<Paged<Content>, Where<Content>>(
      '/api/content/filter',
      where,
      {params: options}
    )
  }

  create(value: CreateContent) {
    return this.http.post<Content, CreateContent>('/api/content', value)
  }

  update(value: UpdateContent) {
    return this.http.put<Content, UpdateContent>('/api/content', value)
  }

  remove(id: string) {
    return this.http.delete<Content>(`/api/content/${id}`)
  }

  findOne(value: string): Observable<Content | null> {
    return this.http.delete<Content>(`/api/content/${value}`)
  }
}
