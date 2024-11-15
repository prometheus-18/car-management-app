// login.component.ts

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import necessary classes
// import { AuthService } from '../auth.service'; // Make sure the correct path
import { Router } from '@angular/router'; // Make sure the correct path
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports:[FormsModule,
    ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Declare the form group
  loginForm: any;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router,private fb:FormBuilder) {
    // Initialize the form group and its controls
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),  // Username is required
      password: new FormControl('', [Validators.required]),  // Password is required
    });
  }

  // Function to handle form submission
  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);  // Redirect to the dashboard after successful login
        },
        (error) => {
          this.errorMessage = 'Invalid credentials. Please try again.'; // Handle errors
        }
      );
    } else {
      this.errorMessage = 'Both username and password are required.';
    }
  }
}
