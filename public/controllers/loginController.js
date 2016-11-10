/**
 * Created by huzhenzhe on 11/7/16.
 */
'use strict';
trackingApp.controller('loginController', loginController);


function loginController($scope,$window){
    var password = "123123";
    var username = "Ace";
    $scope.validLogin = function(){
        //if(){
        //
        //}
    },

    $scope.signOnFunc = function(){
        $window.location.href = 'index.html#/myprofile';
    }

}