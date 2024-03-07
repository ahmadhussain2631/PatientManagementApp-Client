import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
  providers: [PatientService]
})
export class PatientFormComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
  }

  Submit() {
    if (this.form.valid)
      this.patientService.Add(this.form.value).subscribe({
        next: data => {
          if (data > 0)
            alert('Patient Added Successfully')
          else
            alert('Something went wrong!')
          this.router.navigate(['/patient-list']);
        },
        error: err => {
          alert('Something went wrong!')
        }
      })
    else
      alert('Please fill all mandatory fields')
    return false
  }

}
