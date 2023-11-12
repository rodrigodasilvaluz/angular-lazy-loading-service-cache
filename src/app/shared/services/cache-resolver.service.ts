import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheResolverService {
  private cache = new Map<string, [Date | null, HttpResponse<any>]>();

  constructor() {}

  set(
    key: string,
    value: HttpResponse<any>,
    timeToLive: number | null = null
  ): void {
    if (timeToLive) {
      const expiresIn = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds() + timeToLive);
      this.cache.set(key, [expiresIn, value]);
    } else {
      this.cache.set(key, [null, value]);
    }
  }

  get(key: string): HttpResponse<any> | null {
    const tuple = this.cache.get(key);

    if (!tuple) return null;

    // Extract tuple
    const expiresIn = tuple[0];
    const httpSavadResponse = tuple[1];
    const now = new Date();

    if (expiresIn && expiresIn.getTime() < now.getTime()) {
      this.cache.delete(key);
      return null;
    }

    return httpSavadResponse;
  }
}
