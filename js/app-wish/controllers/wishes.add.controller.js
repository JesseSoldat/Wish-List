let WishesAddController = function(WishService) {
  
  let vm = this;

  vm.addWish = addWish;

  function addWish (wishobj) {
    WishService.addWish(wishobj).then( (res) => {
      console.log(res);
    })
  }
  

};

WishesAddController.$inject = ['WishService'];

export default WishesAddController;