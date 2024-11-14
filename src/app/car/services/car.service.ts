import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient) {}

  getCars(search: string = '') {
    return this.http.get(`${this.apiUrl}?search=${search}`);
  }

  getCar(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCar(data: FormData) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateCar(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteCar(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
