angular.module('PixMapApp', ['appRoutes', 'userController', 'userServices', 'mainController', 'authServices'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptors');
});
