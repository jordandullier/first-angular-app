import {Component, computed, EventEmitter, Input, Output} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [TaskComponent, NewTaskComponent],
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isAddingTask = false
  private tasksService: TasksService

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask = false
  }

}