import { Component } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form: FormGroup = this.formBuilder.group({
    from_name: '',
    to_name: 'Tiffany Yang',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  async sendEmail() {
    emailjs.init('sZATFs21uCZW2o6Vn');
    let response = await emailjs.send('service_avr1vop', 'template_89gh63k', {
      from_name: this.form.value.form_name,
      to_name: 'Admin',
      from_email: this.form.value.form_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });
    alert('Message has been send.');
    this.form.reset();
  }
}
