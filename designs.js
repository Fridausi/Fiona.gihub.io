// Select color input
// Select size input

//
var height, width, color;

// When size is submitted by the user, call makeGrid()





$('#sizePicker').submit(function (event) {




   
event.preventDefault();



  

 var height = $('#inputHeight').val();



   
var width = $('#inputWeight').val();



   
makeGrid(height, width);

   

paint();


});





function makeGrid(x, y) {



  

 $('tr').remove();



   
for (var i = 1; i <=x; i++) {



       
$('#pixelCanvas').append('<tr></tr>');



      
 for (var j = 1; j <=y; j++) {



          
 $('tr').filter(':last').append('<td></td>');

      
 }

   
}



}





function paint() {

   
var col = $('td');

    
col.click(function () {

    
var color = $('#colorPicker').val();

    
if ($(this).attr('style')) {

       
 $(this).removeAttr('style');

 
    
} else {

       
 $(this).attr('style', 'background-color:' + color);

    
 }

   
});


}
 