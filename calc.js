var display = $('input[name = "display"]');
var value = display.val();
//console.log(value)

var prevVal;
var operator;
var check = 0;
var numArr = [];
for(var i=0; i<10; i++){
    numArr.push($(`#button${i}`))
};


var arithArr = [];
arithArr.push(  $('#addButton'),
                $('#subtractButton'),
                $('#multiplyButton'),
                $('#divideButton')
            );

///console.log(arithArr[0].text());
var equal = $('#equalsButton');
var clear = $('#clearButton')


//display.click();
if(check ===0){
for(var i=0; i<10; i++){
    numArr[i].click(function(){

        if((!/\d/.test(display.val()))  && check===0){
            display.val(parseInt($(this).val()));
            console.log(check);
        }


        else if((/\d/.test(display.val()))  && check===0) {
            display.val(parseInt(display.val() + $(this).val()));
            console.log(check);
        }
    });
}
}

for(var i=0; i<arithArr.length; i++){

    arithArr[i].click(function(){

        operator = $(this).val();
        //console.log(operator);
        $('#output').html(display.val());
        check = 1;
        //console.log(check);

            for(var i=0; i<10; i++){
                numArr[i].click(function(){

                if(check===1 ){
                    prevVal = display.val();
                    display.val(parseInt($(this).val()));
                    console.log(check);
                    check =2;
                }

                else if(/\d/.test(display.val()) && check ===2){
                    display.val(parseInt(display.val() + $(this).val()));
                    console.log(check);
                }
            });
            }

        //display.val($(this).val())
    });
}

equal.click( () => {

    if(operator === '+'){
        prevVal = parseFloat(prevVal) + parseFloat(display.val());
        console.log(prevVal);
    }
    else if(operator === '-')
        prevVal =parseFloat(prevVal) - parseFloat(display.val());

    else if(operator === '*')
        prevVal = parseFloat(prevVal)*parseFloat(display.val());

    else if(operator === '/')
        if(display.val() === 0)
            display.val('infinity');
        else
            prevVal = parseFloat(prevVal)/parseFloat(display.val());

    display.val(prevVal);
    //check = 1;
    console.log('Equal');
});

clear.click( function (){
    display.val("")
})