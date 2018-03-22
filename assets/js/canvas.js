function draw(targetElem) {

 var canvas = document.getElementById(targetElem);

// var canvas = document.getElementById(targetElem);
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// !! TEST!!
canvas.width = $('#' + targetElem).innerWidth()
canvas.height = $('#' + targetElem).innerHeight()

canvas.height = window.innerHeight
console.log('canvas.width and canvas.height: ' + canvas.width + ' ' + canvas.height)


var ctx = canvas.getContext('2d')
//define colors in an array | element[0] = sapphire, element[1] = ruby, element[3] = emerald
var gemColors = [['#3366CC','#003399','#333399'], ['#E3170D','#9D1309','#F22C1E'], ['#4BB74C','#517B58','#5B9C64'] ]


// Fill out control gem canvas
if (canvas.getContext){
    var c = document.getElementById('canvas-crystal-red');
    

    colors = gemColors[0]
    sketch(x,y,w,h,ctx,colors);
}
    

//   if (canvas.getContext){
    
    //Ruby's
    // var x=100; var y=100;
    // var w=200; var h=200;
    // var ctx = canvas.getContext('2d');
    // colors=['#E3170D','#9D1309','#F22C1E'];
    // sketch(x,y,w,h,ctx,colors);
    
    // Saphires's
    // var x=225; var y=350;
    // var w=400; var h=400;
    // colors=['#3366CC','#003399','#333399'];
    // sketch(x,y,w,h,ctx,colors);
    
    //Emerald's
    // var x=500; var y=100;
    // var w=200; var h=200;
    // colors=['#4BB74C','#517B58','#5B9C64'];
    // sketch(x,y,w,h,ctx,colors);

//   }


  if (canvas.getContext){

    var randomColorPicker = Math.floor(Math.random() * 3)
    console.log('x and y: ' + x + '' + y)
    colors = gemColors[randomColorPicker]
    // var x=225; var y=350;
    // var w=400; var h=400;
    

    
    console.log('x and y: ' + x + '' + y)
    
    // var x=$('#canvas-crystal-main').innerWidth()/4; var y=$('#canvas-crystal-main').innerHeight() * 2
    // var w=$('#canvas-crystal-main').innerWidth()/2; var h=$('#canvas-crystal-main').innerHeight() * 2


    var x=$('#' + targetElem).innerWidth()/4; var y=$('#' + targetElem).innerHeight()
    var w=$('#' + targetElem).innerWidth()/2; var h=$('#' + targetElem).innerHeight() * 2
    sketch(x,y,w,h,ctx,colors);

  }

 function sketch(x,y,w,h,ctx,colors){
    ctx.fillStyle=colors[0];
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+w/2,y+0.7*h);
    ctx.lineTo(x+w/2,y);
    ctx.fill();
    
    ctx.fillStyle=colors[1];
    ctx.beginPath();
    ctx.moveTo(x+w/2, y);
    ctx.lineTo(x+w/2,y+0.7*h);
    ctx.lineTo(x+w,y);
    ctx.fill();
    
    // Upper left triangle
    ctx.beginPath();
    ctx.moveTo(x+w/4,y-0.3*h);
    ctx.lineTo(x,y);
    ctx.lineTo(x+w/2,y);
    ctx.fill();
    
    // centre inverted triangle
    ctx.fillStyle=colors[2];
    ctx.beginPath();
    ctx.moveTo(x+w/4,y-0.3*h);
    ctx.lineTo(x+w/2,y);
    ctx.lineTo(x+0.75*w,y-0.3*h);
    ctx.fill();
    
    //Upper left triangle.
    ctx.fillStyle=colors[0];
    ctx.beginPath();
    ctx.moveTo(x+0.75*w,y-0.3*h);
    ctx.lineTo(x+w/2,y);
    ctx.lineTo(x+w,y);
    ctx.fill();
 }

}