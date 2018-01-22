import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Communication between Component';

  public empData: any = [
    { name: "Nick", city: "Jabalpur", salary: "1" },
    { name: "Mayur", city: "Jabalpur", salary: "1" },
    { name: "Ramu", city: "Rewa", salary: "1" },
    { name: "Goldy", city: "Sahpura", salary: "1" },
  ];

  public selectedEmpDetail: any = {
    selectedName: '',
    selectedCity: '',
    selectedSal: ''
  };
  getRecord(data: any): void {
    this.selectedEmpDetail = data;
    console.log("fun call record");
  }


}
