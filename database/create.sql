create schema beerbox;

create table beerbox.post (
	id serial primary key,
	title text not null,
	content text not null,
	date timestamp default now()
);
