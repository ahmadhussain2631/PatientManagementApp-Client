import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
  providers:[PatientService]
})
export class PatientListComponent implements OnInit {

  columns: string[] = [
    'Id',
    'Name',
    'Age',
    'Gender',
    'Address',
    'Phone Number',
    'Actions'
  ]

  patients: Patient[] = []

  constructor(private _service: PatientService) {
    
  }

  ngOnInit(){
    this._service.GetAll().subscribe(
      {
        next: (data) => {
          this.patients = data
        }
      }
    )
  }

}
