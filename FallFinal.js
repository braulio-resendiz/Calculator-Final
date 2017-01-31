///
/* TODO: 1. Add these new functions: percentage, inverse, factorial, square and square root
2. Bootstrap it to make it pretty! 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
4. Fix divide by 0 errors! 5. Add the ability to clear the current input, but not memory.
6. Challenge: Add trig functions (in radian AND degree mode) 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
8. Super Challenge: Add ( and ) buttons that work! 9. Super Duper Challenge: Add exponents (negatives too!)
*/
var mode = "Rad";
var current_input = "0";
var memory = "0";
var operator = 0;

/**
 * [[Helper function for displaying the current input]]
 * @returns {string} [[Description]]
 */
function inputLimit()
    {
    if (inputlength > 11)
        {
        return "Error"
        }
    else
        {
        displayCurrentInput();
        }
    }

/**
 * [[Display current input]]
 */
function displayCurrentInput()
    {
    document.getElementById('screen').value = current_input;
    }

/**
 * Adds a digit to the current input
 * @param {[[Type]]} dig [[Digit]]
 */
function addDigit(dig)
    {
        if (current_input.length < 10)
        {
            if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1))
                {
                current_input = dig;
                }
            else
                {
                current_input = current_input + dig;
                }
        }
    displayCurrentInput();
    }

/**
 * [[Adds a decimal to the current input]]
 */
function addDecimal()
    {
        if (current_input.length == 0)
            {
            //no leading ".", use "0."
            current_input = "0.";
            }
        else
            {
            // First make sure one doesn't exist
            if (current_input.indexOf(".") == -1)
                {
                current_input = current_input + ".";
                }
            }
    displayCurrentInput();
    }

/**
 * [[Clears everything.]]
 */
function allClear()
    {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    }
//
/**
 * [[Stores the last operator pushed for multiply, divide, add, or subtract.]]
 * @param {[[Functions]]} op [[Operations]]
 */
function storeOperator(op)
    {
        if (op.indexOf("*") > -1)
            {
            operator = 1;
            }; //codes for
        if (op.indexOf("/") > -1)
                {
            operator = 2;
            }; // slash (divide)
        if (op.indexOf("+") > -1)
            {
            operator = 3;
            }; // sum
        if (op.indexOf("-") > -1)
            {
            operator = 4;
            }; // difference
        if (op.indexOf("^") > -1)
            {
            operator = 5;
            }; // exponents
    memory = current_input; //store value
    current_input = "0";
    displayCurrentInput();
    }
// Calculate using operator, the memory and what is current
/**
 * [[Description]]
 */
function calculate()
    {
        if (operator == 1)
            {
            current_input = eval(memory) * eval(current_input);
            };
        if (operator == 2)
            {
            current_input = eval(memory) / eval(current_input);
            var initial_value = current_input.toString();
            if (initial_value == "Infinity")
                {
                current_input = "ERROR"
                };
            };
        if (operator == 3)
            {
            current_input = eval(memory) + eval(current_input);
            };
        if (operator == 4)
            {
            current_input = eval(memory) - eval(current_input);
            };
        if (operator == 5)
            {
            current_input = Math.pow(eval(memory), eval(current_input));
            };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    }
// Change the sign of the current input
/**
 * [[Description]]
 */
function changeSign()
    {
    current_input = current_input * -1
    displayCurrentInput();
    }
// Clear the current input back to 0
/**
 * [[Description]]
 */
function clearCurrent()
    {
    current_input = "0";
    displayCurrentInput();
    }
// Change the current input to a percentage
/**
 * [[Description]]
 */
function percentage()
    {
    current_input = current_input / 100
    displayCurrentInput();
    }
// Calculate the factorial of the current input
/**
 * [[Description]]
 * @param {[[Type]]} num [[Description]]
 */
function factorial(num)
    {
        for (var i = current_input - 1; i >= 1; i--)
            {
            current_input *= i;
            }
    displayCurrentInput();
    }
// Calculate the square of the current input
/**
 * [[Description]]
 */
function square()
    {
    current_input = current_input * current_input
    displayCurrentInput();
    }
// Calculate the square root of the current input
/**
 * [[Description]]
 */
function squareRoot()
    {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
    }
// Calculate the inverse of the current input
/**
 * [[Description]]
 */
function inverse()
    {
    current_input = 1 / current_input
    displayCurrentInput();
    }

/**
 * [[Description]]
 * @param {[[Type]]} sign [[Description]]
 */
function trig(sign)
    {
        if (mode == "Deg")
            {
            current_input = (Math.PI / 180) * current_input;
            }
        if (sign == "sin")
            {
            current_input = Math.sin(current_input);
            }
        else if (sign == "cos")
            {
            current_input = Math.cos(current_input);
            }
        else if (sign == "tan")
            {
            current_input = Math.tan(current_input);
            }
    displayCurrentInput();
    }

/**
 * [[Description]]
 * @param {[[Type]]} button [[Description]]
 */
function toggle(button)
    {
        if (document.getElementById("1").value == "Rad")
            {
            document.getElementById("1").value = "Deg";
            mode = "Deg"
            }
        else if (document.getElementById("1").value == "Deg")
            {
            document.getElementById("1").value = "Rad";
            mode = "Rad"
            }
    }
