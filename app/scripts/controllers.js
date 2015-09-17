(function ()
{
    'use strict';

    angular.module('MoveLogApp.controllers', []);

    function MainController ($scope)
    {
        $scope.exercises = [
            {
                icon: 'img/pushup.jpg',
                name: 'Pushups',
                count: 20
            }
        ];

        $scope.increase = function($index)
        {
            $scope.exercises[$index].count += 1;
        };

        $scope.decrease = function($index)
        {
            $scope.exercises[$index].count -= 1;
        };
    }

    angular
        .module('MoveLogApp.controllers')
        .controller('MainController', MainController);

})();
