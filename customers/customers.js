var customers = []

function addCustomer() {

    let elName = document.getElementById("inputName")
    let elEmail = document.getElementById("inputEmail")
    let elPhone = document.getElementById("inputPhone")

    let customerObject = {
        name: elName.value,
        email: $('#inputEmail').val(),
        phone: $('#inputPhone').val(),
    }
    
    customers.push(customerObject)

    let cStr = `<tr>
        <td><img style="width: 1.5em;" src='delete.png' onclick='deleteCustomer("${(customers.length)-1}")'>${customerObject.name}</td>
        <td>${customerObject.email}</td>
        <td>${customerObject.phone}</td>
    <tr>`
    $("#data-table tr:last").after(cStr)
}

function deleteCustomer(index) {
    console.log(delete customers[index])
    var count = $('#data-table tr').length
    while (count > 1){
        document.getElementById("data-table").deleteRow(1);
        count--
    }

    for (let c in customers) {
        let cStr = `<tr>
            <td><img style="width: 1.5em;" src='delete.png' onclick='deleteCustomer("${c}")'>${customers[c].name}</td>
            <td>${customers[c].email}</td>
            <td>${customers[c].phone}</td>
        </tr>`
        $("#data-table tr:last").after(cStr)
    }
}


$(document).ready(function () {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        
        for(let d in data){
            let dataStr = `<tr>
                <td><img style="width: 1.5em;" src='/customers/delete.png' onclick='deleteCustomer("${d}")'>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`
            let DataObj = {
                name: data[d].name,
                email: data[d].email,
                phone: data[d].phone
            }
            $("#data-table tr:last").after(dataStr)
            customers.push(DataObj)
        }
        console.log(customers)
    });
});