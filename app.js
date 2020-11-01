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

    // write code here

    }
)();


var appController = (
    
    function(budgerCtrl, UICtrl){
        
    var ctrlAddItem = function(){

        // 1. get field input data
        // 2. Add the item to budget contrl
        // 3. add items to UI
        // 4. Calc budget 
        // 5. Disp the budget
        console.log("ENTER PRESSED!!!")
    } 

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)

    // For enter keypress event listener
    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13 || event.which === 13){
            
             ctrlAddItem();
        }
    });
    }

)(budgetController, UIController);





