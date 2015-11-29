let WishService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/wishes'

  this.getAllWishes           = getAllWishes;
  this.addWish                = addWish;
  
  function getAllWishes() {
    return $http.get(url, PARSE.CONFIG);
  }
  //Add a Wish
  function Wish(wishObj) {
    this.title = wishObj.title;
    this.description = wishObj.description;
    this.url1 = wishObj.url1;
    this.url2 = wishObj.url2;
    this.url3 = wishObj.url3;

  }

  function addWish(obj) {
    let w = new Wish(obj);
    return $http.post(url, w, PARSE.CONFIG);

  };

};

WishService.$inject = ['$http', 'PARSE'];

export default WishService;