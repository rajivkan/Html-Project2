var arrayData = [];
function init(){
	arrayData = [];
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
	var flag = confirm('Are you sure to delete this record?');
	if(flag){
		for(var i=0; i <= arrayData.length; i++){
			if(arrayData[i].id == id){
				arrayData.splice(i, 1);
				break;
			}
		}
		displayData();
	}
	
}

function getElements(){
	alert("by Id: "+document.getElementById("table1"));

	alert("by Class Name: "+document.getElementsByClassName("table-class"));

	alert("by Tag Name: "+document.getElementsByTagName("table"));

	alert("by Name: "+document.getElementsByName("table1"));
}

function validate(){
	if(document.getElementById("txtName").value == ""){
		alert("Name is required."); 
		document.getElementById("txtName").focus();
		return false;
	}

	if(document.getElementById("txtEmail").value == ""){
		alert("Email is required."); 
		document.getElementById("txtEmail").focus();
		return false;
	}

	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(document.getElementById("txtEmail").value)) {
    	alert('Please provide a valid email address');
    	document.getElementById("txtEmail").focus();
		return false;
    }

	if(document.getElementById("txtPassword").value == ""){
		alert("Password is required."); 
		document.getElementById("txtPassword").focus();
		return false;
	}

	//alert("Form is valid");
	insertData();
	document.getElementById("txtName").value = "";
	document.getElementById("txtEmail").value = "";
	document.getElementById("txtPassword").value = "";
	document.getElementById("txtPhone").value = "";
}

function insertData(){
	var obj = {};
	obj.id = arrayData.length.toString();
	obj.name = document.getElementById("txtName").value;
	obj.email = document.getElementById("txtEmail").value;
	obj.password = document.getElementById("txtPassword").value;
	obj.phone = document.getElementById("txtPhone").value;
	arrayData.push(obj);
	displayFormData();
}

function displayFormData(){
	var str = "<tr><td style='width:250px'>Name</td><td style='width:250px'>Email</td><td style='width:250px'>Password</td><td style='width:250px'>Phone</td><td>Action</td></tr>"
	for(var i=0; i < arrayData.length; i++){
		str += "<tr><td style='width:250px'>"+ arrayData[i].name +"</td><td>"+ arrayData[i].email +"</td> <td style='width:250px'>"+ arrayData[i].password +"</td><td style='width:250px'>"+ arrayData[i].phone +"</td> <td><input type='button' onclick='removeFormRecord(this.name)' name='"+ arrayData[i].id +"'' value='delete'></td></tr>"
	}

	document.getElementById("table1").innerHTML = str;
}

function removeFormRecord(id){
	var flag = confirm('Are you sure to delete this record?');
	if(flag){
		for(var i=0; i <= arrayData.length; i++){
			if(arrayData[i].id == id){
				arrayData.splice(i, 1);
				break;
			}
		}
		displayFormData();
	}
	
}


