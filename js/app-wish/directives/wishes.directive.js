let wishItem = function($state, WishService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      wish: '='
    },
    template: `
      <div class="panel">
        <h5>{{wish.title}}</h5>
        <p>{{wish.description}}</p>
        <img ng-src="{{wish.url1}}">
        <a href="#/edit/{{wish.objectId}}">Edit</a>
      </div>
      `,
    controller: 'WishesController as vm',
    link: function (scope, element, attrs) {

    }
  };
  

};

wishItem.$inject = ['$state', 'WishService'];

export default wishItem;