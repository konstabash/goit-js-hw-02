function getShippingCost(country) {
    let price;
    if (country === "China") {
         price = 100;
    } else if (country === 'Chile') {
         price = 250;
    } else if (country === 'Australia') {
         price = 170;
    } else if (country === 'Jamaica') {
         price = 120;
    }

    switch (true) {
        case country === 'China':
        case country === 'Chile':
        case country === 'Australia':
        case country === 'Jamaica':
            
            return `Shipping to ${country} will cost ${price} credits`;
        default:
          return  'Sorry, there is no delivery to your country';
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"