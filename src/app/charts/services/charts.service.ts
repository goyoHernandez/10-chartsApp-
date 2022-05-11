import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  url = 'http://localhost:3000/grafica';

  constructor(private http: HttpClient) { }

  GetDonutChart = () => {
    return this.http.get(this.url);
  }

  GetDataDonutChart = () => {
    return this.GetDonutChart().
      pipe(
        delay(1500),
        map(
          res => {
            const labels = Object.keys(res);
            const data = Object.values(res);
            return { labels, data }
          })
      );
  }
}