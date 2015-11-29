let EditController = function($stateParams, WishService) {
  
  let vm = this;

  vm.editWish = editWish;

  WishService.getWish($stateParams.id).then( (res) => {
    // console.log(res);
    vm.wish = res.data;
  })



  function editWish (wish) {
    WishService.editWish(wish).then( (res) => {
      // console.log(res);
    });
  }


  

};

EditController.$inject = ['$stateParams', 'WishService'];

export default EditController;