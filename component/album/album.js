angular.module("exam").controller("albumController",['$scope','$q','$http','$timeout',function($scope,$q,$http,$timeout){
	self = this;

	self.album = {}
	self.photos = []

	_getAlbum = function getAlbums(){

		var deferred = $q.defer()

			$http.get('http://thesudeep.github.io/exam1/data/album.json').success(function(result){
				
				deferred.resolve(result)
			})

			return deferred.promise


	}

	_getPhotos = function getPhotos(){
		var url='/data/albumDetails.json'
		var deferred = $q.defer()

			$http.get(url).success(function(photoResult){
					deferred.resolve(photoResult)				
			})

			return deferred.promise

	}


	var promise = _getAlbum()  
	    .then(function(result) {
	    	self.album=result
	        return _getPhotos(result);
	    });

	promise.then(function(result) {  
	    self.photos = result
	});



	
}])
