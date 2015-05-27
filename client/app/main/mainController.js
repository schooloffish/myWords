/**
 * Created by liuxun on 5/21/2015.
 */
window.angular.module('myWords').controller('mainController', ['$scope', 'WordsManager', function ($scope, WordsManager) {
    //WordsManager.getWord(1).then(function (word) {
    //    for (var key in word.data) {
    //        $scope[key] = word.data[key];
    //    }
    //});
    var data = WordsManager.get({id: 1}, function (data) {
        $scope.test=data;
    });
}]);