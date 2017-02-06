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
QUnit.test( "Square Root test", function( assert ) {
    addDigit('4');
    addDigit('9');
    squareRoot(current_input);
    assert.equal(document.getElementById("screen").value, "7", "Passed - Expected 7");
    current_input = "0";
});
QUnit.test( "Square test", function( assert ) {
    addDigit('7');
    square(current_input);
    assert.equal(document.getElementById("screen").value, "49", "Passed - Expected 49");
    current_input = "0";
});QUnit.test( "switch sign test", function( assert ) {
    addDigit('7');
    changeSign(current_input);
    assert.equal(document.getElementById("screen").value, "-7", "Passed - Expected -7");
    current_input = "0";
});
