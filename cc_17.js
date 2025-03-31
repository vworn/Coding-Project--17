// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = []; // stores all purchase amounts
      console.log(`New customer created: ${this.name}`);
    }
  
    // Adds a purchase amount to purchaseHistory
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    // Returns the total amount spent by the customer
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
  }
  
  // Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = []; // stores Customer objects
    }
  
    // Adds a customer to the sales rep’s client list
    addClient(customer) {
      this.clients.push(customer);
    }
  
    // Returns the total spent by a specific client (by name)
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }

  // Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel; // 'Gold' or 'Platinum'
    }
  
    // Overrides getTotalSpent to include a 10% bonus
    getTotalSpent() {
      const total = super.getTotalSpent();
      return total * 1.10; // adds 10% loyalty bonus
    }
  }

  // Task 4: Build a Client Report System

// Create some customers
const cust1 = new Customer("Alice", "alice@email.com");
cust1.addPurchase(200);
cust1.addPurchase(150);
console.log(`${cust1.name} Total Spent: $${cust1.getTotalSpent()}`);

const cust2 = new Customer("Bob", "bob@email.com");
cust2.addPurchase(300);
cust2.addPurchase(250);

const vip1 = new VIPCustomer("Charlie", "charlie@email.com", "Gold");
vip1.addPurchase(400);
vip1.addPurchase(300);
console.log(`${vip1.name} Total Spent with Bonus: $${vip1.getTotalSpent()}`);

// Create a sales rep and assign clients
const rep = new SalesRep("Samantha");
rep.addClient(cust1);
rep.addClient(cust2);
rep.addClient(vip1);

console.log(`Sales Rep: ${rep.name}`);
console.log(`Clients: ${rep.clients.map(c => c.name).join(", ")}`);
console.log(`Total spent by ${cust2.name}: $${rep.getClientTotal("Bob")}`);

// Report calculations
const allCustomers = [cust1, cust2, vip1];

// Total revenue
const totalRevenue = allCustomers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue}`);

// Customers who spent over $500
const highSpenders = allCustomers.filter(c => c.getTotalSpent() > 500);
console.log("High-Spending Customers:", highSpenders.map(c => c.name));

// Summary of all customers
const customerSummary = allCustomers.map(c => {
  return `${c.name}: $${c.getTotalSpent().toFixed(2)}`;
});
console.log("Customer Summary:", customerSummary);
