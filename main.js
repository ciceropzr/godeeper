let texto = document.getElementById('text');
let lastposition = 0
let heightBody = document.body.offsetHeight;
let heightText = document.getElementById('text').scrollHeight;

function mouse_position(e) {

	let position = event.y

	if (position > lastposition) {
		move_down();
	} else {
		move_up();
	}

	lastposition = position

}

function move_down() {
	document.getElementById('text').scrollTop += 20;
}

function move_up() {
	document.getElementById('text').scrollTop -= 20;
}