import { Component, OnInit } from '@angular/core'
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop'
import { Task } from './task/task'
import { MatDialog } from '@angular/material/dialog'
import {
  TaskDialogComponent,
  TaskDialogResult,
} from './task-dialog/task-dialog.component'
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs'

const getObservable = <T = any>(collection: AngularFirestoreCollection<T>) => {
  const subject = new BehaviorSubject<T[]>([])

  collection.valueChanges({ idField: 'id' }).subscribe((val: T[]) => {
    subject.next(val)
  })
  return subject
}

@Component({
  selector: 'meet-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  todo = getObservable<Task>(this.store.collection('todo'))
  inProgress = getObservable<Task>(this.store.collection('inProgress'))
  done = getObservable<Task>(this.store.collection('done'))

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<Task[] | any[]>): void {
    if (event.previousContainer === event.container) {
      return
    }
    const item = event.previousContainer.data[event.previousIndex]
    this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item),
      ])
      return promise
    })
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    })
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (result.delete) {
        this.store.collection(list).doc(task.id).delete()
      } else {
        this.store.collection(list).doc(task.id).update(task)
      }
    })
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        enableDelete: false,
        task: {},
      },
    })
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) =>
        this.store.collection('todo').add(result.task)
      )
  }
}
