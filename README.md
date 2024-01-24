# Take home exam

Instructions:

Given the following gist, https://gist.github.com/chrismarkpd/52e4beec3c85239e96e23547e2801756, please write a function in javascript that extracts the following data into a structured object of your choice. Your object should include: id, name, email, and a line items array that has sku, price, product_id, and quantity.



Solution:

I created a JavaScript function named extractOrderData() that has a parameter called jsonData. This function contains methods used to call the necessary data (attribute and values) from the shop order JSON object and make it into a new structured object. For the line items array, I used a .map() method to iterate its contents and call the necessary child attributes under this array.
I stored the sample order data JSON object in a variable called shopOrderJson. Then I also created another variable called extractedData, this variable holds the new structured object that is returned from the function extractOrderData(). Lastly, I logged the result using console.log. 
