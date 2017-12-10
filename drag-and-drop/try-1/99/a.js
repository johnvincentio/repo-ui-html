
function dragstartHandler(ev) {
	console.log('dragStart');
	ev.currentTarget.style.border = 'dashed'; // Change the source element's background color to signify drag has started
	ev.dataTransfer.setData('text', ev.target.id); 	// Add the id of the drag source element to the drag data payload so it is available when the drop event is fired
	ev.effectAllowed = 'copyMove';	// Tell the browser both copy and move are possible
}

function dragoverHandler(ev) {
	console.log('dragOver');
	ev.currentTarget.style.background = 'lightblue'; 	// Change the target element's border to signify a drag over event has occurred
	ev.preventDefault();
}

function dropHandler(ev) {
	console.log('Drop');
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

function dragendHandler(ev) {
	console.log('dragEnd');
	ev.target.style.border = 'solid black';		// Restore source's border
	ev.dataTransfer.clearData();		// Remove all of the drag data
}
