
USE bamazon_DB;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
	department_name VARCHAR(45) NULL,
	price DECIMAL(10,2) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RB26DETT Engine", "Car Engine", 8999.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4AGE Engine", "Car Engine", 2245.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("13B Engine", "Car Engine", 2199.00, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SR20DET Engine", "Car Engine", 1495.00, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2JZ-GTE Engine", "Car Engine", 2899.00, 23);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spoon SW388 ", "Car Rims", 429.16, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Watanabe RS ", "Car Rims", 599.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SSR GTV01 ", "Car Rims", 201.79, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("WBBS SUPER RS ", "Car Rims", 1204.80, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("American Racing Torq Thrust ", "Car Rims", 108.17, 20);

