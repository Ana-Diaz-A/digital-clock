const $time = document.querySelector('.time');

function digitalClock(){ // Function to display time
    let clock = new Date(), // Get current date/time
    date = clock.getDate(), // Get date
    month = clock.getMonth(), // Get month
    year = clock.getFullYear(), // Get year
    day = clock.getDay(); // Get day of the week

    let timeString = clock.toLocaleTimeString(); // Format time string
    $time.innerHTML = timeString; // Set time inner HTML

}
setInterval(() => {
    digitalClock()
}, 1000);