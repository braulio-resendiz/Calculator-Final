// Test for inputing digits
QUnit.test( "Add digits test", function( assert )
    {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    current_input = "0";
    });

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert )
    {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    current_input = "0";
    });

// Test square root cureent input
QUnit.test( "Square Root test", function( assert )
    {
    addDigit('4');
    addDigit('9');
    squareRoot(current_input);
    assert.equal(document.getElementById("screen").value, "7", "Passed - Expected 7");
    current_input = "0";
    });

// Test squaring current input
QUnit.test( "Square test", function( assert )
    {
    addDigit('7');
    square(current_input);
    assert.equal(document.getElementById("screen").value, "49", "Passed - Expected 49");
    current_input = "0";
    });

// Test switch sign test
QUnit.test( "switch sign test", function( assert )
    {
    addDigit('7');
    changeSign(current_input);
    assert.equal(document.getElementById("screen").value, "-7", "Passed - Expected -7");
    current_input = "0";
    });

// Test input limit into calculator
QUnit.test( "Add input limit test", function( assert )
    {
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('2');
    addDigit('3');
    assert.equal(document.getElementById("screen").value, "2222222222", "Passed - Expected 10");
    current_input = "0";
    });

// Test percentage
QUnit.test( "Add percentage test", function( assert )
    {
    addDigit('4');
    addDigit('2');
    percentage(current_input);
    assert.equal(document.getElementById("screen").value, "0.42", "Passed - Expected 0.42");
    current_input = "0";
    });

// Test inverse
QUnit.test( "Add inverse test", function( assert )
    {
    addDigit('5');
    inverse(current_input);
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    current_input = "0";
    });

// Test allclear
QUnit.test( "Add allclear test", function( assert )
    {
    addDigit('5');
    addDigit('2');
    addDigit('8');
    addDigit('1');
    clearCurrent(current_input);
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    current_input = "0";
    });

// Test factorial
QUnit.test( "Add factorial test", function( assert )
    {
    addDigit('4');
    factorial(current_input);
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
    current_input = "0";
    });



// Test deg cos
QUnit.test( "deg cos test", function( assert ) {
    toggle();
    addDigit('3');
    addDigit('0');
    trig("cos");
    assert.equal(document.getElementById("screen").value, "0.86603", "Passed - Expected 0");
    current_input = "0";
    toggle();
});

// test deg tan
QUnit.test( "deg tan test", function( assert ) {
    toggle();
    addDigit('3');
    addDigit('0');
    trig("tan");
    assert.equal(document.getElementById("screen").value, "0.57735", "Passed - Expected 0.57735");
      current_input = "0";
    toggle();
});

// test deg cos
QUnit.test( "deg sin test", function( assert ) {
   toggle();
    addDigit('3');
    addDigit('0');
    trig("sin");
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
      current_input = "0";
    toggle();
});

// test sin function radians
QUnit.test( "rad sin test", function( assert )
    {
    addDigit('9');
    addDigit('0')
    trig("sin");
    assert.equal(document.getElementById("screen").value, "0.894", "Passed - Expected 0.894");
    current_input = "0";
    });

// test cos function radians
QUnit.test( "rad cos test", function( assert )
   {
    addDigit('9');
    addDigit('0')
   trig("cos");
   assert.equal(document.getElementById("screen").value, "-0.44807", "Passed - Expected -0.44807");
    current_input = "0";
   });

// test tan function radians
QUnit.test( "rad tan test", function( assert )
   {
    addDigit('9');
    addDigit('0')
   trig("tan");
   assert.equal(document.getElementById("screen").value, "-1.9952", "Passed - Expected -1.9952");
    current_input = "0";
   });

// Test dividing by zeros error
QUnit.test( "div 0 error test", function( assert )
    {
    addDigit('4');
    storeOperator("/");
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "ERROR", "Passed - Expected ERROR");
    current_input = "0";
    });

// Test for exponents
QUnit.test( "carrot", function( assert )
    {
    addDigit('4');
    storeOperator("^");
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "16", "Passed - Expected 16");
    current_input = "0";
    });

