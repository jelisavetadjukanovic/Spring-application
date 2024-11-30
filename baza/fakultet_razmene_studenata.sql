create table razmene_studenata
(
    id                 int auto_increment
        primary key,
    datum_pocetka      date         null,
    datum_kraja        date         null,
    drzava             varchar(100) null,
    grad               varchar(100) null,
    naziv_univerziteta varchar(100) null,
    naziv_fakulteta    varchar(100) null,
    oblast             varchar(100) null
);

INSERT INTO fakultet.razmene_studenata (id, datum_pocetka, datum_kraja, drzava, grad, naziv_univerziteta, naziv_fakulteta, oblast) VALUES (1, '2022-09-13', '2022-09-20', 'Madjarska', 'Pecuj', 'Pecs Universitus', 'Tehnik Studiorum', 'Telekomunikacije');
INSERT INTO fakultet.razmene_studenata (id, datum_pocetka, datum_kraja, drzava, grad, naziv_univerziteta, naziv_fakulteta, oblast) VALUES (2, '2022-09-14', '2022-09-21', 'Srbija', 'Beograd', 'Beogradski univerzitet', 'ETF', 'Softversko inzenjerstvo');
