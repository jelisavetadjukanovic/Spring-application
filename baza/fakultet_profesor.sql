create table profesor
(
    id                     int auto_increment
        primary key,
    ime                    varchar(255) null,
    prezime                varchar(255) null,
    titula                 varchar(255) null,
    oblast_specijalizacije varchar(255) null,
    godine_iskustva        int          null
);

INSERT INTO fakultet.profesor (id, ime, prezime, titula, oblast_specijalizacije, godine_iskustva) VALUES (1, 'Jovana', 'Jovanovic', 'docent', 'Mikrokontroleri', 3);
