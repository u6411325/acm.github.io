// define data in JSON array
var products = [
    {
        name: "Sony X90K",
        quantity: 1,
        PPU: 40000
    },

    {
        name: "Sony PS5",
        quantity: 1,
        PPU: 16000
    },

    {
        name: "Tesla Model 3 Performance",
        quantity: 1,
        PPU: 2309000
    },

    {
        name: "Tesla Home Charger",
        quantity: 1,
        PPU: 100000
    }
    
]

function loadData() {

    // first get table, productList
    var productList = document.getElementById("productList")

    // inside tr we need td, so we create new var data
    var row = document.createElement("tr")
    var data = document.createElement("td")
    data.innerHTML = "Product 1"

    var sum = 0
    for (let p in products) {

        // we need td inside tr
        var row = document.createElement("tr")
        var productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text_center")

        let ppu = document.createElement("td")
        ppu.innerHTML=products[p].PPU
        ppu.classList.add("text_right")

        let total = document.createElement("td")
        total.innerHTML=products[p].quantity * products[p].PPU
        total.classList.add("text_right")

        sum += products[p].quantity * products[p].PPU
        vat = 0.07 * sum
        net = sum + vat


        // append data to row, append row to productList
        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let grossElem = document.getElementById("grossID")
    grossElem.innerHTML = sum

    let vatElem = document.getElementById("vatID")
    vatElem.innerHTML = Math.round(vat).toFixed(0)

    let netElem = document.getElementById("netID")
    netElem.innerHTML = net
}

