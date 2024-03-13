import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
import { ConstructionComponent } from './construction/construction.component'

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aboutme';
}

