import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
viewCar(arg0: any) {
throw new Error('Method not implemented.');
}
  cars: any[] = [];
  searchQuery: string = '';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars() {
    this.carService.getCars(this.searchQuery).subscribe((data: any) => {
      this.cars = data;
    });
  }

  searchCars() {
    this.fetchCars();
  }
}
