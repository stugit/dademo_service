(function(){
    angular.module('dashboard.demo')
        .controller('ProjectsController', ['$scope', '$http', '$location', 'Login', ProjectsController]);

    function ProjectsController ($scope, $http, $location, Login) {

        activate();

        function activate(){
            if (!Login.isLoggedIn()) {
                $location.url('/login');
            }

            $scope.user = Login.currentUser();

            $http.get('/dashboard/projects/')
                .then(function(response){
                    $scope.projects = response.data;
                });
        }
    }
})();
