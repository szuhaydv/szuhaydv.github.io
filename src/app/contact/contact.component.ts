import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  firstName = ''
  lastName = ''
  email = ''
  message = ''

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm("service_27icfrd", "template_91nabuj", e.target as HTMLFormElement, {
        publicKey: 'tUiOAKB_sM3BPCWwg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}