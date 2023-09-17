import {MatTableDataSource} from '@angular/material/table'
import {SelectionMenu} from '../components'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'

export abstract class ListSelectable<T> {
  abstract selection: SelectionMenu<T>
  abstract dataSource: MatTableDataSource<T>
  
  abstract paginator: MatPaginator
  abstract sort: MatSort

  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected === numRows
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear()
      return
    }

    this.selection.select(...this.dataSource.data)
  }
}
