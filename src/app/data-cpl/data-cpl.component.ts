import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-cpl',
  templateUrl: './data-cpl.component.html',
  styleUrls: ['./data-cpl.component.css']
})
export class DataCplComponent implements OnInit {
  @Input('name') empName: string;
  @Input('city') empCity: string;
  @Input('salary') empSalary: string;
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectRecord() {
    let selectEmpRecord: any = {
      selectedName:this.empName,
      selectedCity:this.empCity,
      selectedSal:this.empSalary
    };
    this.sendRecord.emit(selectEmpRecord);
  }
}
