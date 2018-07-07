var display = $('input[name = "display"]');
var value = display.val();
var status1 = 0;
var prevOperator;
var prevVal;
var operator;
var check = 0;
var numArr = [];
var prevA;
var noSecondArg = 0;
var multiEqual =0;
for(var i=0; i<10; i++){
    numArr.push($(`#button${i}`))
};


var arithArr = [];
arithArr.push(  $('#addButton'),
                $('#subtractButton'),
                $('#multiplyButton'),
                $('#divideButton')
            );


var equal = $('#equalsButton');
var clear = $('#clearButton')


if(check ===0){
for(var i=0; i<10; i++){
    numArr[i].click(function(){

        if(parseInt(display.val()) >= 10000000000000002){
            display.val('Overflow!!')
        }

        if((!/\d/.test(display.val()))  && check===0){
            display.val(parseInt($(this).val()));
        }


        else if((/\d/.test(display.val()))  && check===0) {
            display.val(parseInt(display.val() + $(this).val()));
        }

        else if(check===1 ){
            prevVal = display.val();
            display.val(parseInt($(this).val()));
            check =2;
        }

        else if(/\d/.test(display.val()) && check ===2){
            display.val(parseInt(display.val() + $(this).val()));
        }

        prevA = display.val();
        console.log('PrevA: ' + prevA);
        noSecondArg = 0;
    });
}
}



for(var i=0; i<arithArr.length; i++){

    arithArr[i].click(function(){

        if(status1 === 1){

            if(prevOperator === '+'){
                prevVal = parseFloat(prevVal) + parseFloat(display.val());
            }
            else if(prevOperator === '-')
                prevVal =parseFloat(prevVal) - parseFloat(display.val());

            else if(prevOperator === '*')
                prevVal = parseFloat(prevVal)*parseFloat(display.val());

            else if(prevOperator === '/'){
                if(display.val() === 0)
                    display.val('infinity');
                else
                    prevVal = parseFloat(prevVal)/parseFloat(display.val());
            }

             display.val(prevVal);
        }
        operator = $(this).val();
        prevOperator = operator;
        noSecondArg = 1;
        console.log(prevOperator);
        check = 1;
        status1 = 1;
    });
}

equal.click( () => {

    if(multiEqual === 1){
    console.log('prevVal: ' + prevVal);
        if(prevOperator === '+'){
            prevVal = parseFloat(prevVal) + parseFloat(prevA);
        }
        else if(prevOperator === '-')
            prevVal =parseFloat(prevVal) - parseFloat(prevA);

        else if(prevOperator === '*')
            prevVal = parseFloat(prevVal)*parseFloat(prevA);

        else if(prevOperator === '/'){
            if(display.val() === 0)
                display.val('infinity');
            else
                prevVal = parseFloat(prevVal)/parseFloat(prevA);
        }

        display.val(prevVal);
    }

    if(status1 !== 0){

        if(noSecondArg ===0){

            if(operator === '+'){
                prevVal = parseFloat(prevVal) + parseFloat(display.val());
            }
            else if(operator === '-')
                prevVal =parseFloat(prevVal) - parseFloat(display.val());

            else if(operator === '*')
                prevVal = parseFloat(prevVal)*parseFloat(display.val());

            else if(operator === '/'){
                if(display.val() === 0)
                    display.val('infinity');
                else
                    prevVal = parseFloat(prevVal)/parseFloat(display.val());
            }

            display.val(prevVal);
            check = 1;
            status1 = 0;
            multiEqual = 1;
        }

        else{
            prevVal = display.val();
        }
    }


});


clear.click( function (){
    display.val("");
    check = 0;
    prevVal = 0;
    prevA  = 0;
    prevOperator = '';
    status1 = 0;
    noSecondArg = 0;
    multiEqual =0;
});

