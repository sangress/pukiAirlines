import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  
  constructor() {}

  set(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
