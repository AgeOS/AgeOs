CREATE DATABASE ageOS;
use ageOS;

select * from tb_users;
select * from tb_buy;
select * from tb_ageos;

describe tb_users;
describe tb_buy;
describe tb_ageos;

create table tb_users(
	pk_id_user int auto_increment primary key,
    user_name varchar(200),
    user_email varchar(100),
    user_password varchar(200),
    fk_id_buy int
);

create table tb_buy(
	pk_id_buy int auto_increment primary key,
    method_payment varchar(50),
    date_buy date,
    package_type enum('comum', 'familia'),
    number_user int,
    address_user varchar(100),
    fk_id_user int
);

create table tb_ageos(
	pk_id_ageos int auto_increment primary key,
    package_type enum('comum', 'familia')
);



alter table tb_ageos
add column fk_id_user int;

alter table tb_ageos
add column fk_id_buy int;

alter table tb_users
add constraint fk_buy
foreign key (fk_id_buy) references tb_buy(pk_id_buy);

alter table tb_buy
add constraint fk_user
foreign key (fk_id_user) references tb_users(pk_id_user);

alter table tb_ageos
add constraint fk_user_ageos
foreign key (fk_id_user) references tb_users(pk_id_user);

alter table tb_ageos
add constraint fk_buy_ageos
foreign key (fk_id_buy) references tb_buy(pk_id_buy);
