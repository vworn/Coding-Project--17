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