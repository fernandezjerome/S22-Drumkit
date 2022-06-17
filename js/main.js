// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

(() => {
    console.log('music player script file');

    let theKeys = document.querySelectorAll('.key');

    function logKeyboardKeyCode(event) {
        // event is an object that gets generated whenever the user presses a keyboard key -> it has lots of useful information inside of it (all about the event itself)

        // find the audio element that matches the keyboard keyCode (which one did the user press?)

        // querySelector can take any valid CSS selector, including attributes
        let targetAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
            targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);

        // the return statement is like an ejector button. kills the code at this point, and nothing else will run

        // the if statement evaluates to true or false; if the condition is true, then the return statement is executed which stops (exits) the function. Nothing else will run below that line.

        // this will kill any errors, and make SURE that there's a matching audio element to play

        // the ! is a NOT logical operator (look on MDN for the definition) -> it means targetAudio is null / doesn't exist
        if (!targetAudio) { return }

        targetAudio.currentTime = 0;
        targetAudio.play();

        // the classList is built-in JavaScript interface that lets you access the CSS classes on any element - you can add, remove, toggle CSS classes dynamically, which changes how they look on the page
        targetDiv.classList.add('playing');

        //debugger;
    }

    // the 'this' keyword refers to the div that just finished transitioning (animating)
    function removeHighlight() { this.classList.remove('playing'); }

    // add some event handling for keyboard events
    window.addEventListener('keyup', logKeyboardKeyCode);

    // transitionend is fired whenever a CSS transition completes, which tells us that we can now remove the highlight we added when we pressed the keyboard key
    theKeys.forEach(key => key.addEventListener('transitionend', removeHighlight));
    
})();