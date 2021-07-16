var qrcode = new QRCode('outputbox');

function makeCode()
{
	var input = document.getElementById('data');
	qrcode.makeCode(input.value);
}

$('#data').on('blur',function(){
	makeCode();
}).on('keydown',function(e){
	if(e.keyCode==13)
	{
		makeCode();
	}
});
