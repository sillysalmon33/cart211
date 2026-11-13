/**
 * Title of Project
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let MyCanvas

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    MyCanvas = createCanvas(900, 600)
    MyCanvas.parent('canvas_container');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255,255,255)

    DrawLittleGuy()
}

/**
 * draws a little guy
 */
function DrawLittleGuy() {
    //main head
    push() 
    fill(255,255,255)
    circle(250,250,100)
    pop()
    //eyes
    push()
    fill(0,0,0)
    circle(220,230,80)
    circle(280,230,80)
    pop()
    //mouth
    push()
    line(230,280,270,280)
    pop()
    //iris'
    push()
    fill(255,255,255)
    noStroke()
    circle(200,220,50)
    circle(270,220,50)
    pop()
}