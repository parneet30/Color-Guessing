var numberOfSquares = 6
var colors = []
var pickedColor
var squares = document.querySelectorAll(".square")
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll(".mode")

init()

function init(){
    setUpModeButtons()
    setUpSquares()
    reset()
}

function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
    
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6
    
            reset()
        })
    }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.background
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor)
                h1.style.background = clickedColor
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numberOfSquares)
    //pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""

    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display="block"
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "#9932CC"
}



resetButton.addEventListener("click", function () {
    reset()
})

function changeColors(color) {
    for (var s of squares) {
        s.style.background = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to attay
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}




















//Extra Info








// easyBtn.addEventListener("click",function(){
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.add("selected")
//     numberOfSquares=3
//     colors=generateRandomColors(numberOfSquares)
//     pickedColor=pickColor()
//     colorDisplay.textContent=pickedColor

//     for(var i=0;i<squares.length;i++)
//     {
//         if(colors[i])
//         {
//             squares[i].style.background=colors[i]
//         }else{
//             squares[i].style.display="none"
//         }
//     }
// })

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected")
//     numberOfSquares=6
//     colors=generateRandomColors(numberOfSquares)
//     pickedColor=pickColor()
//     colorDisplay.textContent=pickedColor

//     for(var i=0;i<squares.length;i++)
//     {
//        squares[i].style.background=colors[i]
//        squares[i].style.display="block"
//     }
// })