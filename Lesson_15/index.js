function init(arr, n) {
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	li.className = arr.className;

	for (key in arr.attributes) {
		li.setAttribute(key, arr.attributes[key]);
	}
	 li.innerHTML = arr.content;
	 let parentElem = document.body;
	 parentElem.appendChild(ul)

	 for (let i = 0; i < n; i++) {	
		ul.appendChild( li.cloneNode(true))
    }
}
init ({ className: 'class', attributes: { 'data-name': 'Anatoliy'}, content: 'Some Text' },1 );


 let btn = document.getElementById("btn")
  	btn.addEventListener("click", function listen() {
  		let elementsUl =  document.querySelectorAll('ul')   		
  		if (elementsUl[0]) {
	  		for (let i = 0; i < elementsUl.length; i++ ) {	  			
	  			elementsUl[i].remove();  			
	  		}
	  		//alert( "true");
	  		return true;
  		} else
  		//alert( "false");
  		return false;	
   
  });