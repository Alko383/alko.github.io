const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000);

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

if(document.querySelector("#countdown")){
    var timeleft = 2;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "KACHOW!";
        

        // Hide h1 and h2 elements
        var h1Elements = document.querySelectorAll("h1");
        var h2Elements = document.querySelectorAll("h2");

        h1Elements.forEach(function(h1) {
            h1.style.display = "none";
        });
        h2Elements.forEach(function(h2) {
            h2.style.display = "none";
        });

        var a = function($a, speed){
            var audio1 = new Audio('/sounds/kachow.mp3'); 
            var audio2 = new Audio('/sounds/vroom.mp3'); 
            var audio3 = new Audio('/sounds/burn.mp3'); 
        
            // Play the audio as soon as the animation starts
            audio2.play();
        
            $a.animate({
                "right": "100%"
            }, speed);

            $('#countdown').on('click', function() {
                audio1.play();
            });
        
            // Check if the audio is playing or if there's an error
            audio1.onplaying = function() {
                console.log('Audio is playing');
            };
            audio1.onerror = function() {
                console.log('There was an error playing the audio');
            };

            audio2.onplaying = function() {
                console.log('Audio is playing');
            };
            audio2.onerror = function() {
                console.log('There was an error playing the audio');
            };
        };
        
        $(function(){
            a($("#a"), 20000);
        });
        
        // Add a click event listener to the backButton
        document.getElementById('backButton').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    
    } else {
        document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
    }, 1000);
}


