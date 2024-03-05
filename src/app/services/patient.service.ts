import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PatientService {

  private readonly controller: string = 'Patient'

  constructor(private client: HttpClient) { }
  
  GetAll() : Observable<Patient[]>{
    return this.client.get<Patient[]>(`${environment.apiUrl}${this.controller}/GetAll`);
  }
}
