import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPatient: Patient = {
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

  genders:Array<Object> = [
    'Male', 'Female'
  ];
  message = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPatient(this.route.snapshot.params["id"]);
    }
  }

  getPatient(id: string): void {
    this.patientService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPatient = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePatient(): void {
    this.message = '';

    this.patientService.update(this.currentPatient.id, this.currentPatient)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This patient was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePatient(): void {
    this.patientService.delete(this.currentPatient.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/patients']);
        },
        error: (e) => console.error(e)
      });
  }

}
