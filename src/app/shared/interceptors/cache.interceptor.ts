import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CacheResolverService } from '../services/cache-resolver.service';
import { TIME_TO_LIVE } from '../constants/cache.constants';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheResolver: CacheResolverService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    if (request.headers.get('x-refresh')) {
      return this.sendRequest(request, next);
    }

    const cachedResponse = this.cacheResolver.get(request.url);

    if (cachedResponse) {
      console.log('Cache exists');
    } else {
      console.log('Cache not exists');
    }

    return cachedResponse
      ? of(cachedResponse)
      : this.sendRequest(request, next);
  }

  sendRequest(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cacheResolver.set(request.url, event, TIME_TO_LIVE);
        }
      })
    );
  }
}
