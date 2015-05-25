/**
 * Created by liuxun on 5/25/2015.
 */
window.angular.module('myWords').factory('Words', ['$resource', function ($resource) {
    return $resource('/words/:id', null, {
        query: {method: 'GET', params: {id: id}}
    });
}]);