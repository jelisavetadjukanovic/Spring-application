create table studijski_program
(
    id                      int auto_increment
        primary key,
    naziv                   varchar(255) null,
    godine_trajanja         int          null,
    espbodovi               int          null,
    oblasti_specijalizacije varchar(255) null,
    opis                    text         null
);

INSERT INTO fakultet.studijski_program (id, naziv, godine_trajanja, espbodovi, oblasti_specijalizacije, opis) VALUES (1, 'Softversko inzenjerstvo', 4, 60, 'Veb programiranje, AI', 'Veoma zanimljiv studijski program');
