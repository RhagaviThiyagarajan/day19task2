// // print firstNmae
// // lastname
// // address
// // pincode
// // gender
// // choice of food(choose 5 out of 2)
// // State
// // country


// //on submitting values hsould be appended to table
// //clear the form after updating recrds to the table.
// //
// var table=document.createElement("table");
// table.setAttribute("id","mytable");

// var tr=document.createElement("tr");
// tr.setAttribute("id","mytr");

// var td=document.createElement("td");
// td.setAttribute("id","mytd");


// var firstname=document.createElement("input")
// firstname.setAttribute("type","text");
// firstname.setAttribute("id","name");

// td.append(firstname);
// tr.append(td);
// table.append(tr);
// // document.body.append(table);

// var tr1=document.createElement("tr");
// tr1.setAttribute("id","mytr2");


// var td1=document.createElement("td");
// td1.setAttribute("id","mytd2");


// var lastname=document.createElement("input");
//  lastname.setAttribute("type","text");
//  lastname.setAttribute("id","lname");

// td1.append(lastname);
// tr1.append(td1);
// table.append(tr1);
// document.body.append(table);

// //

 var res=document.getElementById("GFG_DOWN");

var br=document.createElement("br");
function foo()

{
    var form=document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","submit");

//create for FULLNAME
 
  var fname=document.createElement("input");
  fname.setAttribute("type","text");
  fname.setAttribute("name","Fullname");
  fname.setAttribute("placeholder","First Name"); 
 

//create for LASTNAME

var lname=document.createElement("input");
lname.setAttribute("type","text");
lname.setAttribute("name","lastname");
lname.setAttribute("placeholder","Last Name");


//create for Address
var address=document.createElement("address");
address.setAttribute("type","text");
address.setAttribute("name","Address");
address.setAttribute("placeholder","Address")

//pincode
var pincode=document.createElement("input");
pincode.setAttribute("type","text");
pincode.setAttribute("name","Pincode");
pincode.setAttribute("placeholder","pincode");

//gender
var gender=document.createElement("select");
gender.setAttribute("id","gender1")
gender=document.createElement("option");
gender.setAttribute("value","option");
gender.setAttribute("placeholder","gender");

//choice of food
var checkbox=document.createElement("input");
checkbox.setAttribute("type","checkbox");
checkbox.setAttribute("name","food");
checkbox.setAttribute("id","food");
checkbox.innerHTML="biriyani";
checkbox.innerHTML="paratha";
checkbox.innerHTML="eggrice";
checkbox.innerHTML="potatofry";
checkbox.innerHTML="babycorn";

//state
var state=document.createElement("input");
state.setAttribute("type","text");
state.setAttribute("name","state");
state.setAttribute("placeholder","state");

//country
var country=document.createElement("input");
country.setAttribute("type","text");
country.setAttribute("name","country");
country.setAttribute("placeholder","country");


var submit=document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("value","SUBMIT");

foo();

form.append(fname);
form.append(br.cloneNode());
form.append(lname);
form.append(br.cloneNode());
form.append(address);
form.append(br.cloneNode());
form.append(pincode);
form.append(br.cloneNode());
form.append(gender);
form.append(br.cloneNode());
form.append(checkbox);
form.append(br.cloneNode());
form.append(state);
form.append(br.cloneNode());
form.append(country);
form.append(br.cloneNode());
form.append(submit);
document.body.append(form);


}

