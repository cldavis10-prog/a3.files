let results = []; //Stores Valid calculation results
let again = true; // Controls whether the calculator continues

while (again) { // Keep asking for calculations until the user clicks Cancel
    let x = prompt("Enter the first number:"); //promts first number
    let y = prompt("Enter the second number:"); //prompts second number
    let operator = prompt("Enter an operator (+, -, *, /, %):"); //prompts operator
    let result;

    if (isNaN(x) || isNaN(y)) {  //checks if the numbers are not numbers
        result = "Error: x and y must be numbers."; //error message
    } else {
        x = Number(x);   // turns the string input into numbers
        y = Number(y);

        switch (operator) { // performs the selected operation
            case "+": result = x + y; break;
            case "-": result = x - y; break;
            case "*": result = x * y; break;
            case "/": result = x / y; break;
            case "%": result = x % y; break;
            default: result = "Error: Invalid operator."; // error message if anything but a number is entered
        }

        if (typeof result == "number" && !isNaN(result)) // saves only valid numeric results
            results.push(result);
    }
    
    document.write("<table>"); //creates table
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>"); //creates the table headings
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"); //adds the current calculation to the table
    document.write("</table>"); // close table

    again = confirm("Click OK to continue or Cancel to exit."); // prompts user for more calculations
}

if (results.length > 0) {  //only include valid results in the summary
    let total = 0; // calculate total

    for (let i = 0; i < results.length; i++)
        total += results[i]; //add all valid results together

    //find min, max, and average
    let min = Math.min(...results);
    let max = Math.max(...results);
    let avg = total / results.length;

    document.write("<table>"); //summary table
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>"); //summary headings
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");//summary values
    document.write("</table>"); //close table
} else {
    document.write("<p>No valid results were entered.</p>"); //print if no valid calculations occured
}