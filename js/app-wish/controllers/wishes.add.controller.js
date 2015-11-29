let WishesAddController = function(WishService, $state) {
  
  let vm = this;

  vm.addWish = addWish;

  function addWish (wishobj) {
    WishService.addWish(wishobj).then( (res) => {
      vm.wish = {};
      // console.log(res);
      $state.go('root.wishes')

    })
  }
  

};

WishesAddController.$inject = ['WishService', '$state'];

export default WishesAddController;