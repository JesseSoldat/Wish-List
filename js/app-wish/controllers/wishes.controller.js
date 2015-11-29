let WishesController = function(WishService) {

  let vm = this;



  activate();
  
  function activate() {
   WishService.getAllWishes().then( (res) => {
      // console.log(res);
      vm.wishes = res.data.results;
    });
  }
  

};

WishesController.$inject = ['WishService'];

export default WishesController;