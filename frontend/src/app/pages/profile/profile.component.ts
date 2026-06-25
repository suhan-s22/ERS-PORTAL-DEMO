import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm: FormGroup;

  profileImage =
    'https://cdn-icons-png.flaticon.com/512/847/847969.png';

  constructor(
    private fb: FormBuilder
  ) {

    this.profileForm = this.fb.group({
      employeeId: ['suhan123'],
      name: ['Suhan S'],
      phone: [
        '1234567890',
        Validators.required
      ],
      email: [
        'suhan.2205@gmail.com',
        [
          Validators.required,
          Validators.email
        ]
      ],
      designation: ['Intern']
    });

  }

  save(): void {

    if (this.profileForm.invalid) {

      alert(
        'Please enter valid profile details.'
      );

      return;
    }

    alert(
      'Profile Updated Successfully'
    );

  }

  uploadImage(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.profileImage =
        reader.result as string;
    };

    reader.readAsDataURL(file);

  }

}