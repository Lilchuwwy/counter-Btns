let count = 0; // Declares a variable 'count' and initializes it with the value 0.

document.getElementById("decreaseBtn").onclick = function() {
    // Adds an event listener to the 'decreaseBtn' button's click event.
    // When clicked, it executes the following function:
    count -= 1; // Decrease the 'count' variable by 1.
    document.getElementById("countLabel").innerHTML = count;
    // Updates the content of the element with the id 'countLabel' to display the current 'count' value.
}

document.getElementById("increaseBtn").onclick = function() {
    // Adds an event listener to the 'increaseBtn' button's click event.
    // When clicked, it executes the following function:
    count += 1; // Increase the 'count' variable by 1.
    document.getElementById("countLabel").innerHTML = count;
    // Updates the content of the element with the id 'countLabel' to display the current 'count' value.
}
