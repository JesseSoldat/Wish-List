import angular from 'angular';
import '../app-core/index';

import WishesController from './controllers/wishes.controller';



angular
  .module('app.wish', ['app.core'])
  .controller('WishesController', WishesController)
;