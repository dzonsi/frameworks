function returnLocation(i) {
	var obj;
	switch(i) {
		case 0:
			obj = {
				col: 1,
				row: 1
			}
			break;
		case 1:
			obj = {
				col: 2,
				row: 1
			}
			break;
		case 2:
			obj = {
				col: 3,
				row: 1
			}
			break;
		case 3:
			obj = {
				col: 1,
				row: 2
			}
			break;
		case 4:
			obj = {
				col: 2,
				row: 2
			}
			break;
		case 5:
			obj = {
				col: 3,
				row: 2
			}
			break;
		case 6:
			obj = {
				col: 1,
				row: 3
			}
			break;
		case 7:
			obj = {
				col: 2,
				row: 3
			}
			break;
		case 8:
			obj = {
				col: 3,
				row: 3
			}
			break;
		default: 
			obj = null;
	}
	return obj;
}
export default returnLocation;