export default angular
    .module('dirApp')
    .service('testService', testService);
function testService($http, $q){
    var parisWeather = {};

    this.getWeather = function(lat, lon){
        var dfd = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon).then(function(data){
            parisWeather.temp = data.data.main.temp - 273.15;
            parisWeather.weather = data.data.weather[0].description;
            dfd.resolve(data);
        });
        return dfd.promise;
    };

    this.getParisWeather = function(){
      return parisWeather;
    }
}