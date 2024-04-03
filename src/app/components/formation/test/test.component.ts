import { Component, OnInit } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormGroup, AbstractControl, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MultiSelectModule, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.sass'
})
export class TestComponent {
  cities!: City[];

  formGroup!: FormGroup;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];

      this.formGroup = new FormGroup({
          selectedCities: new FormControl<City[] | null>([{ name: 'Istanbul', code: 'IST' }])
      });
  }  
}
