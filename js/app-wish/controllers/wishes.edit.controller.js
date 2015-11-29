let EditController = function($stateParams, WishService, $state) {
  
  let vm = this;

  vm.editWish = editWish;

  WishService.getWish($stateParams.id).then( (res) => {
    // console.log(res);
    vm.wish = res.data;
  })



  function editWish (wish) {
    WishService.editWish(wish).then( (res) => {
      // console.log(res);
      $state.go('root.wishes')
    });
  }


  

};

EditController.$inject = ['$stateParams', 'WishService', '$state'];

export default EditController;