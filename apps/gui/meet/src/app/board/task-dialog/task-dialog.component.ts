import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, Inject } from '@angular/core'
import { Task } from '../task/task'

@Component({
  selector: 'meet-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent {
  backupTask: Partial<Task> = { ...this.data.task }

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  cancel(): void {
    this.data.task.title = this.backupTask.title
    this.data.task.description = this.backupTask.description
    this.dialogRef.close(this.data)
  }
}

export interface TaskDialogData {
  task: Partial<Task>
  enableDelete: boolean
}

export interface TaskDialogResult {
  task: Task
  delete?: boolean
}
