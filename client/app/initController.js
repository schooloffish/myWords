/**
 * Created by liuxun on 5/8/2015.
 */
window.angular.module('myWords').config(['$provide','$stateProvider','$urlRouterProvider', function ($provide,$stateProvider,$urlRouterProvider) {
    $stateProvider.state('main',{
        abstract:true,
        url:'/main',
        templateUrl:'',
        controller:'mainController'
    }).run(['$location', function ($location) {
        $location.path('/main');
    }]);

    //$provide.decorator('$exceptionHandler',[]);
}]);