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

var budgetController = (
    function(){
        // write code here
    }
)();

var UIController = (
    
    function(){

        // Too many query selectors, to prevent changes make an object with them.
        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn'
        }

    return {
        getInput: function(){
            // use return fn an object as we need to return more variables.
            return {
                // type values are - inc(+) or exp(-)
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return{
                DOMstrings: DOMstrings
            };
        }
    }

    }
)();


var appController = (
    
    function(budgerCtrl, UICtrl){

    var DOM = UICtrl.getDOMstrings();    
    var ctrlAddItem = function(){

        // 1. get field input data
        var input = UICtrl.getInput();
        // 2. Add the item to budget contrl
        // 3. add items to UI
        // 4. Calc budget 
        // 5. Disp the budget
        console.log(DOM);
    } 

    document.querySelector(DOM.DOMstrings.inputBtn).addEventListener('click',ctrlAddItem)

    // For enter keypress event listener
    document.addEventListener('keypress', function(event){

        if(event.key === 'Enter'){
            
             ctrlAddItem();
        }
    });
    }

)(budgetController, UIController);





