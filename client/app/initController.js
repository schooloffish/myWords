/**
 * Created by liuxun on 5/8/2015.
 */
window.angular.module('myWords').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'main/main.html',
        controller: 'mainController'
    });
    //$provide.decorator('$exceptionHandler',[]);
}]).run(['$location', function ($location) {
    $location.path('/main');
}]);