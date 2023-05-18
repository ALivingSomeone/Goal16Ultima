function check(){
	
	var number_of_tasks = 23;
	score = 0;
	for(var q = 1; q <= number_of_tasks; q += 1){
		
		answer = document.querySelector('input[name=' + "q" + q + ']:checked')?.value;
		
		if(answer == 1){
			score +=1;
		}
	}
	
	percent = score/number_of_tasks * 100;
	
	document.getElementById('result').innerHTML = "You have completed the task correctly by " + percent + "%" + " out of a 100%" ;

}

var num_q = 1;
var am_q = 23;
function forward(){
	document.getElementById('question' + num_q).className="class_none";
	num_q ++;
	
	if(num_q == am_q){
		document.getElementById('Proceed').innerHTML = "Check";
		document.getElementById('question' + num_q).className="class_block";
		document.getElementById("top_text").className="class_none";
	}else if (num_q > am_q){
		document.getElementById('Proceed').className="class_none";
		check();
	}
	else{
		document.getElementById('question' + num_q).className="class_block";
	}
}