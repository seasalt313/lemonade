(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('LemonadeStandApp', []); //always create app first


//controllers
app.controller("DisplayStandController", function($scope, LemonadeFactory){

  $scope.ingredients = LemonadeFactory.getLemonade();

  $scope.reduceSugar = function(num){
    console.log(num);
    LemonadeFactory.reduceSugar(num);
  },

  $scope.reduceIce = function(num){
    console.log(num);
    LemonadeFactory.redIce(num);
  },

  $scope.reduceLemons = function(num){
    console.log(num);
    LemonadeFactory.redLemons(num);
  }

  $scope.buyMore = function(num, type){
    console.log(num);
    LemonadeFactory.buyMore(num, type);
  }

})

app.controller("StoreController", function($scope, StandFactory, LemonadeFactory){



  $scope.store = StandFactory.getStats();
  $scope.prices = LemonadeFactory.getPrices();
  $scope.endDay = function(){
  let weather =  StandFactory.weatherToday();
  let results = StandFactory.businessSuccess(weather);
  let prices = LemonadeFactory.moneyMade(results);
  let lost = LemonadeFactory.youLost(prices)

  }

})


//services
app.factory("LemonadeFactory", function(){

  let ingredients = {
    sugar: 0,
    ice: 0,
    lemons: 0,
    cups: 25,
  }

  let prices = {
    sugar: 1.22,
    ice: 1.21,
    lemons: 3.33,
    cups: 2.22,
    money: 50
  }

  return {
    getLemonade: function(){
      return ingredients;
    },
    getPrices: function(){
      return prices;
    },
    reduceSugar: function(num){
      ingredients.sugar =  ingredients.sugar - num;
      return ingredients;
    },
    redIce: function(num){
      ingredients.ice = ingredients.ice - num;
      return ingredients;
    },
    redLemons: function(num){
      ingredients.lemons = ingredients.lemons - num;
      return ingredients;
    },
    buyMore: function(num, type){
      let total = (num * prices[type]);
      if (prices.money > total) {
        if (type === 'lemons') {
          ingredients.lemons = ingredients.lemons + num;
        } else if (type === 'ice') {
          ingredients.ice = ingredients.ice + num;
        } else if (type === 'sugar') {
          ingredients.sugar = ingredients.sugar + num;
        }
        prices.money = prices.money - total;
      }
    },
    moneyMade: function(business){
      prices.money = business.customers * prices.cups;
      return prices;
    },
    youLost: function(result){
      console.log(result.money);
      if (result.money === 0) {
        console.log("you lost");
        alert("You Lost. Refresh to play again.")
      }
    }

  }
})

app.factory("StandFactory", function(){

  let store = {
    customers: 0,
    weather: '',
    options: ['rainy', 'warm', 'windy', 'hot', 'cold'],
  }

    return {
      getStats: function(){
        console.log(store);
        return store;
      },
      weatherToday: function(){
        store.weather = store.options[Math.floor(Math.random()*store.options.length)];
        return store.weather;
      },
      businessSuccess: function(weather){
          if (weather === 'hot') {
          store.customers = store.customers + 20;
        }  else if (weather === 'warm') {
          store.customers = store.customers + 17;
        }  else if (weather === 'windy') {
          store.customers = store.customers + 8;
        } else if (weather === 'cold') {
          store.customers = store.customers - 20;
      }
      return store;
    },
  }
})

// app.filter('asMoney', function(){
//   return function (num){
//     num = num.toFixed(2);
//     return '$' + num;
//   };
// })

//components meh
// app.component('recipeItem', {
//   templateUrl: 'templates/recipe-item.html',
//   bindings: {
//     item: '<',
//     requestAdd: '&',
//   },
// })

},{}]},{},[1]);
