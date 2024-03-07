import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PatientService {

  private readonly controller: string = 'Patient'

  constructor(private client: HttpClient) { }

  private buildEndpoint(endpoint: string) {
    return `${environment.apiUrl}${this.controller}/${endpoint}`
  }

  GetAll(): Observable<Patient[]> {
    return this.client.get<Patient[]>(this.buildEndpoint('GetAll'));
  }

  Delete(id: number): Observable<string> {
    return this.client.delete<string>(this.buildEndpoint(`Delete/${id}`));
  }

  Add(body: any): Observable<number> {
    return this.client.post<number>(this.buildEndpoint(`Add`), body);
  }
}
