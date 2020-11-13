import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Task } from './task'

@Component({
  selector: 'dev-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task
  @Output() edit = new EventEmitter<Task>()
  constructor() {}

  ngOnInit(): void {}
}
