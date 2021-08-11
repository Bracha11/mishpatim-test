import { Component } from '@angular/core';
import { ExcelData } from 'src/services/excelService';
// import  {readFile, read,utils,IWorkBook} from 'ts-xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayBuffer: any;
  file: File;
  isReady: boolean = false;

  constructor(private data: ExcelData) {
  }


  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      import("xlsx").then(xlsx => {
        this.data.loadExcel(fileReader).then(data => {
          this.data.checkData();
          this.isReady = true;
          // console.log(data)
        });
        //  this.data.loadExcel(fileReader);
      });

    }
    fileReader.readAsArrayBuffer(this.file);
  }

  download() {
    this.data.exportExcel();

  }
}



