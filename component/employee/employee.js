angular.module("exam").controller("employeeController",['$scope','$http','employeeService',function($scope,$http,employeeService){
	self = this;
	self.employeeList = [];
	self.currentEmployee = {};
	self.error = false

	$scope.orderByField = 'FirstName'; 
  	$scope.sortReverse  = true;  

  	
	employeeService.getEmployees().then(function(result){
		self.employeeList=result.data
		console.log(self.employeeList)
	})

	self.getEmployee = function(currentEmployee){
		self.currentEmployee = currentEmployee
	}
		
	
	self.delete = function(currentEmployee){	
		console.log(self.employeeList)
		if(self.employeeList.length>1){
			//self.employeeList.splice(_.indexOf(self.employeeList, _.find(self.employeeList, function (item) { return item.Id === currentEmployee.ID; })), 1);
			currentEmployee.Active = false
			$("#employeeDeleteModal").modal('hide');
		}
		else{
			self.error=true
		}
		
	}
	
}])
