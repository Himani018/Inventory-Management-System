
// Profile dropdown
window.onload = function () {
    noinventory();
};
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function logout() {
    alert("Logged out successfully!");
    window.location.href='home.html';
}

function noinventory(){
      let table = document.getElementById("invenTable");
      if (table.rows.length <= 1) {
        let starting = document.getElementById("noInven");
        starting.style.display = 'block';
    }
}
// Add inven

function addInventory() {

    let name = prompt("Enter Product Name:");
    let category = prompt("Enter Category:");
    let qty = prompt("Enter Quantity:");
    let price = prompt("Enter Unit Price:");

    if (!name || !category || !qty || !price) {
        alert("All fields are required!");
        return;
    }

    if (isNaN(qty) || isNaN(price)) {
        alert("Quantity and Price must be numbers!");
        return;
    }

    qty = Number(qty);
    price = Number(price);

    let table = document.getElementById("invenTable");

    let newId = 1;

  
    if (table.rows.length <= 1) {
        let starting = document.getElementById("noInven");
        starting.style.display = 'none';
    }

    if (table.rows.length >= 1) {
        let lastRow = table.rows[table.rows.length - 1];
        let lastId = lastRow.cells[0].innerText;
        newId = parseInt(lastId) + 1;
    }

    let newRow = `
        <tr id="${newId}">
            <td>${newId}</td>
            <td>${name}</td>
            <td>${category}</td>
            <td class="qty">${qty}</td>
            <td class="price">${price}</td>
            <td class="total"></td>
            <td class="status"></td>
        </tr>
    `;

    table.innerHTML += newRow;
   
    updateTable();
    updateCategory(category);
}

// end add inven option


function deleteInventory() {
    let table = document.getElementById("invenTable");

    let del = prompt("Enter the Product ID you want to delete");

    let delrow = document.getElementById(del);

    if (delrow) {
        delrow.remove();
    } else {
        alert("Invalid Product ID!");
        return;
    }


    if (table.rows.length <= 1) {
        setTimeout(() => {
            let starting = document.getElementById("noInven");
            starting.style.display = 'block';
        }, 4000);
    }
}



function editInventory() {
    let id = prompt("Enter Product ID (row number):");

    let name = prompt("Edit Product Name:");
    let category = prompt("Edit Category:");
    let qty = prompt("Edit Quantity:");
    let price = prompt("Edit Unit Price:");

    if (!id || !name || !category || !qty || !price) {
        alert("All fields are required!");
        return;
    }


    if (isNaN(qty) || isNaN(price)) {
        alert("Quantity and Price must be numbers only!");
        return;
    }

    qty = Number(qty);
    price = Number(price);

    let row = document.getElementById(id);

    if (!row) {
        alert("Invalid ID!");
        return;
    }


    row.cells[1].innerHTML = name;
    row.cells[2].innerHTML = category;

    row.cells[3].innerHTML = qty;
    row.cells[3].className = "qty";

    row.cells[4].innerHTML = price;
    row.cells[4].className = "price";


    row.cells[5].innerHTML = "";
    row.cells[6].innerHTML = "";


    updateTable();
}




const search = document.getElementById("searchBar");
const container = document.getElementById("pdf");

search.addEventListener('input', () => {

    let id = parseInt(search.value);
    if (isNaN(id)) return;

    let row = document.getElementById(id);

    if (row) {
        
        row.style.border = "2px solid #3d40fd";

       //scrollll
    row.scrollIntoView();

        setTimeout(() => {
            row.style.border = "";
        }, 5000);

    } else {
        alert("Product not found!!");
    }
});


const dashlink =document.getElementById('dashboard');
const dashSec =document.getElementById('dash-sec');

const invenlink =document.getElementById('inven');
const invenSec =document.getElementById('inven-sec');

const repolink =document.getElementById('report');
const repoSec =document.getElementById('repo-sec');

const settlink =document.getElementById('setting');
const settSec =document.getElementById('sett-sec');

invenlink.addEventListener('click',function(e){
    e.preventDefault();
    removeBackColor();
    invenSec.style.display="block";
    dashSec.style.display="none";
    repoSec.style.display="none";
    settSec.style.display="none";
    invenlink.style.backgroundColor=" rgb(84, 205, 253)";
    invenlink.style.boxShadow=" 0 4px 10px rgba(255, 255, 255, 0.3),0 0 8px rgba(55, 223, 245, 0.4),0 0 16px rgba(20, 114, 209, 0.4)" ;
    invenlink.style.color="white";
 })
 dashlink.addEventListener('click',function(e){
    e.preventDefault();
    removeBackColor();
    dashSec.style.display="block";
    invenSec.style.display="none";
    repoSec.style.display="none";
    settSec.style.display="none";
    dashlink.style.backgroundColor=" rgb(84, 205, 253)";
    dashlink.style.boxShadow=" 0 4px 10px rgba(255, 255, 255, 0.3),0 0 8px rgba(55, 223, 245, 0.4),0 0 16px rgba(20, 114, 209, 0.4)" ;
    dashlink.style.color="white";
 })
 repolink.addEventListener('click',function(e){
    e.preventDefault();
    removeBackColor();
    repoSec.style.display="block";
    dashSec.style.display="none";
    invenSec.style.display="none";
    settSec.style.display="none";
    repolink.style.backgroundColor=" rgb(84, 205, 253)";
    repolink.style.boxShadow=" 0 4px 10px rgba(255, 255, 255, 0.3),0 0 8px rgba(55, 223, 245, 0.4),0 0 16px rgba(20, 114, 209, 0.4)" ;
    repolink.style.color="white";
    openReport();
 })
 settlink.addEventListener('click',function(e){
    e.preventDefault();
    removeBackColor();
    settSec.style.display="block";
    dashSec.style.display="none";
    invenSec.style.display="none";
    repoSec.style.display="none";
    settlink.style.backgroundColor=" rgb(84, 205, 253)";
    settlink.style.boxShadow=" 0 4px 10px rgba(255, 255, 255, 0.3),0 0 8px rgba(55, 223, 245, 0.4),0 0 16px rgba(20, 114, 209, 0.4)" ;
    settlink.style.color="white";
 })
 function profile(){
    removeBackColor();
    settSec.style.display="block";
    dashSec.style.display="none";
    invenSec.style.display="none";
    repoSec.style.display="none";
    settlink.style.backgroundColor=" rgb(84, 205, 253)";
    settlink.style.boxShadow=" 0 4px 10px rgba(255, 255, 255, 0.3),0 0 8px rgba(55, 223, 245, 0.4),0 0 16px rgba(20, 114, 209, 0.4)" ;
    settlink.style.color="white";
}
 function removeBackColor(){
    dashlink.style.backgroundColor="";
    dashlink.style.color="black";
    dashlink.style.boxShadow="";
    
    invenlink.style.backgroundColor="";
    invenlink.style.color="black";
    invenlink.style.boxShadow="";

    repolink.style.backgroundColor="";
    repolink.style.color="black";
    repolink.style.boxShadow="";

    settlink.style.backgroundColor="";
    settlink.style.color="black";
    settlink.style.boxShadow="";
 }

function openReport(){

    document.getElementById("inven-sec").style.display="none";
    document.getElementById("repo-sec").style.display="block";

    let tableA = document.getElementById("invenTable"); 
    let tableR = document.getElementById("repoTable"); 

    let selected = document.getElementById("select").value;
    let selectedStock = document.getElementById("stockSelect").value; // 🔥 new

    tableR.innerHTML = '';

    for(let i = 0; i < tableA.rows.length; i++){

        let cellValue = tableA.rows[i].cells[2].innerText; // category
        let stockValue = tableA.rows[i].cells[6].innerText; // stock status

        if(
            (selected == "ALL" || cellValue == selected) &&
            (selectedStock == "ALL" || stockValue == selectedStock)
        ){
            tableR.innerHTML += tableA.rows[i].outerHTML;   
        }
    }
}


function updateCategory(newCategory){

    let select = document.getElementById("select");

    // Check if category already exists
    for(let i = 0; i < select.options.length; i++){
        if(select.options[i].value === newCategory){
            return; // already exists → do nothing
        }
    }

    // Add new category
    let option = document.createElement("option");
    option.value = newCategory;
    option.text = newCategory;

    select.appendChild(option);
}


// set section ke liye h

function changePfp(){
    let pfp=document.getElementById("defaultPfp");
    let upload =document.getElementById("imageUpload");
    upload.click();
    
    upload.addEventListener('change',()=>{
        const file = upload.files[0];
    if(file){
        pfp.src = URL.createObjectURL(file);
    }
    })
}

function edit(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let company=document.getElementById("company");
    let role=document.getElementById("role");
    let role2=document.getElementById("role2");
     
    name.removeAttribute("readonly");
    email.removeAttribute("readonly");
    company.removeAttribute("readonly");
    role.removeAttribute("readonly");
    
    let save =document.getElementById("save");
    save.addEventListener('click',()=>{
         name.setAttribute("readonly",true);
         email.setAttribute("readonly",true);
         company.setAttribute("readonly",true);
         role.setAttribute("readonly",true);
        setTimeout(()=>{
               role2.innerHTML = role.value;
        },2000);
        
    })
}

function updateTable() {
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let qty = parseInt(row.querySelector(".qty").innerText);
        let price = parseFloat(row.querySelector(".price").innerText);

        let total = qty * price;

        // Set total value
        row.querySelector(".total").innerText = total + "$";

        // Stock Status Logic
        let statusCell = row.querySelector(".status");

        if (qty === 0) {
            statusCell.innerHTML = '<span class="badge bg-danger">Out of Stock</span>';
        } 
        else if (qty <= 20) {
            statusCell.innerHTML = '<span class="badge bg-warning">Low Stock</span>';
        } 
        else {
            statusCell.innerHTML = '<span class="badge bg-success">In Stock</span>';
        }
    });
}
updateTable();