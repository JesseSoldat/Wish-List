let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.wishes', {
      url: '/wishes',
      controller: 'WishesController as vm',
      templateUrl: 'templates/app-wish/wishes.tpl.html'
    })
    .state('root.addWish', {
      url: '/wishes/add',
      controller: 'WishesAddController as vm',
      templateUrl: 'templates/app-wish/wishes-add.tpl.html'
    })
  
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;