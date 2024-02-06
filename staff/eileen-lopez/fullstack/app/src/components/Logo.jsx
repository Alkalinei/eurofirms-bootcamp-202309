import React from 'react'

function Logo() {
    console.log('Logo')

    const horseAudioRef = React.useRef()
    const tweetAudioRef = React.useRef()

    function handleMouseOverLogo() {
        // console.log('mouse over!')

        // const horseAudio = document.querySelector('#horse-audio')
        // horseAudio.play()

        // horseAudioRef.current.play()

        tweetAudioRef.current.play()
    }

    return <div>
        <svg version="1.1"
            width="30" height="30"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={handleMouseOverLogo}>

            <rect width="30" height="30" fill="tomato" />

            <circle cx="15" cy="15" r="8" fill="yellow" />

            <polygon points="25,6 5,40 45,40" fill="dodgerblue" />
        </svg>

        {/* <audio id="horse-audio" controls ref={horseAudioRef}>
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
           
        </audio> */}

        <audio id="tweet-audio" controls ref={tweetAudioRef}>
            <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.ogg" type="audio/ogg" />
            <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.mp3" type="audio/mpeg" />
            
        </audio>
    </div>
}

export default Logo