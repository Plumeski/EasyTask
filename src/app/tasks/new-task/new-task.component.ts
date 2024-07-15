import { Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true})userId!:string;
  @Output()cancel = new EventEmitter<void>()
  @Output()add = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary ='' ;
  enteredDate = '';
private  tasksService =inject(TasksService)

  onCancel(){
    this.cancel.emit();  
  }

  onSubmit(){
    this.tasksService.addTask({
    title:this.enteredTitle,
    summary:this.enteredDate,
    date:this.enteredDate
    },
    this.userId
    );
  }
}

