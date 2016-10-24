/**
 * Created by huzhenzhe on 10/21/16.
 */
'use strict';
trackingApp.controller('overviewController', overviewController);

function overviewController($scope,shareDataFilter){
    $scope.analyticsData = [{title: 'Total Sales', num:'4' },
        {title: 'Total Orders', num:'5' },
        {title: 'Total Returns', num:'1'},
        {title: 'Number of Site Visiting', num:'56' },
        {title: 'Sales by Promo Code', num:'6' },
        {title: 'Sales by State/Geography', num:'1' },
        {title: 'Sales by SKU', num:'3' },
        {title: 'Week over week Sales Performance', num:'13' }
    ];
    $scope.exportData = function () {
        var blob = new Blob([document.getElementById('downloadCsv').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "analyticsData.xls");
    };
    $scope.filterBy=["View All","Week", "Sale Source"];
    $scope.hideWeekTable = true;
    $scope.hideSaleTable = true;

    $scope.saveFilter=function(){

    }

}

trackingApp.service('shareDataFilter', shareDataFilter);

function shareDataFilter() {
    var myList = ["Week", "Sale Source", "View All"];

    var addList = function(newObj) {
        myList.push(newObj);

    };


    var getList = function(){
        return myList;
    };

    return {
        addList: addList,
        getList: getList
    };
}

