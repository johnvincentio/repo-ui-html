
// DRAG

function dragstartHandler(ev) {
	console.log('ondragStart ', ev);
	ev.currentTarget.style.border = 'dashed'; // Change the source element's background color to signify drag has started
	ev.dataTransfer.setData('text', ev.target.data_id); 	// Add the id of the drag source element to the drag data payload so it is available when the drop event is fired
	ev.dataTransfer.effectAllowed = 'move';
}

function dragHandler(ev) {
	// console.log('ondrag');
}

function dragendHandler(ev) {
	console.log('ondragEnd');
	ev.target.style.border = 'solid black';		// Restore source's border
	ev.dataTransfer.clearData();		// Remove all of the drag data
}

// DROP

function dragEnterHandler(ev) {
	console.log('ondragEnter ', ev);
	const { style } = ev.currentTarget;
	style.background = 'lightblue';
	style.height = '60px';
}

function dragoverHandler(ev) {
	// console.log('ondragOver');
	// ev.currentTarget.style.background = 'lightblue'; 	// Change the target element's border to signify a drag over event has occurred
	ev.preventDefault();
}

function dragLeaveHandler(ev) {
	console.log('ondragleave');
	const { style } = ev.currentTarget;
	style.height = '5px';
}

function dropHandler(ev) {
	console.log('Drop ', ev);
	ev.preventDefault();
	const id = ev.dataTransfer.getData('text'); 	// Get the id of drag source element (that was added to the drag data payload by the dragstart event handler)
	if (id == 'src_move' && ev.target.id == 'dest_move') { // Only Move the element if the source and destination ids are both "move"
		ev.target.appendChild(document.getElementById(id));
	}
	if (id == 'src_copy' && ev.target.id == 'dest_copy') {	// Copy the element if the source and destination ids are both "copy"
		var nodeCopy = document.getElementById(id).cloneNode(true);
		nodeCopy.id = 'newId';
		ev.target.appendChild(nodeCopy);
	}
}
