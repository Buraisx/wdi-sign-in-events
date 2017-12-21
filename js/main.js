document.addEventListener('DOMContentLoaded',function(e){
	var signIn = document.querySelector('.signin');
	var modal = document.querySelector('.modal');
	var close = document.querySelector('.close');
	var submit = document.querySelector('.submit');
	var inputs = document.querySelectorAll('input');
	signIn.addEventListener('click',function(){
		modal.style.display = 'block';
	});

	close.addEventListener('click',function(){
		modal.style.display = 'none';
	});

	submit.addEventListener('click',function(eventObject){
		eventObject.stopPropagation();
		eventObject.preventDefault();
		inputs.forEach(function(input){
			input.classList = 'error'
		});
	});

	// inputs.forEach(function(input){
	// 	input.addEventListener('click',function(eventObject){
	// 		eventObject.stopPropagation();
	// 	});
	// });

	modal.addEventListener('click',function(event){
		if (event.target.tagName != "INPUT"){
			modal.style.display = 'none';
		}
	});
});