import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '../../services/auth.service';
import { SignupRequest } from '../../models/signup-request';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly showPassword = signal(false);
  readonly showConfirmPassword = signal(false);

  readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: [
      '',
      [
        Validators.required,
        this.passwordMatchValidator.bind(this)
      ]
    ],
    agreeContinue: [false, Validators.requiredTrue]
  });

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(
      control &&
      control.invalid &&
      control.touched
    );
  }

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword.update(v => !v);
  }

  onSignup(): void {

  this.form.markAllAsTouched();

  if (this.form.invalid) {
    return;
  }

  const signupRequest: SignupRequest = {
    username: this.form.getRawValue().username,
    email: this.form.getRawValue().email,
    password: this.form.getRawValue().password
  };

  this.authService.signup(signupRequest).subscribe({

    next: (response) => {

      alert(response.message);

      if (response.success) {
        this.router.navigate(['/login']);
      }

    },

    error: () => {
      alert('Something went wrong');
    }

  });

}

  private passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    if (!this.form) {
      return null;
    }

    const password =
      this.form?.get('password')?.value;

    const confirm =
      control.value;

    return password === confirm
      ? null
      : { passwordMismatch: true };
  }
}