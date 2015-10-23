angular.module('exam').filter('makeUppercase', function () {
  return function (item) {
    return item.toUpperCase();
  };
});
