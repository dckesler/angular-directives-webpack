export default angular
    .module('dirApp')
    .directive('moarContent', moarCont);

function moarCont(){
    return {
        scope:{
            name: '@',
            bind: '=',
            func: '&'
        },
        template: require('./moarContent.html'),
        controller($scope){
            $scope.test = function(){
                $scope.func({x: "New Parameter"})
            }
        }
    }
}
