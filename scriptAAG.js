    <script>
        //audio
        function playMusic() {
            var audio = document.getElementById("audio");
            audio.play();
        }
        //global variables
        let numberOfFaces = 5;
        let level = 1
        const currentLevel = document.getElementById("currentLevel")
        const theLeftSide = document.getElementById("leftSide");
        const theRightSide = document.getElementById("rightSide");
        const gameContainer = document.getElementById("gameContainer")
        window.addEventListener("load", generateFaces);
        // global audio
        const clickSound = document.querySelector("#clickFace");
        const gameOverSound = document.querySelector("#gameOverSound");

        function generateFaces() {
            for (let i = 0; i < numberOfFaces; i++) {

                let face = document.createElement("img");
                face.src = "../Images/AlexaAddictingGame.png";

                let randomTop = Math.floor(Math.random() * 400) + 1;
                let randomLeft = Math.floor(Math.random() * 400) + 1;

                face.style.top = randomTop + 'px';
                face.style.left = randomLeft + 'px';

                theLeftSide.appendChild(face);
            }
            const leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild);
            theRightSide.appendChild(leftSideImages);

            theLeftSide.lastChild.addEventListener("click", nextLevel)
            gameContainer.addEventListener("click", gameOver)

            //audio
            theLeftSide.lastChild.addEventListener('click', ()=> {
            clickSound.play();
        })
        
        function nextLevel() {
            event.stopPropagation();
            numberOfFaces += 5;
            level +=1;
            
            while (theLeftSide.lastElementChild) {
                theLeftSide.removeChild(theLeftSide.lastElementChild);
            }
            while (theRightSide.lastElementChild) {
                theRightSide.removeChild(theRightSide.lastElementChild);
            }
            generateFaces();
        }

        function gameOver() {
            alert('GAME OVER!')
            theLeftSide.lastChild.removeEventListener("click", nextLevel)
            document.body.removeEventListener('click', gameOver)
        }
        currentLevel.textContent = level

        function displayLevel() {
            document.appendChild(currentLevel)
        }
    }
    </script>
