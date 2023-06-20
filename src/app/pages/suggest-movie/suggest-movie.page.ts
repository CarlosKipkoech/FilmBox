import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-movie',
  templateUrl: './suggest-movie.page.html',
  styleUrls: ['./suggest-movie.page.scss'],
})
export class SuggestMoviePage implements OnInit {


  showForm: boolean = false;
  movieType!: string;
  reason!: string;
  selectedImage!: File;
  suggestedMovies: any[] = [];

  constructor() { }

  ngOnInit() {
    // Retrieve the suggested movies data from localStorage
    const storedData = localStorage.getItem('suggestedMovies');
    if (storedData) {
      this.suggestedMovies = JSON.parse(storedData);
    }
  }

  openForm(event: Event) {
    event.stopPropagation();
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  handleFileInput(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedImage = files[0];
    }
  }

  submitForm() {
    // Create an object to store the form data
    const formData = {
      movieType: this.movieType,
      reason: this.reason,
      image: ''
    };

    // Check if an image is selected
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert the image file to base64 string
        const base64Image = reader.result as string;
        formData.image = base64Image;
        // Save the form data to localStorage
        this.saveFormData(formData);
      };
      reader.readAsDataURL(this.selectedImage);
    } else {
      // Save the form data to localStorage without the image
      this.saveFormData(formData);
    }

    // Reset form fields and hide the form
    this.movieType = '';
    this.reason = '';
   // this.selectedImage = null;
    this.showForm = false;
  }
  saveFormData(formData: any) {
    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('suggestedMovies') || '[]');

    // Add the new form data to the existing data
    existingData.push(formData);

    // Save the updated data to localStorage
    localStorage.setItem('suggestedMovies', JSON.stringify(existingData));
  }




}
