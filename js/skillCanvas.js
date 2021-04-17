let can = document.getElementById('history').getContext('2d');
let x = 0, y = 150;
let iKnown = [
	['C++'], //2013
	['Cryptography'], //2014
	[], //2015
	['Java'], //2016
	['Linux'], //2017
	['Assembler', 'AVR', 'HTML/CSS'], //2018
	['Pure C', 'Docker'], //2019
	['Python', 'Bottle', 'Flask', 'Django'], //2020
	['NodeJS', 'MongoDB', 'AngularJS', 'K8S', 'Ansible'], //2021
]
let dx = document.getElementById('history').width/(iKnown.length+1);

can.font = "16px Emerald Grey";

function yearLine(){
	can.moveTo(x+=3, y);
	can.lineTo(x+=dx, y);
	can.stroke();
}
function yearCircle(){
	can.beginPath();
	can.arc(x+=3, y, 3, 0, 360);
	can.stroke();
}
function yearText(year){
	can.textAlign = "center";
	can.fillText(year, x, y+18);
}
function yearSkill(index){
	can.textAlign = "start";
	let skillList = iKnown[index];
	let tempY = y-5

	for(el of skillList.reverse()){
		can.fillText(el, x+3, tempY);
		tempY -= 18;
	}

	if(skillList.length > 0){
		can.moveTo(x, y-3);
		can.lineTo(x, tempY);
		can.stroke();
	}
}

can.moveTo(x, y);
can.lineTo((x+=35), y);
can.stroke();

for(i=0; i<iKnown.length; i++){
	yearCircle();
	yearText(2013+i);
	yearSkill(i);
	yearLine();
}