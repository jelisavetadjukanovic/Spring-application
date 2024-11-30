create table student
(
    id            int auto_increment
        primary key,
    ime           varchar(255) null,
    prezime       varchar(255) null,
    broj_indeksa  varchar(255) null,
    srednja_skola varchar(255) null,
    prosek        float        null
);

INSERT INTO fakultet.student (id, ime, prezime, broj_indeksa, srednja_skola, prosek) VALUES (1, 'Marko', 'Markovic', '1234', 'Prva beogradska', 7.76);
INSERT INTO fakultet.student (id, ime, prezime, broj_indeksa, srednja_skola, prosek) VALUES (3, 'Petar', 'Petrovic', '2345-53', 'Druga Beogradska gimnazija', 9.54);
