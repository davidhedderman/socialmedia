/*myApp.controller('RegistrationController', ['$scope', '$http',
	function($scope, $http){
		$scope.login = function(){
            $scope.message = "Welcome " + $scope.user.email;
        };
        $scope.register = function(){
            $http({
                method: "POST",
                url: " "
            }).then(function mySuccess(response){

            })
            $scope.message = "Welcome " + $scope.user.firstname;
        };
	}]);*/

(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();