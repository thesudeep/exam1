angular.module('exam',['ngRoute'])

angular.module('exam').config(function($routeProvider) {
    $routeProvider       
        .when('/home', {
            templateUrl : 'component/home/home.html',
            controller  : 'homeController as home'
        })
        .when('/employee', {
            templateUrl : 'component/employee/employee.html',
            controller  : 'employeeController as employee'
        }) 
        .when('/album', {
            templateUrl : 'component/album/album.html',
            controller  : 'albumController as album'
        })        
        .otherwise({
        	redirectTo: '/home'
      });
 })