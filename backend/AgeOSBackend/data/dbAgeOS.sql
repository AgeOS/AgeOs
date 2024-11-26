create database dbageos;
use dbageos;

create table tb_users(
    pk_id_user bigint auto_increment primary key,
    user_name varchar(200),
    user_email varchar(100) unique,
    user_password varchar(200),
    fk_id_ageos bigint
);

create table tb_buy(
    pk_id_buy bigint auto_increment primary key,
    method_payment varchar(50),
    date_buy date,
    package_type enum('comum', 'familia'),
    number_user int,
    address_user varchar(100)
);

create table tb_ageos(
    pk_id_ageos bigint auto_increment primary key,
    package_type enum('comum', 'familia'),
    fk_id_user bigint,
    fk_id_buy bigint
);

alter table tb_users
add constraint fk_ageos_user
foreign key (fk_id_ageos) references tb_ageos(pk_id_ageos);

alter table tb_ageos
add constraint fk_user_ageos
foreign key (fk_id_user) references tb_users(pk_id_user);

alter table tb_ageos
add constraint fk_buy_ageos
foreign key (fk_id_buy) references tb_buy(pk_id_buy);

