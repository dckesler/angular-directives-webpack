import angular from 'angular';
import uirouter from 'angular-ui-router';



angular.module('dirApp', ['ui.router'])
    .config(config);
function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/test');

    $stateProvider

    .state('testRoute', {
        url: '/test',
        template: '<test-route></test-route>',
        resolve: {
            weather(testService){
                return testService.getWeather(48.8567, 2.3508);
            }
        }
    })
}

import './services/testService.js';

import './routes/testRoute/testRoute.js';