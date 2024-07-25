import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule,SharedModule]
})
export class TasksModule{}
