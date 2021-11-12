let regExp1=/^(\S+)[,\s]\s*(\S+)\s*$/;
let regExp2=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(^[^\d\_])(?=.*[A-Z])(?=.*[a-z]).*/;
let regExp3=/(\+375[\(]44[\)]\d{7})|(\+37544\d{7})|(\+375[\(]44[\)]\d{3}[\-]\d{2}[\-]\d{2})|(\80[\(]44[\)]\d{7})|(\8044\d{7})|(\80[\(]44[\)]\d{3}[\-]\d{2}[\-]\d{2})/;
let regExp4=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

let inputs=document.querySelectorAll('input[data-rule]');
for(let input of inputs){
	input.addEventListener('blur', function(){
			let rule=this.dataset.rule;
			let value=this.value;
			let check;
		switch(rule){
			case 'text': check=regExp1.test(value);
			(check===true)? console.log(value) : alert('Проверьте введённые данные');
			break;
			case 'tel': proverkaNomera(value);
			break;
			case 'email': check=regExp4.test(value);
			(check===true)? console.log(`Соответсвует требованиям${value}`) : alert('Проверьте введённые данные');
			break;
	}

	})
}
function proverkaNomera(val) { 
	var re = /^\d{11}$/;
	if (re.test(val) == false) {
		re = /^\d(\s\(\d{3}\)\s|\(\d{3}\))\d{3}-\d{2}-\d{2}$/;
		if (re.test(val) == false) {
			re = /^\+375(\d{2}|\(\d{2}\))\d{7}$/;
			if (re.test(val) == false) {
				re = /^\+375\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;
				if (re.test(val) == false) {
					alert('Проверьте введённые данные');
				}else console.log(`Соответсвует требованиям${val}`);
			}else console.log(`Соответсвует требованиям${val}`);
		}else console.log(`Соответсвует требованиям${val}`);
	}else console.log(`Соответсвует требованиям${val}`);
}