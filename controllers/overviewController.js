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

    $scope.filterBy=["View All","Week", "Sale Source"];
    $scope.hideWeekTable = true;
    $scope.hideSaleTable = true;
    //console.log("get teh lise"+shareDataFilter.addList($scope.filterBy));
    //function getListTarget(e) {
    //    e = e || window.event;
    //    return e.target || e.srcElement;
    //}
    //
    //
    //var testList;
    //$scope.newTable = [];
    //console.log("test"+$scope.analyticsData[0].title);
    //console.log($scope.analyticsData[0].title.includes('Total'));
    ////var ul = document.getElementById('getFilterName');
    //$scope.checkFilter = function(event){
    //    var target = getListTarget(event);
    //    if(target.innerHTML=="Week"){
    //        for(var i=0; i<$scope.analyticsData.length; i++){
    //            if($scope.analyticsData[i].title.includes('Week')){
    //                $scope.newTable.push($scope.analyticsData[i]);
    //                $scope.analyticsData = $scope.newTable;
    //            }
    //
    //
    //        }
    //    }

        //if(target.innerHTML=="Sale Source"){
        //    for(var j=0; j<$scope.analyticsData.length; j++){
        //        if($scope.analyticsData[j].title.includes('by')){
        //            $scope.newTable.push($scope.analyticsData[i]);
        //            $scope.analyticsData = $scope.newTable;
        //        }
        //
        //
        //    }
        //}

        //}



};

trackingApp.service('shareDataFilter', shareDataFilter);

function shareDataFilter() {
    var myList = ["Week", "Sale Source", "View All"];

    var addList = function(newObj) {
        myList.push(newObj);

    }


    var getList = function(){
        return myList;
    }

    return {
        addList: addList,
        getList: getList
    };
}

