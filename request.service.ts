import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return new Promise<void>((resolve, reject) => {
      this.http.get<any>(url).subscribe({
        next: (res: any) => resolve(res),
        error: (err: any) => reject(err)
      });
    });
  };
  
  post(url: string, body: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.post<any>(url, body).subscribe({
        next: (res: any) => resolve(res),
        error: (err: any) => reject(err)
      });
    });
  };

  put(url: string, body: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.put<any>(url, body).subscribe({
        next: (res: any) => resolve(res),
        error: (err: any) => reject(err)
      });
    });
  };
  
  delete(url: string) {
    return new Promise<void>((resolve, reject) => {
      this.http.delete<any>(url).subscribe({
        next: (res: any) => resolve(res),
        error: (err: any) => reject(err)
      });
    });
  };

}
