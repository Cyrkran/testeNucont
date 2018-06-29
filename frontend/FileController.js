function FileController($scope) {
    
    

    $scope.importFile = function(){
        var sheetNames = this.workbook.SheetNames;
        var spreadsheet = this.workbook.Sheets;
        var data = []
        var scope = this;

        sheetNames.forEach(el => {
            var planilha = spreadsheet[el];
            var size = scope.getSize(planilha['!ref']);

            for(var i = 1; i <= size; i++){
                data.push({
                    "classificador": planilha['A'+i].v,
                    "codigo": planilha['B'+i].v,
                    "descricao": planilha['C'+i].v,
                    "saldoAnterior": planilha['D'+i].v,
                    "saldoAtual": planilha['E'+i].v,
                    "mudou": planilha['F'+i].v
                });
            }
        });
        this.data = data;
        this.loading = false;
    };

    $scope.getSize = function(range){
        const regex = /\d{2,}/gm;
        const str = range;
        let m;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            return m[0];
        }   
    }
    
    $scope.initController = function(){
        this.workbook = undefined;
        this.loading = true;
    };
}