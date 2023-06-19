import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isSidebarExpanded = false;


  //Handle click events for sidebar navigations
  constructor(private router: Router) {}


  //navigates to relevant page
  navigateTo(page: string){

    this.router.navigateByUrl(`/home/${page}`);
   this.isSidebarExpanded = false; // Close the side navigation after navigation

  }

   toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

}
