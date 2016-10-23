/**
 * Created by huzhenzhe on 10/21/16.
 */
'use strict';
trackingApp.controller('cusfiltersController', cusfiltersController);


function cusfiltersController($scope, shareDataFilter){
    $scope.newFilterName = "";
    $scope.showInfo = false;
    $scope.showNotice = false;
    $scope.showWrong = false;
    var getFilterList = shareDataFilter.getList();
    var addFilterList = shareDataFilter.addList();

    $scope.addNewFilter = function(){
        $scope.showInfo = true;
    },

    $scope.cancelFilter = function(){
        $scope.showInfo = false;
    },

    $scope.submitFilterName = function(){
        var checkName = document.getElementById("inputValue").value;
        if(checkName==null || checkName==undefined){
            $scope.showNotice = true;
        }else{
            $scope.showWrong = true;
        }

    }

}
