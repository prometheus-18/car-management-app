import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    // this.authService.signup(this.username, this.password).subscribe(
      // () => {
        // this.successMessage = 'Signup successful! Please log in.';
        // setTimeout(() => this.router.navigate(['/login']), 2000);
      // },
      // (error) => {
        // this.errorMessage = 'Signup failed. Try again.';
      // }
    // );
  // }
}
}
