var arrQuestion = new Array();
function question(){
}

function question(id, question, number, option1, option2, option3, option4, answer){
	this.id = id;
	this.question = question;
	this.number = number;
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.option4 = option4;
	this.answer = answer;
}

question.prototype.sayHello = function(){
	alert("aaaaa");
}

function init(){	
	var qs = new question(1,"question 1",1,"a1","b1","c1","d1",1);
	arrQuestion.push(qs);
	qs = new question(2,"question 2",3,"a2","b2","c2","d2",4);
	arrQuestion.push(qs);
	//alert(arrQuestion.length);
	//alert(arrQuestion[1].answer);
}