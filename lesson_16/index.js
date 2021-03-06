const n = 10;

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const numbers = document.getElementById('numbers');
const second = document.getElementById('second');
const seconds = document.getElementById('seconds');

for (let j = 1; j <= n; j += 1) {
	let span = document.createElement('span');
	span.setAttribute('id', `span_${j}`);
	span.appendChild(document.createTextNode(j));
	numbers.insertBefore(span, numbers.children[j]);
	if (j < n){
		numbers.insertBefore(document.createTextNode(', '), numbers.children[j + 1])
	}
}

let num = 0;
let counter = 0;
let interval;
let speed = 1000;

second.appendChild(document.createTextNode(num));
seconds.appendChild(document.createTextNode('s'));

function count () {
	let interval = setInterval(function() {
		num += 1;
		second.innerHTML = num;
		if (num === 1) {
			seconds.innerHTML = '';
		} else {
			seconds.innerHTML = 's';
		}

		if (counter < n) {
			counter += 1;
			document.getElementById(`span_${counter}`).style.backgroundColor = 'pink';
		} else if (counter === n) {
			counter += n + 1;
			document.getElementById(`span_${counter - n - 1}`).style.backgroundColor = 'aqua';
			counter -= 1;
		} else if (counter > n + 1) {
			counter -= 1;
			document.getElementById(`span_${counter - n}`).style.backgroundColor = 'aqua';
		} else if (counter === n + 1) {
			counter = 0;
			document.getElementById(`span_${counter + 1}`).style.backgroundColor = 'pink';
			counter += 1;
		}
	}, speed)
	start.setAttribute('disabled', 'true');

	stop.addEventListener('click', function(){
		clearInterval(interval);		
		start.removeAttribute('disabled');
		second.innerHTML = 0;
		num = 0;
	})

	pause.addEventListener('click', function() {
		clearInterval(interval);
		start.removeAttribute('disabled');
	})
}
start.addEventListener('click', count);


