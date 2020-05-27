create table cinema
(
    id      int auto_increment,
    name    varchar(255) null,
    address varchar(255) null,
    picture blob         null,
    constraint cinema_id_uindex
        unique (id)
);

alter table cinema
    add primary key (id);

create table hall
(
    id          int auto_increment,
    hall_number int null,
    cinema_id   int null,
    constraint hall_id_uindex
        unique (id),
    constraint hall_cinema_id_fk
        foreign key (cinema_id) references cinema (id)
);

alter table hall
    add primary key (id);

create table login
(
    id       int auto_increment,
    username varchar(255)                  not null,
    password varchar(255)                  not null,
    role     varchar(255) default 'client' null,
    constraint login_id_uindex
        unique (id),
    constraint login_login_uindex
        unique (username)
);

alter table login
    add primary key (id);

create table movie
(
    id          int auto_increment,
    title       varchar(255) null,
    picture     blob         null,
    description text         null,
    age_limit   int          null,
    duration    time         null,
    genres      varchar(255) null,
    constraint movie_id_uindex
        unique (id)
);

alter table movie
    add primary key (id);

create table session
(
    id       int auto_increment,
    date     date   null,
    time     time   null,
    cost     double null,
    hall_id  int    null,
    movie_id int    null,
    constraint session_id_uindex
        unique (id),
    constraint session_hall_id_fk
        foreign key (hall_id) references hall (id),
    constraint session_movie_id_fk
        foreign key (movie_id) references movie (id)
);

alter table session
    add primary key (id);

create table user
(
    id          int auto_increment,
    first_name  varchar(255) null,
    second_name varchar(255) null,
    email       varchar(255) null,
    phone_num   varchar(255) null,
    avatar      longblob     null,
    login_id    int          null,
    constraint user_id_uindex
        unique (id),
    constraint user_login_id_fk
        foreign key (login_id) references login (id)
);

alter table user
    add primary key (id);

create table ticket
(
    id         int auto_increment,
    place_num  int        null,
    row_num    int        null,
    is_sold    tinyint(1) null,
    session_id int        null,
    user_id    int        null,
    constraint place_id_uindex
        unique (id),
    constraint ticket_session_id_fk
        foreign key (session_id) references session (id),
    constraint ticket_user_id_fk
        foreign key (user_id) references user (id)
);

alter table ticket
    add primary key (id);

create table wallet
(
    id      int auto_increment,
    name    varchar(255)     null,
    balance double default 0 not null,
    user_id int              null,
    constraint wallet_id_uindex
        unique (id),
    constraint wallet_user_id_fk
        foreign key (user_id) references user (id)
);

alter table wallet
    add primary key (id);


