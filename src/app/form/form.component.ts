import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  @Output()
  keyEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return this.fb.group({
      words: this.fb.control<string>('', Validators.required),
    });
  }

  invalidField(field: string): boolean {
    return this.form.get(field)!.invalid && this.form.dirty;
  }

  keyPressed(event: any) {
    this.keyEvent.emit(event.target.value);
  }
}
