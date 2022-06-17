// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

(() => {
    console.log('music player script file');
    
    function logkeyboardKeyCode(event){
        //event is an object hat gets generated whenever the user press a keyboard key.
        // it has lets of useful information inside of it (all about the event list)
        
        
        //find the audio element that maches the keyboard keycode ( which one did the user press

        //querSelector can take any valid CSS selector, including attributes
        let targetAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

        
        //the if statemenet evaluats to true or false; if the condition is true, then the return statement is 
        if(targetAudio === null) { return}

        //the ! is a NOT logical operator (look on Mon for the definition) --- if means targetAudio is null / doesn't exit
        targetAudio.currentTime = 0;
        targetAudio.play();

        //debugger;

    }

    // add some event handling for keyboard event
    window.addEventListener('keyup', logkeyboardKeyCode)
})();
