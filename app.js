// Module pattern -- IIFE and Closures

/* ******************************** SAMPLE TEST **************************
var budgetController = (
    function(){
        // write code here
        var x = 23;
        var add = function(a){
            return x + a;
        }
    
    return {
        publicTest : function (b){
            return add(b);
        }
    }
})();

var UIController = (function(){

    // write code here

})();


var appController = (function(budgerCtrl, UICtrl){

    // write code here
    var z = budgerCtrl.publicTest(10);

    return {
        resPublic: function(){
            console.log(z);
        }
    }

})(budgetController, UIController);

*****************************************************************************************************/

var budgetController = (function () {
  // Need to have data model for income and expense here.
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;
      /*    ID needs to be unique and not cause clash on deletion or add.
            [1 2 3 4 5] , next Id = 6
            [1 2 4 6 8] , next Id = 9
            ID = last Id + 1
      */

      // Create new ID
      data.allItems[type].length > 0
        ? (ID = data.allItems[type][data.allItems[type].length - 1].id + 1)
        : (ID = 0);

      // Create new Item based on 'inc' or 'exp' type
      type === "exp"
        ? (newItem = new Expense(ID, des, val))
        : type === "inc"
        ? (newItem = new Income(ID, des, val))
        : "";

      // Push it into our Data Structure
      data.allItems[type].push(newItem);

      // Return the new Element
      return newItem;
    },
    testing: function () {
      console.log(data);
    },
  };
})();

var UIController = (function () {
  // Too many query selectors, to prevent changes make an object with them.
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };

  return {
    getInput: function () {
      // use return fn an object as we need to return more variables.
      return {
        // type values are - inc(+) or exp(-)
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    // add new items to UI
    addListItem: function (obj, type) {
      var html;

      type === "inc"
        ? // Create HTML string with placeholder text
          (html = `<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`)
        : type === "exp"
        ? (html = `<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`)
        : "";

      // Replace placeholder text with data recieve from object

      // insert html to DOM
    },

    getDOMstrings: function () {
      return {
        DOMstrings: DOMstrings,
      };
    },
  };
})();

var appController = (function (budgerCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    document
      .querySelector(DOM.DOMstrings.inputBtn)
      .addEventListener("click", ctrlAddItem);
    // For enter keypress event listener
    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. get field input data
    input = UICtrl.getInput();

    // 2. Add the item to budget contrl
    newItem = budgerCtrl.addItem(input.type, input.description, input.value);

    // 3. add items to UI
    // 4. Calc budget
    // 5. Disp the budget
  };

  return {
    init: function () {
      console.log("Application has started!");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

appController.init();
