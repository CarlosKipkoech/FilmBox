import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isSidebarExpanded = false;
  email!: string;
  logoImagePath = 'assets/images/logo.png';
  accountProfileImagePath = 'assets/images/avatar.webp'
  showAccountPopupFlag: boolean = false;


  async ngOnInit() {
    await this.storage.create(); // Initialize storage
  
    // Retrieve the email from local storage
    this.email = await this.storage.get('email');
  }


  //Handle click events for sidebar navigations
  constructor(private router: Router,private storage: Storage) {}


  //navigates to relevant page
  navigateTo(page: string){

    this.router.navigateByUrl(`/home/${page}`);
   this.isSidebarExpanded = false; // Close the side navigation after navigation

  }



  showAccountPopup(): void {
    this.showAccountPopupFlag = true;
  }

  hideAccountPopup(): void {
    this.showAccountPopupFlag = false;
  }

}
