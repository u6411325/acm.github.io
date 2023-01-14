// define data in JSON array
var products = [
    {
        name: "Sony PS5",
        quantity: 1,
        ppu: 30000,
        discount: 1000
    },
    {
        name: "Tesla Model 3 Performance",
        quantity: 1,
        ppu: 2309000,
        discount: 9000
    },
    {
        name: "Sony 1000XM4",
        quantity: 1,
        ppu: 16000,
        discount: 5000
    },
    {
        name: "Tesla Home Charger",
        quantity: 1,
        ppu: 110000,
        discount: 10000
    },

    //to check updatedArr if it detects duplicates
    {
        name: "Tesla Home Charger",
        quantity: 1,
        ppu: 110000,
        discount: 10000
    }
]

function addToCart() {

    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val()
    }

    $('#productBody').html("")

    products.push(productObj)
    loadData()
    $('#addModal').modal('hide')
}

function loadData() {
    let allRows = ""
    let gross = 0
    let totaldiscount = 0

    //check duplicated items and add them up in qty
    let updatedArr = [];
    for (let i in products) {
        let redundant = false;
        for (let j in updatedArr) {
            if (products[i].name === updatedArr[j].name && products[i].ppu === updatedArr[j].ppu) {

                //add up qty
                updatedArr[j].quantity = parseInt(updatedArr[j].quantity) + parseInt(products[i].quantity);

                //add up discounts
                updatedArr[j].discount = parseInt(updatedArr[j].discount) + parseInt(products[i].discount)
                redundant = true;
                break;
            }
        }

        //duplicate not found, push original object from array to updatedArr
        if (!redundant) {
            updatedArr.push(products[i]);
        }
    }

    //replace original array with updated array (which checked for duplicates)
    products = updatedArr;

    for (let p in products) {
        let cellName = `<td><img class='icon' src='delete.png' style="width: 1em" onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td style="text-align: right;">' + products[p].quantity + "</td>"
        let cellPPU = '<td style="text-align: right;">' + products[p].ppu + "</td>"
        let cellDiscount = '<td style="text-align: right;">' + products[p].discount + "</td>"
        let total = products[p].ppu * products[p].quantity - products[p].discount
        gross += total
        let cellTotal = '<td style="text-align: right;">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row
        totaldiscount += parseInt(products[p].discount)
    }


    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat - totaldiscount
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))
    $("#tdiscount").html(totaldiscount)

}
    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.07
    let net = gross + vat
    let tdiscount = totaldiscount()

    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)
    document.getElementById("tdiscount").innerHTML = tdiscount.toFixed(2)



function deleteProduct(index) {
    console.log("DELETE", index)
    delete products[index]
    $('#productBody').html("")
    loadData()
}

function totaldiscount() {
    let sumdiscount = 0
    for (let p in products) {
        sumdiscount += parseInt(products[p].discount)
    }

    return (sumdiscount)
}

function clearTable(index) {
    var count = $('#productBody tr').length
    while (count > 0) {
        document.getElementById("productBody").deleteRow(0);
        count--
    }

    //clear out the whole array
    products = Array.from([]);

    $("#gross").html(0)
    $("#vat").html(0)
    $("#net").html(0)
    $("#tdiscount").html(0)

    $('#clearModal').modal('hide')
}
