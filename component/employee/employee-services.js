angular.module('exam').factory('employeeService', ['$http','$q',function($http, $q){

	return {

		getEmployees : function(){

			var deferred = $q.defer()

			$http.get('/data/employee.json').success(function(result){
				deferred.resolve(result)
			})

			return deferred.promise
		}

	}

}])