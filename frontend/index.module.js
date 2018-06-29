(function () {
    'use strict';

    var app = angular
        .module('FileApp', []);


    app.controller('FileController', FileController);
    
    app.directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });
    app.directive("importSheetJs", [function() {
        return {
          scope: { opts: '=' },
          link: function ($scope, $elm) {
            $elm.on('change', function (changeEvent) {
              var reader = new FileReader();
      
              reader.onload = function (e) {
                /* read workbook */
                var bstr = e.target.result;
                var workbook = XLSX.read(bstr, {type:'binary'});
                $scope.$parent.workbook = workbook;
                /* DO SOMETHING WITH workbook HERE */
              };
      
              reader.readAsBinaryString(changeEvent.target.files[0]);
            });
          }
        };
    }]);

    app.directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    scope.$apply(function () {
                        scope.fileread = changeEvent.target.files[0];
                    });
                });
            }
        }
    }]);
    
    app.run(function ($rootScope) {
        
        //ng-include terminou
        $rootScope.$on("$includeContentLoaded", function (event, templateName) {
            
        });

        //ng-view terminou
        $rootScope.$on("$viewContentLoaded", function (scope) {
                   
        });
    });
    window.app = app;
})();