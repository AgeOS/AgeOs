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

ALTER TABLE tb_users
ADD COLUMN fk_id_buy INT;



INSERT INTO tb_buy (method_payment, date_buy, package_type, number_user, address_user) 
VALUES 
('Cartão de Crédito', '2024-12-01', 'comum', 1, 'Rua A, 123'),
('Boleto Bancário', '2024-12-02', 'familia', 3, 'Avenida B, 456'),
('Pix', '2024-12-03', 'comum', 2, 'Rua C, 789');

INSERT INTO tb_ageos (package_type) 
VALUES 
('comum'),
('familia');

DESCRIBE tb_users;


INSERT INTO tb_users (user_name, user_email, user_password, fk_id_buy)
VALUES 
('João Silva', 'joao.silva@example.com', 'senha123', 1),
('Maria Souza', 'maria.souza@example.com', 'senha456', 2),
('Carlos Oliveira', 'carlos.oliveira@example.com', 'senha789', 3);


