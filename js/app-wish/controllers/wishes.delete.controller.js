let DeleteController = function($stateParams, WishService, $state) {
  
  let vm = this;

  vm.deleteWish = deleteWish;


  WishService.getWish($stateParams.id).then( (res) => {
    // console.log(res);
    vm.wish = res.data;
  })

  function deleteWish (wish) {
    // console.log('delete:', wish);
    WishService.deleteWish(wish).then( (res) => {
      // console.log(res);
      $state.go('root.wishes')
    })
  }


  

};

DeleteController.$inject = ['$stateParams', 'WishService', '$state'];

export default DeleteController;