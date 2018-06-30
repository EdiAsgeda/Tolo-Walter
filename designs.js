// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").on('submit',function(value){
value.preventDefault();
height = $("#inputHeight").val();
width = $("#inputWeight").val();

makeGrid(height, width);
});

function makeGrid(t,u) {
	$('tr').remove();
    for (var i = 1; i <= t; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (var j = 1; j <=u; j++) {
            $('#table' + i).append('<td></td>');
		}    
	}
	$('td').click(function addColor(){
    //select your color value
    color = $('#colorPicker').val();        
    if($(this).attr('style')){
        $(this).removeAttr('style');
    }else{
        $(this).css('background-color:', color);
        }
    })
}
