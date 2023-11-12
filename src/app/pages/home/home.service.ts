import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import {
  HomeInterface,
  ObsHomeInterface,
} from 'src/app/shared/interfaces/home.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getHome(): Observable<ObsHomeInterface> {
    return this.http
      .get<HomeInterface[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((home: HomeInterface[]) => ({
          success: home,
        })),
        catchError(() =>
          of({ error: 'Não foi possível carregar a jsonplaceholder' })
        )
      );
  }

  getHomeWithRefresh(refresh?: boolean): Observable<ObsHomeInterface> {
    const httpOptions = { headers: new HttpHeaders() };
    if (refresh) {
      httpOptions.headers = httpOptions.headers.set('x-refresh', 'true');
    }

    return this.http
      .get<HomeInterface[]>(
        'https://jsonplaceholder.typicode.com/todos',
        httpOptions
      )
      .pipe(
        map((home: HomeInterface[]) => ({
          success: home,
        })),
        catchError(() =>
          of({ error: 'Não foi possível carregar a jsonplaceholder with parm refresh' })
        )
      );
  }
}
