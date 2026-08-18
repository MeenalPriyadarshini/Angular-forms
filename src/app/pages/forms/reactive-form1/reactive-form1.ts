import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form1.html',
  styleUrl: './reactive-form1.css'
})
export class ReactiveForm1Component {

  form = new FormGroup({

    // General fields (untyped any)
    name: new FormControl<any>(''),
    age: new FormControl<any>(''),
    email: new FormControl<any>('')

  });

}