import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
})
export class CarCreateComponent {
  title: string = '';
  description: string = '';
  tags: string[] = [];
  images: File[] = [];

  constructor(private carService: CarService, private router: Router) {}

  onFileSelected(event: any) {
    this.images = event.target.files;
  }

  createCar() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    this.images.forEach((image) => formData.append('images', image));

    this.carService.createCar(formData).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }
}
