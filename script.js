let Form = document.createElement("div");
Form.innerHTML = `
<h1 id="title" class="text-center">DOM MANIPULATION FORM</h1>
<div class="container">
  <div class="row">
    <div class="col col-lg-3 bg">
      <form id="form" class="p-2 m-2">
        <div class="form-group">
          <label for="firstname" class="fw-bolder">First Name</label>
          <input
            type="text"
            name="fistname"
            id="first-name"
            placeholder="firstname"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="lastname" class="fw-bolder">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="last-name"
            placeholder="lastname"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="address" class="fw-bolder">Address</label>
          <textarea
            name="address"
            id="address"
            cols="25"
            rows="5"
            placeholder="address"
            required
          ></textarea>
        </div>
        <br />
        <div class="form-group">
          <label for="pincode" class="fw-bolder">Pincode</label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="pincode"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="gender" class="fw-bolder">Gender </label> <br />
          <input type="radio" name="gender" id="gender" value="male" /> Male
          <input
            type="radio"
            name="gender"
            id="gender"
            value="female"
          />Female <br />
        </div>
        <br />
        <div class="form-group">
          <label for="food" class="fw-bolder">Choice of Food</label> <br />
          <input type="checkbox" name="food" id="food" value="Dosa" onclick="checkBoxFunc(this)"/> Dosa
          <br />
          <input type="checkbox" name="food" id="food" value="Grill" onclick="checkBoxFunc(this)"/>
          Grill <br />
          <input type="checkbox" name="food" id="food" value="Idli" onclick="checkBoxFunc(this)"/> Idli
          <br />
          <input type="checkbox" name="food" id="food" value="Parata" onclick="checkBoxFunc(this)"/>
          Parata <br />
          <input type="checkbox" name="food" id="food" value="Chicken 65" onclick="checkBoxFunc(this)"/>
          Chicken 65 <br />
        </div>
        <br />
        <div class="form-group">
          <label for="state" class="fw-bolder">State</label><br />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="state"
            required
          /><br />
        </div>
        <br />
        <div class="form-group">
          <label for="country" class="fw-bolder">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="country"
            required
          /><br />
        </div>
        <br />
        <div class="form-group">
          <button id="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <div class="col table-responsive m-1">
      <table class="table bg-dark text-white ">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Gender</th>
            <th>Food</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody id="tbody" class="bgt"></tbody>
      </table>
    </div>
  </div>
</div>
`;
document.body.append(Form);
let foodArray = [];
function checkBoxFunc(value){
console.log("value: ",value.value);
console.log("foodArray: ",foodArray);
console.log("foodArray length: ",foodArray.length);

	if(value.checked){
  	if(foodArray.length<2){
    	foodArray.push(value.value);
    }else{
    	value.checked=false;
    }
  }
  if(!value.checked){
  	/* const index = foodArray.indexOf(value.name);
  	    if (index > -1) {
  	      foodArray.splice(index, 1); // 2nd parameter means remove one item only
  	      
  	    } */
    
    foodArray = foodArray.filter(item => item !== value.value)
    	value.checked=false;


  }
  console.log("foodArray Final: ",foodArray);
 }
// Submit Click Event
let submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  // radio btn
  let gender = document.getElementsByName("gender");
  let genderValue;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value;
    }
  }

  // check box
  /* let food = document.getElementsByName("food") */;
  let foodList = foodArray;
  let foodCount = foodArray.length;
  /* for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value);
      foodCount++;
    }
  } */
  if (foodList.length >= 2) {
    result = foodList.join(",");
  } else {
    result = alert("Choose atleast 2 options out of 5 in Food");
  }

  //    Firstname and lastname
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;

  // Table
  CreateTable(
    fname,
    lname,
    pincode.value,
    address.value,
    genderValue,
    result,
    state.value,
    country.value
  );
  fname.value = "";
  lname.value = "";
  pincode.value = "";
  address.value = "";
  genderValue = "";
  foodList = [];
  state.value = "";
  country.value = "";
});

// Table function
function CreateTable(tname1, tname2, tname3, tname4, tname5, tname6, tname7, tname8) {
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  td1.innerHTML = tname1;
  td2.innerHTML = tname2;
  td3.innerHTML = tname3;
  td4.innerHTML = tname4;
  td5.innerHTML = tname5;
  td6.innerHTML = tname6;
  td7.innerHTML = tname7;
  td8.innerHTML = tname8;
  tbody.append(tr);
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
}
