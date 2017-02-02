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
 * @returns {string} [It doesn't let the user to go beyond 12 characters]
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
 * @param {String} dig [Digit]
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
 * [Adds a decimal to the current input]
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
 * [Clears everything]
 */
function allClear()
    {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    }

/**
 * [[Stores the last operator pushed for multiply, divide, add, or subtract.]]
 * @param {Functions} op [Operations]
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
/**
 * [Calculate using operator, the memory and what is current]
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
            // If divide by 0 give an ERROR message
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

/**
 * [Change the sign of the current input]
 */
function changeSign()
    {
    current_input = current_input * -1
    displayCurrentInput();
    }

/**
 * [Clear the current input back to 0]
 */
function clearCurrent()
    {
    current_input = "0";
    displayCurrentInput();
    }

/**
 * [Change the current input to a percentage]
 */
function percentage()
    {
    current_input = current_input / 100
    displayCurrentInput();
    }

/**
 * [Calculate the factorial of the current input]
 * @param {Function} num [Numerical value]
 */
function factorial(num)
    {
        for (var i = current_input - 1; i >= 1; i--)
            {
            current_input *= i;
            }
    displayCurrentInput();
    }

/**
 * [Calculate the square of the current input]
 */
function square()
    {
    current_input = current_input * current_input
    displayCurrentInput();
    }

/**
 * [Calculate the square root of the current input]
 */
function squareRoot()
    {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
    }

/**
 * [Calculate the inverse of the current input]
 */
function inverse()
    {
    current_input = 1 / current_input
    displayCurrentInput();
    }

/**
 * [It's to calculate the current input to the respective trig function]
 * @param {Function} sign [It's to repersent which trig function is being used]
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
 * [It's a toggle switch where it switches the mathmatics from Radians to Degree]
 * @param {Object} button [It switches to Degree from Radians]
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
