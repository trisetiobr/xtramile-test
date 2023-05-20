import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patient: Patient = {
    firstName: '',
    lastName: '',
    phoneNo: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    suburb: '',
    state: '',
    postcode: ''
  };
  submitted = false;

  genders:Array<Object> = [
    'Male', 'Female'
  ];

  constructor(private patientService: PatientService) { }

  savePatient(): void {
    const data = {
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      phoneNo: this.patient.phoneNo,
      dateOfBirth: this.patient.dateOfBirth,
      gender: this.patient.gender,
      address: this.patient.address,
      suburb: this.patient.suburb,
      state: this.patient.state,
      postcode: this.patient.postcode
    };

    this.patientService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPatient(): void {
    this.submitted = false;
    this.patient = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      suburb: '',
      state: '',
      postcode: ''
    };
  }

}
