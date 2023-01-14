var products = [
    {
        name: "Sony PS5",
        quantity: 1,
        ppu: 30000,
        discount : 1000
    },
    {
        name: "Tesla Model 3 Performance",
        quantity: 1,
        ppu: 2309000,
        discount : 9000
    },
    {
        name: "Sony 1000XM4",
        quantity: 1,
        ppu: 16000,
        discount : 5000
    },
    {
        name: "Tesla Home Charger",
        quantity: 1,
        ppu: 110000,
        discount : 10000
    },
    {
        name: "Tesla Home Charger",
        quantity: 1,
        ppu: 110000,
        discount : 10000
    },
    {
        name: "Tesla Home Charger",
        quantity: 3,
        ppu: 110000,
        discount : 10000
    },


]


let combined = [];
products.forEach(function(current) {
  let found = combined.filter(function(item) {
    return item.name === current.name && item.ppu === current.ppu && item.discount === current.discount;
  });
  if (found.length > 0) {
    found[0].quantity += current.quantity;
  } else {
    combined.push(current);
  }
});
console.log(combined);