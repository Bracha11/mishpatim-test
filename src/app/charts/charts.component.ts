import { Component, OnInit } from '@angular/core';
import { ExcelData } from 'src/services/excelService';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data: any;
  constructor(private excelData : ExcelData) { 

    this.data = {
     // labels: 'paragraph',
      datasets : excelData.data.map(row=> ({ label: row.paragraph , data: row.isRefQK }))
    };
  }

  ngOnInit(): void {
  }

}
