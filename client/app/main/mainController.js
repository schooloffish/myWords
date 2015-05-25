/**
 * Created by liuxun on 5/21/2015.
 */
window.angular.module('myWords').controller('mainController', ['$scope', 'Words', function ($scope, Words) {
    Words.query({id:1});
    $scope.name = 'Liu Feifei';
    $scope.age = 1.5;
}]);