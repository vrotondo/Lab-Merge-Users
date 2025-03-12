const MathModule = require('./MathModule');

// Define combineUsers function
const combineUsers = (...arrays) => {
  const users = arrays.flat(); // Combine all arrays into one

  // Format date as MM/DD/YYYY
  const today = new Date();
  const merge_date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return { users, merge_date }; // Return an object with users and merge_date
};

// Use combineUsers
const combine = combineUsers(
  ["Jim3", "Pam5", "Dwight77"],
  ["Michael6", "Eleanor22", "Chidi202"],
  ["Jack_jack", "Julia_Oreo", "Bill_bore"]
);
console.log("Combined Users:", combine);

// Generate sample sales data
const generateSalesData = (size) => {
  return Array.from({ length: size }, () => ({
    product: `Product_${Math.floor(Math.random() * 100)}`,
    price: Math.floor(Math.random() * 1000) + 1,
    quantity: Math.floor(Math.random() * 10) + 1,
  }));
};

const salesData = generateSalesData(1000);
console.log("Sample Sales Data:", salesData.slice(0, 5));

const additionalSalesData = generateSalesData(500);
const combinedSalesData = [...salesData, ...additionalSalesData];
console.log("Combined Sales Data Length:", combinedSalesData.length);

const prices = combinedSalesData.map((sale) => sale.price);
const quantities = combinedSalesData.map((sale) => sale.quantity);

const totalRevenue = MathModule.sum(
  combinedSalesData.map((sale) => sale.price * sale.quantity)
);

const maxPrice = MathModule.max(prices);
const minPrice = MathModule.min(prices);

const averagePrice = MathModule.average(prices);
const averageQuantity = MathModule.average(quantities);

console.log("Total Revenue:", totalRevenue);
console.log("Maximum Price:", maxPrice);
console.log("Minimum Price:", minPrice);
console.log("Average Price:", averagePrice);
console.log("Average Quantity:", averageQuantity);

module.exports = { combineUsers };

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
