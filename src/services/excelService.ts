import { Injectable } from "@angular/core";
import { element } from "protractor";
import { promise } from "selenium-webdriver";
import { Check } from "./check";

@Injectable()
export class ExcelData {

    data: any;

    public loadExcel(fileReader: FileReader): Promise<any> {
        let arrayBuffer: any;
        return import("xlsx").then(xlsx => {
            arrayBuffer = fileReader.result;
            var data = new Uint8Array(arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            this.data = xlsx.utils.sheet_to_json(worksheet, { raw: true });
            //  console.log(xlsx.utils.sheet_to_json(worksheet,{raw:true}));
            console.log(this.data);
        });
    }


    public exportExcel() {
        let dataToExport = this.data;
        import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(dataToExport);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "primengTable");
        });
    }

    private saveAsExcelFile(buffer: any, fileName: string): void {
        import("file-saver").then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data: Blob = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }


    public checkData() {

        this.data=this.data.filter(value => value.isTitleRefRelevant==1 &&  value.IsTitleRelevant==1 && value.isRefQK==1  );
        this.data=this.data.map(element => {
         let result=  Check.compare(element.title, element.ref);
         element.result=result;
         return element;
          // console.log('compare ',result,element.title, element.ref);
        });
        console.log(this.data);

    }


    countOf(){

        this.data

    }

}