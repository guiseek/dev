import {MatPaginatorIntl} from '@angular/material/paginator'
import {Subject} from 'rxjs'

export class PaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>()
  itemsPerPageLabel = `Itens por página`
  nextPageLabel = `Próxima página`
  previousPageLabel: `Página anterior`
  firstPageLabel = `Primeira página`
  lastPageLabel = `Última página`

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0) return `Página 1 de 1`

    const amountPages = Math.ceil(length / pageSize)

    return `Página ${page + 1} de ${amountPages}`
  }
}
