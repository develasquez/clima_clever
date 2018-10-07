$(function() {
	$('.carousel').carousel();
});

function calcularBtu(largo, ancho, alto, personas, pcs, tipo, sombria, soliada, cocina) {
	d = 0;
	e = 0;
	units2 = "m&sup3;";
	units3 = 165;
	var a = parseFloat(largo);
	var b = parseFloat(ancho);
	var c = parseFloat(alto);
	var d = parseFloat(personas);
	var e = parseFloat(pcs);

	tmp2 = (d + e) * 400;
	tmp2 = Math.floor((tmp2 * 100) + .5) / 100;
	tmp = a * b * c;
	tmp = Math.floor((tmp * 100) + .5) / 100;
	//document.getElementById("cubic").innerHTML = tmp + " " + units2;
	tmp = tmp * units3;
	tmp = tmp + tmp2;
	tmp = Math.floor((tmp * 100) + .5) / 100;
	if (sombria == true && soliada == false) {
		tmp = tmp - ((tmp / 100) * 10);
	}
	if (soliada == true && sombria == false) {
		tmp = tmp + ((tmp / 100) * 10);
	}
	if (soliada == true && sombria == true) {
		tmp = tmp;
	}
	if (cocina == true) {
		tmp = tmp + 3000;
	}
	//document.getElementById("cooling").innerHTML = tmp + " BTU / " + (tmp / 4) + " Frigorías hora";

	if (tipo == 1) {
		return tmp + " " + units2;
	}

	if (tipo == 2) {
		return tmp + " BTU ";
	}
}