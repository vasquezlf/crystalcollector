$(document).ready(function() {
    // 1. Display four crystals as buttons (controller)   
    // 2. Display main crystal and assign random value when pressing start 19-120 | assign random hidden value to button  1-12
    // 3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    //  a.Your game will hide this amount until the player clicks a crystal.
    //  b. When they do click one, update the player's score counter.
    // 4. The player wins if their total score matches the random number from the beginning of the game.
    // 5. The player loses if their score goes above the random number.
    // 6. The game restarts whenever the player wins or loses.
    // 
    // Declare GLOBAL variables
    var mainCrystal = 0
    var smallCrystals = [0, 0, 0 ,0]
    var playerPoints
        
    var $controlCrystals
    var randomMainCrystalValue = 0

    var wins = 0, 
        losses = 0



    // New Game - 
    $('body').on('click', '#button-newgame' , newGame)


    function newGame () {
        randomMainCrystalValue = 0
        playerPoints = 0
        $('#menu-player-value').html(playerPoints)
        
        
        var randomSmallCrystalValue = 0
        var counter = 0
        var targetElem = ''

        //clear canvas first
        $('#canvas-crystal-main').remove()
        //create canvas container
        $('.canvas__container').html('<canvas class="canvas__crystal__main" id="canvas-crystal-main"></canvas>')
        // Draw on canvas 
        // $('#canvas-crystal-main').html(draw())

        // Draw on canvas 
        targetElem = 'canvas-crystal-main'
        
        $('#canvas-crystal-main').html(draw(targetElem))

        //2A Assign random value to main crystal between 19-120
        randomMainCrystalValue = Math.floor(Math.random()*(120-19) + 19)
        console.log(randomMainCrystalValue)
        $('#crystal-value').text(randomMainCrystalValue)  // starts with 0

        // 2B Use for loop to assign random value to small crystals using eq method to traverse thru li
        for (var i = 0; i < smallCrystals.length; i++) {
            var $controlCrystal = ''
            // counter++

            // Assign random value to sub crystals between 1-12
            randomSmallCrystalValue = Math.floor(Math.random()*(12-1) + 1)
            smallCrystals[i] = randomSmallCrystalValue
            console.log(randomSmallCrystalValue)


            // NOTE: THIS portion is for drawing crystals individually to each control. However,
            // in order to meet deadline, I will skip this for now and ask for help. I think
            // my canvas.js logic is faulty.

            // $controlCrystal = $('#control-crystals').eq(i)
            // // Print individual crystal value to UI
            // // targetElem = 'control-crystals li'
            // targetElem = $('#control-crystals li').eq(i)
            // // //draw crystal
            // $($controlCrystal).html(draw(targetElem))
            
            //////////
            
            /////////////////// THIS IS JUST FOR TESTING
            
            $controlCrystal = $('#control-crystals li').eq(i)
            console.log($controlCrystal)
            $($controlCrystal).html('<div>' + randomSmallCrystalValue + '</div>')
            //////////////////////////


            
        }
        
        console.log(smallCrystals)

    }

     // Click on crystals event listener
    $('#control-crystals').on('click', '.cell', function(event) {
        // Pick first item from unordered list
        $controlCrystals = $(this).eq(0)
        //  Extract the number from the element
        $controlCrystals = parseInt($controlCrystals.text())
        // Calculate player points
        playerPoints += $controlCrystals


        console.log($controlCrystals)
        console.log('playerPoints: ' + playerPoints)
        $('#menu-player-value').html(playerPoints)
        

        // 4. The player wins if their total score matches the random number from the beginning of the game.
        if (playerPoints === randomMainCrystalValue ) {
            console.log('YOU WIN!!')
            wins++
            $('#menu-wins').html(wins)
            alert('YOU WIN!')
            newGame()
            
        }

        else if (playerPoints > randomMainCrystalValue) {
            console.log('YOU LOSE!!')
            losses++
            $('#menu-losses').html(losses)
            alert('YOU LOSE!')
            
            newGame()
        }

    })






})