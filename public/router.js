/**
 * Created by huzhenzhe on 10/21/16.
 */
var trackingApp=angular.module('trackingApp',['ngRoute']);

trackingApp.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/',
        {
            controller:'overviewController',
            templateUrl:'scripts/overview.html'
        })
        .when('/overview',
        {
            controller:'overviewController',
            templateUrl:'scripts/overview.html'
        })
        .when('/analytics',
        {
            controller:'analyticsController',
            templateUrl:'scripts/analytics.html'
        })
        .when('/help',
        {
            templateUrl:'scripts/help.html'
        })
        .when('/cusfilters',
        {
            controller:'cusfiltersController',
            templateUrl:'scripts/cusfilters.html'
        })
        .when('/importExport',
        {
            controller:'importExportController',
            templateUrl:'scripts/importExport.html'
        })
        .when('/login',
        {
            controller:'loginController',
            templateUrl:'scripts/login.html'
        })
        .when('/myprofile',
        {
            controller:'myprofileController',
            templateUrl:'scripts/myprofile.html'
        })
        .otherwise({redirectTo:'/'});

}]);

