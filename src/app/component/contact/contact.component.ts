import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  FormData?: FormGroup;
  constructor(private builder: FormBuilder) {}
  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }
}