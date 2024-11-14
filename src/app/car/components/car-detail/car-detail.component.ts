import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    this.carService.getCar("carId").subscribe((data: any) => {
      this.car = data;
    });
  }

  deleteCar() {
    this.carService.deleteCar(this.car.id).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }
}
