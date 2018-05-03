import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

const API_URL = 'https://swapi.co/api/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(`${API_URL}${path}`)
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error)
    return throwError(error)
  }
}
