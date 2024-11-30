create table prostorije
(
    id        int auto_increment
        primary key,
    oznaka    varchar(100) null,
    tip       varchar(100) null,
    kapacitet int          null,
    status    varchar(100) null
);

INSERT INTO fakultet.prostorije (id, oznaka, tip, kapacitet, status) VALUES (1, 'A-1', 'UCIONICA', 24, 'ZA_UPOTREBU');
INSERT INTO fakultet.prostorije (id, oznaka, tip, kapacitet, status) VALUES (2, 'A-2', 'UCIONICA', 22, 'ZA_UPOTREBU');
