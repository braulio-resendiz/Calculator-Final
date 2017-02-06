// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");

    current_input = "0";

});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");

    current_input = "0";

});

// Test input limit into calculator
QUnit.test( "Add input limit test", function( assert ) {
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
QUnit.test( "Add percentage test", function( assert ) {
    addDigit('4');
    addDigit('2');
    percentage(current_input);
    assert.equal(document.getElementById("screen").value, "0.42", "Passed - Expected 0.42");

    current_input = "0";

});

// Test inverse
QUnit.test( "Add inverse test", function( assert ) {
    addDigit('5');
   inverse(current_input);
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");

    current_input = "0";

});

// Test allclear
QUnit.test( "Add allclear test", function( assert ) {
    addDigit('5');
    addDigit('2');
    addDigit('8');
    addDigit('1');
   clearCurrent(current_input);
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");

    current_input = "0";

});

// Test factorial
QUnit.test( "Add factorial test", function( assert ) {
    addDigit('4');
   factorial(current_input);
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");

    current_input = "0";

});
