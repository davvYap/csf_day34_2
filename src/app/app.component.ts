import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'observable';

  keyPressed$!: Observable<string>;
  keyPressedForDisplayComp$!: Observable<string>;

  @ViewChild(FormComponent)
  form!: FormComponent;

  ngAfterViewInit() {
    this.keyPressed$ = this.form.keyEvent;
    this.keyPressedForDisplayComp$ = this.form.keyEvent.pipe(debounceTime(500));
  }
}
