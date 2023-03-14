create database penjualan;

use penjualan;

create table barang(
 kode INT,
 nama Varchar(100),
 harga INT,
 jumlah INT
);

alter table barang 
	add column nama_column TEXT;

-- untuk menghapus filed
alter table barang 
	drop column nama;

-- untuk mrubah field
alter table barang change column nama_column nama varchar(100);

alter table barang
	modify nama varchar(100) after jumlah;
	
alter table barang
	modify nama varchar(100) first;

create table products(
	id varchar(10) not null,
	name Varchar(100) not null,
	description TEXT,
	price INT unsigned not null,
	quantity INT unsigned not null default 0,
	created TIMESTAMP not null default CURRENT_TIMESTAMP


)

insert into products(id,name,price,quantity) values("P001","Mia ayam original",15000,100)
insert into products(id,name,price,quantity) values("P001","Mia ayam ceker",20000,100)
insert into products(id,name,price,quantity) values("P001","Mia ayam spesial",20500,100)
insert into products(id,name,price,quantity) values("P001","Mia ayam yamin",10500,100)

update products set id="P005" where name="Mia ayam yamin"

alter table products 
	add primary key(id)

insert into products(id,name,description,price,quantity) values("P001","Mi ayam bakso tahu","Mia ayam original + bakso tahu",20000,100)

select id,name,price,quantity from products

select*from products

select id as 'kode',
	name as 'Nama',
	price as 'Harga',
	quantity as 'Stok'
from products;


select id,name,price,quantity
from products 
where quantity >= 100 and price > 15000

alter table products add column category varchar(20)

update products set category="Makanan" where category is null


select id,name,price,quantity
from products 
where (category = 'Makanan' and quantity>50)
	and price > 15000

select *
from products where name like '%mi%'

select * from products 
where description is null 

select * 
from products p 
where price between 10000 and 20000

select *
from products p 
where category in('Minuman')

update products 
set category ="Minuman" where id="P002"

select *
from products p order by price asc, id desc


select id,name,length (name) as 'lengthname'
from products

select id,
extract(year from created)as 'year',
extract(month from created)as 'month'
from products

select id,year (created),month (created)
from products

select id,
	case category
		when 'Makanan' then 'enak'
		when 'Minuman' then 'Segar'
		else 'Apa itu?'
		end as 'Catebory'
from products

select id, price,
	if(price <= 15000,'Murah',
	if(price <= 20000,'Mahal','Mahal Banget')
	)As 'Mahal?'
from products

select id,name, ifnull(description,'kosong')
from products

select count(id) as 'total product' from products 
select avg(price) as 'rata-rata' from products 
select max(price) as 'harga termahal' from products 
select min(price) as 'harga termurah' from products

select category,
	count(id)as 'total'
from products 
group by category
having total>1

create table customers(
 id int not null auto_increment,
 email varchar(100) not null,
 first_name varchar(100) not null,
 last_name varchar(100),
 primary key (id),
 unique key email_unique(email)
)


alter table customers
	add constraint email_unique unique(email);

alter table customers 
	drop constraint email_unique
	
	
create table products(
 id varchar(10) not null,
 name varchar(100) not null,
 description text,
 
)
show grant for 'swieta'@'localhost';
create user 'swieta'@'localhost';
create user 'swieta'@'%'
drop user 'swieta'@'localhost';
use penjualan
show databases
grant select on penjualan.* to 'swieta'@'localhost'
grant select,insert,update,delete on penjaualan.*to'swieta'@'%'

repair table penjualan.db
repair table penjualan.user