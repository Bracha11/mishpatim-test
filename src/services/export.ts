
export  class Export{

    public static exportPdf(dataToExport:any[], culumns :any[]) {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default(0,0);
             doc.autoTable(culumns ,dataToExport);
            doc.save('primengTable.pdf');
        })
    })
}


 




 public static exportExcel(dataToExport:any[]) {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(dataToExport);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "resultTable");
    });
}

 private static saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

public static exportPPT()
{
    
}

}