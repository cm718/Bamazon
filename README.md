# Bamazon

A Node-based CLI app that uses MySQL and Inquirer packages to recreate a basic B'Amazon concept.

## To begin you will need to open the bamazonCustomer.js file in your terminal
Navigate to the file and type node bamazonCustomer and hit enter.

You will be shown a table of products that are for sale. Each item has an Item_ID that you will use to select the item you would like to purchase. You will also be prompted by the Inquirer package: "What is the ID of the item you would like to buy?". 
> See below for a screenshot of initial steps

![bamazon1](/images/bamazon1.png)

Then bamazon will ask how many you would like to purchase. I then checks the quantity you would like to buy against the stock_quantity in the table. If the quantity requested is greater than the stock_quantity available it will return "Insufficient Quantity!" and will ask prompts again.

If the requested quantity is less than or equal to the amount available it will return with "Success! You bought (quantity). Your total is (final price). 

You will also notice that there is one less hamburger on the second row in stock_quantity showing that the quantity will update after each successful purchase.
> See below for a screenshot of the final results

![bamazon2](/images/bamazon2.png)

## To set up Bamazon on your device
You will need to install the mysql and inquirer dependencies.
```javascript
npm install mysql inquirer
```
## Also
> If you have further questions about this or my other projects please send me an email at cmmclaughlin7@gmail.com
