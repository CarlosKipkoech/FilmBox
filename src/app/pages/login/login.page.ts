import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logoImagePath = 'assets/images/logo.png';
  loginImagePath = 'assets/images/loginimg.png'

  loginStatus: string = ''; // Possible values: 'success', 'failure', ''
  errorMessage: string = '';

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.initializeStorage();
  }

  async initializeStorage() {
    await this.storage.create();
  }
  

  async login(email: string, password: string) {
    // Mock server submission simulation
    if (email === 'yourname@gmail.com' && password === 'Password.0707') {
      // Save email to local storage
      await this.storage.set('email', email);
      // Navigate to the dashboard
      this.router.navigate(['/home/latest-movies']);
      this.loginStatus = 'success';
    } else {
      // Display an error message and update login status on failure
      this.loginStatus = 'failure';
      this.errorMessage = 'Invalid credentials';
    }
  }

}
