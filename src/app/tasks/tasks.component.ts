import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {type newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required:true})userId!: string;
  @Input({ required: true }) name!: string;
  isAdditionTask =  false;
 
 constructor(private tasksService:TasksService) {} 

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
   
  }
  onStartAddTask() {
    this.isAdditionTask = true;
  }
  onCancelAddTask(){
    this.isAdditionTask = false;
  }
  onAddTask(taskData:newTaskData){
    
    this.isAdditionTask = false;
  }

}