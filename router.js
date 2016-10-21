/**
 * Created by huzhenzhe on 10/21/16.
 */
var trackingApp=angular.module('trackingApp',['ngRoute']);

trackingApp.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/',
        {
            controller:'overviewController',
            templateUrl:'overview.html'
        })
        .when('/overview',
        {
            controller:'overviewController',
            templateUrl:'overview.html'
        })
        .when('/analytics',
        {
            controller:'analyticsController',
            templateUrl:'analytics.html'
        })
        .when('/help',
        {
            templateUrl:'help.html'
        })
        .when('/cusfilters',
        {
            controller:'cusfiltersController',
            templateUrl:'cusfilters.html'
        })
        .when('/importExport',
        {
            controller:'importExportController',
            templateUrl:'importExport.html'
        })
        .otherwise({redirectTo:'/'});

}]);

