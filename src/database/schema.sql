create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null
);

create table element (
  id int unsigned primary key auto_increment not null,
  text varchar(255) not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "$argon2id$v=19$m=19456,t=2,p=1$M6cNKyAnMbdydp1xs6voqA$BNdO1lV91bQBqzOpvkROZJKbSHqEW5PzFAp5C/bgvwY");

insert into element(id, text)
values
  (1, "<figure><p>Je Code Collectif</p></figure>"),
  (2, "<figure><img src='https://picsum.photos/200' alt='surprise'><figcaption>surprise</figcaption></figure>");
