/**
 * Created by liuxun on 5/25/2015.
 */
window.angular.module('myWords').factory('WordsManager', ['$resource', '$q', function ($resource, $q) {
    var wordsManager = {};
    //wordsManager.getWord = function (id) {
    //    var defer = $q.defer();
    //    $http.get('api/phrase/' + id).then(function (data) {
    //        defer.resolve(data);
    //    });
    //    return defer.promise;
    //};
    //return wordsManager;
    return $resource('api/phrase/:id');
}]);