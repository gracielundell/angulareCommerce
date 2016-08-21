(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("ReviewController", function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller("PanelController", function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          return this.tab === setTab;
        };
        this.isSelected = function(checkTab) {
          this.tab = checkTab;
        };
      },
      controllerAs: 'panels'
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.89,
      description: 'Real shiny',
      canPurchase: true,
      images: [
        {
          thumb: "http://mathworld.wolfram.com/images/eps-gif/DodecahedronIcosahedron_700.gif"
        }
      ],
      reviews: [
        {
          stars: 3,
          body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          author: "hop@hoponpop.net"
        }
      ]
    },
    {
      name: 'Cube',
      price: 7,
      description: 'Real cubey',
      canPurchase: true,
      images: [
        {
          thumb: "http://virtualmathmuseum.org/Polyhedra/Cube/Cube.png"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          author: "griz@grizz.com"
        },
        {
          stars: 2,
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing. Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          author: "griz@grizz.com"
        },
      ]
    },
  ];

})();
