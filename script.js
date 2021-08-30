window.onload = function() {
    var matrix = document.querySelector(".matrix");
    var rows = document.querySelectorAll('.row');
    var num_rows = rows.length;
    var time = 1000;
    for(let i = 0; i < num_rows; i++){
        setTimeout(function () {
            rows[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            rows[i].style.border = "1px solid rgba(255, 0, 0, 0.2)";
            rows[i].style.borderRadius = "15%";
        }, time);
        time += 1000;
    }

    // after the all the rows have been highlighted , shift it to top left
    setTimeout(function() {
        matrix.style.transform = 'translate(0%, 0%)';
        matrix.style.top = "5%";
        matrix.style.left = "10%";
        matrix.innerHTML += "<p style='color: blue; margin: auto; position: fixed;" +
                            " left: 35%;'> 4 X 4 </p>"
    }, time);

    time += 1000;
    
    // now display 2 x 8 block in the center
    var matrix_two = document.querySelector(".matrix-two");
    var blocks = document.querySelectorAll(".block-two");
    var num_blocks = blocks.length;
    setTimeout(function() {
        
        matrix_two.style.top = "50%";
        matrix_two.style.left = "50%";
        matrix_two.style.transform = "translate(-50%, -50%)";
        matrix_two.style.display = "inline";

    }, time);

    
    // now change background of two blocks
    for(let i = 0; i < num_blocks; i++){
        setTimeout(function () {
            blocks[i].style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
            blocks[i].style.border = "1px solid rgba(0, 255, 0, 0.2)";
            blocks[i].style.borderRadius = "15%";
        }, time);
        time += 1000;
    }

    // put 2x 8 block at bottom left
    setTimeout(function() {
        matrix_two.style.transform = 'translate(0%, 0%)';
        matrix_two.style.top = "65%";
        matrix_two.style.left = "10%";
        matrix_two.innerHTML += "<p style='color: green; margin: auto; position: fixed;" +
                            " left: 35%;'> 2 X 8 </p>"
    }, time);

    time += 1000;
    
    // now display 8 x 2 block in the center
    var matrix_three = document.querySelector(".matrix-three");
    var blocks_three = document.querySelectorAll(".block-three");
    var num_blocks_three = blocks_three.length;
    setTimeout(function() {
        
        matrix_three.style.top = "50%";
        matrix_three.style.left = "50%";
        matrix_three.style.transform = "translate(-50%, -50%)";
        matrix_three.style.display = "inline";

    }, time);

    // now change background of eight blocks
    for(let i = 0; i < num_blocks_three; i++){
        setTimeout(function () {
            blocks_three[i].style.backgroundColor = 'rgba(128, 0, 128, 0.2)';
            blocks_three[i].style.border = "1px solid rgba(128, 0, 128, 0.2)";
            blocks_three[i].style.borderRadius = "15%";
        }, time);
        time += 1000;
    }

     // put 8 x 2 block at bottom 
     setTimeout(function() {
        matrix_three.style.transform = 'translate(-50%, 0%)';
        matrix_three.style.top = "70%";
        matrix_three.style.left = "50%";
        matrix_three.innerHTML += "<p style='color: purple; margin: auto; position: fixed;" +
                            " left: 35%;'> 8 X 2 </p>"
    }, time);

    time += 1000;

    // now display 16 x 1 block in the center
    var matrix_four = document.querySelector(".matrix-four");
    setTimeout(function() {
        matrix_four.style.top = "50%";
        matrix_four.style.right = "50%";
        matrix_four.style.transform = "translate(50%, -50%)";
        matrix_four.style.display = "inline";
    }, time);

    time += 1000;

    setTimeout(function () {
        matrix_four.style.backgroundColor = 'rgba(0, 0, 255, 0.2)';
        matrix_four.style.border = "1px solid rgba(0, 0, 255, 0.2)";
        matrix_four.style.borderRadius = "15%";
    }, time);

    time += 1000;

     // put 16 x 1 block at bottom right
    setTimeout(function() {
        matrix_four.style.transform = 'translate(0%, 0%)';
        matrix_four.style.top = "65%";
        matrix_four.style.right = "10%";
        matrix_four.innerHTML += "<p style='color: blue; margin: auto; position: fixed;" +
                            " left: 35%;'> 16 X 1 </p>"
    }, time);

    time += 1000;

    // now display 1 x 16 block in the center
    var matrix_five = document.querySelector(".matrix-five");
    var blocks_five = document.querySelectorAll(".block-five");
    var num_blocks_five = blocks_five.length;
    setTimeout(function() {
        matrix_five.style.top = "50%";
        matrix_five.style.right = "50%";
        matrix_five.style.transform = "translate(50%, -50%)";
        matrix_five.style.display = "inline";
    }, time);

    // now change background of sixteen blocks
    for(let i = 0; i < num_blocks_five; i++){
        setTimeout(function () {
            blocks_five[i].style.backgroundColor = 'rgba(255, 255, 0, 0.2)';
            blocks_five[i].style.border = "1px solid rgba(255, 255, 0, 0.2)";
            blocks_five[i].style.borderRadius = "15%";
        }, time);
        time += 500;
    }

    // shift 1 x 16 block to the top right
     setTimeout(function() {
        matrix_five.style.transform = 'translate(0%, 0%)';
        matrix_five.style.top = "5%";
        matrix_five.style.right = "10%";
        matrix_five.innerHTML += "<p style='color: yellow; margin: auto; position: fixed;" +
                            " left: 35%;'> 1 X 16 </p>"
    }, time);




}