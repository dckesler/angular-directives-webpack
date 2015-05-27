import './testRoute.scss';
export default angular
    .module('dirApp')
    .directive('testRoute', testRoute);

import html from './testRoute.html';

function testRoute(){
    return {
        template: require('./testRoute.html'),
        controller($scope, testService){
            $scope.sayHello = function(){
                alert("Hello");
            };

            $scope.parisWeather = testService.getParisWeather();
            $scope.bound = "I'm bound up";
            $scope.tester = function(x){
                alert(x);
            }
        }
    }
}

import './moarContent/moarCont.js';