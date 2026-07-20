window.onload = init;

function init()
{  
    console.log("Function init() called here.")
    textReplace();
}


function textReplace()
        {
            //alert("New Event!");
            console.log("textReplace began");
            // Get the current element
            var currentNode = document.querySelector('#hello-text');

            // Create a new element
            var newNode = document.createElement('div');

            // Add ID and content
            newNode.id = 'salutations';
            newNode.innerHTML = '<div>' +
        '<table width="50%" border="1">' +
            '<tr width="33%">' +
                '<div align="center">' +
                '<th id="special">' +
                   '<p>Upcoming Events</p>' +
                '</th>' +
                '<th id="special">' +
                    '<p>Description</p>' +
                '</th>' +
                '<th id="special">' +
                    '<p>Date</p>' +
                '</th>' +
                '</div>' +
            '</tr>' +
            '<tr width="33%">' +
                '<div align="center">' +
                '<td align="left" id="special">' +
                   '<p>Grand Theft Auto IV Launch</p>' +
                '</td>' +
                '<td id="special">' +
                    '<p>I am looking forward to the next game released by Rockstar Games, releasing this coming Fall 2026.</p>' +
                '</td>' +
                '<td align="center" id="timer-container">' +
                    '<p id="live-timer">00 days 00 minutes</p>' +
                '</td>' +
                '</div>' +
            '</tr>' + 
            '<tr width="33%">' +
                '<div align="center">' +
                '<td align="left" id="special">' +
                   '<p>Graduation</p>' +
                '</td>' +
                '<td id="special">' +
                    '<p>I am on track to graduate with my Bachelors degree in Computer Science in the Fall of 2028</p>' +
                '</td>' +
                '<td align="center">' +
                    '<p>Fall of 2028</p></p>' +
                '</td>' +
                '</div>' +
            '</tr>' + 
        '</table>' +
    '</div>';

            // Replace the current node with the new node
            currentNode.parentNode.replaceChild(newNode, currentNode);
            updateCountdown();
            const timerInterval = setInterval(updateCountdown, 60000); // Updates every 60 seconds

            }
    function updateCountdown() {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;

            // Stop the timer if the deadline has passed
            if (timeDifference < 0) {
                document.getElementById('live-timer').textContent = "00d 00m";
                clearInterval(timerInterval);
                return;
            }

            // Calculate full days remaining
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            // Calculate remaining minutes after days are removed
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60));

            // Format with leading zeros
            const dStr = String(days).padStart(2, '0');
            const mStr = String(minutes).padStart(2, '0');

            // Display the output
            document.getElementById('live-timer').textContent = `${dStr} days and ${mStr} minutes`;
            }


    function dateTime()
        {
            //Dates and functions
            let now = new Date();
            let eventDay = new Date(2026, 10, 19, 0, 0, 0);
            console.log("Current date and time is " + now);
            console.log("Past date and time is " + eventDay);
            console.log("Time difference is " + (now.getMinutes() - eventDay.getMinutes()));
        }
        // Set target to November 11, 2026 at midnight
        const targetDate = new Date("2026-11-19T00:00:00").getTime();
    
    