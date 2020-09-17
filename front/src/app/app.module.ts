import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule { }
