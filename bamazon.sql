CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
);

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ("Laptop", "Electronics", 1299, 5),
("Hamburger", "Food", 4, 23),
("Bicycle", "Sporting", 199, 2),
("Origami Bird", "Arts", 2, 3),
("Kazoo", "Games", 1, 4),
("Leather Boots", 99, 1),
("Dog food", "Pets", 25, 6),
("Stuffed Animals", "Kids", 12, 16),
("Metal Folding Chair", "Sporting", 10, 104),
("Hybrid Car", "Travel", 23999, 2);

