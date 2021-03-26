    // if (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) <= first row
    // || (second row is the same) || (third row is the same)
    // || ...
    // || (s3. innerHTML === s5.innerHTML && ...) {
    // alert(s1.innerHTML);
    // alert("s1 value is " + s1.innerHTML)
    //      gaemOver = true;
    // }
    // else {
    //      gameOver = false;
    // }   
function check_row(x, y, z)
{
    var box1 = document.getElementById("box_0")
    var box2 = document.getElementById("box_1")
    var box3 = document.getElementById("box_2")
    var box4 = document.getElementById("box_3")
    var box5 = document.getElementById("box_4")
    var box6 = document.getElementById("box_5")
    var box7 = document.getElementById("box_6")
    var box8 = document.getElementById("box_7")
    var box9 = document.getElementById("box_8")
    var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    if (boxes[x].textContent == "") {
        return false;
    } else if (boxes[x].textContent == boxes[y].textContent &&
               boxes[y].textContent == boxes[z].textContent &&
               (boxes[x].textContent == "X" || boxes[x].textContent == "O"))
    {
        return true;
    }
}

    // check if player has a matching line
    // check if computer has matching line
function check_match()
{
    if (
        check_row(0, 1, 2) ||
        check_row(3, 4, 5) ||
        check_row(6, 7, 8) ||
        check_row(0, 3, 6) ||
        check_row(1, 4, 7) ||
        check_row(2, 5, 8) ||
        check_row(0, 4, 8) ||
        check_row(2, 4, 6))
    {
        return true;
    }
    return false;
}


    // detect if there is a winner to the game
    // if not, get active player
function gameOver()
{
    document.getElementById("state").textContent = "The winner is ";
}

function get_player()
{
    return document.getElementById("player").textContent;
}

    // 2 constant players identified by "X" and "O"
    // rotate check player after each move
    function turn(caller)
    {
        if (document.getElementById("state".textContent == "The winner is ") ||
            caller.textContent == "X" || caller.textContent == "O")
        { return; }

        var player = document.getElementById("player").textContent;
        var player1;
        if (player1 = player || player1 == "Player 1")
        {
            return true;
        } else {
            return false;
        }

        // 2 constant players identified by "X" and "O"
        if (player1)
        {
            caller.textContent = "X";
        } else {
            caller.textContent = "O";
        }

        var match = check_match();
        console.log(match)

        if (match)
        {
            gameOver();
            return;
        }

        if (player1)
        {
            document.getElementById("player").textContent = "Player 2";
        } else {
            document.getElementById("player").textContent = "Player 1";
        }
    }
    // return game results


    // reset game when done instead of reloading the page
    // I like the cleanliness of this, I don't wanna have
    // to reset the window every time I wanna play :p
    function reset()
    {
        document.getElementById("player").innerHTML = "Player 1";
        var box1 = document.getElementById("box_0")
        var box2 = document.getElementById("box_1")
        var box3 = document.getElementById("box_2")
        var box4 = document.getElementById("box_3")
        var box5 = document.getElementById("box_4")
        var box6 = document.getElementById("box_5")
        var box7 = document.getElementById("box_6")
        var box8 = document.getElementById("box_7")
        var box9 = document.getElementById("box_8")
        var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
        var i;
        for (i = 0; i < boxes.length; i++)
        {
            boxes[i].textContent = "";
        }
        document.getElementById("state").textContent = "Current Turn: ";
    }