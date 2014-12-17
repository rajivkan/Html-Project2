var arrayData = [];
function init(){

	for(var i=1; i <= 10; i++){
		var obj = {};
		obj.id = i.toString();
		obj.name = "ABC " + i;
		obj.address = "Address " + i;
		arrayData.push(obj);
	}
	displayData();
}

function displayData(){
	var str = "<tr><td style='width:250px'>Name</td><td style='width:250px'>Address</td><td>Action</td></tr>"
	for(var i=0; i < arrayData.length; i++){
		str += "<tr><td style='width:250px'>"+ arrayData[i].name +"</td><td>"+ arrayData[i].address +"</td><td><input type='button' onclick='removeRecord(this.name)' name='"+ arrayData[i].id +"'' value='delete'></td></tr>"
	}

	document.getElementById("table1").innerHTML = str;
}

function removeRecord(id){
	if(confirm('Are you sure to delete this record?')){
		for(var i=0; i <= arrayData.length; i++){
			if(arrayData[i].id == id){
				arrayData.splice(i, 1);
				break;
			}
		}
		displayData();
	}
	
}