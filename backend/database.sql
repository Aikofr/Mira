DROP TABLE IF EXISTS users ;
DROP TABLE IF EXISTS profils ;
DROP TABLE IF EXISTS news ;
DROP TABLE IF EXISTS amendes ;
DROP TABLE IF EXISTS vehicles ;

CREATE TABLE `users` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(130) UNIQUE NOT NULL,
  `password` LONGTEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `profils` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(90),
  `lastname` VARCHAR(90),
  `dob` VARCHAR(15),
  `role` VARCHAR(90),
  `place` VARCHAR(90),
  `picture` LONGTEXT,
  `license` VARCHAR(90),
  `alive` BOOLEAN DEFAULT TRUE,
  `user_id` INT,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE `news` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `titre` VARCHAR(255),
  `article` LONGTEXT
);

CREATE TABLE `licenses` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `license` VARCHAR(255),
  `profil_id` INT,
  CONSTRAINT fk_license_profil_id FOREIGN KEY (profil_id) REFERENCES profils(id)
);

CREATE TABLE `amendes` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tarif` INT,
  `titre` VARCHAR(90),
  `description` VARCHAR(255),
  `profil_id` INT,
  CONSTRAINT fk_profil_id FOREIGN KEY (profil_id) REFERENCES profils(id)
);

CREATE TABLE `vehicles` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `marque` varchar(90),
  `model` varchar(90),
  `plate` varchar(10),
  `profil_id` INT,
  CONSTRAINT fk_vehicles_profil_id FOREIGN KEY (profil_id) REFERENCES profils(id)
);

INSERT INTO `profils` (firstname, lastname, dob, role, place, picture)
VALUES
    ('John', 'Doe', '01/01/1990', 'Citoyen', 'Sandy Shores', ''),
    ('Jane', 'Smith', '15/07/1995', 'Citoyen', 'Sandy Shores', ''),
    ('Michael', 'Johnson', '28/03/1985', 'Citoyen', 'Paleto Bay', ''),
    ('Isabella', 'Martinez', '03/02/1994', 'Citoyen', 'Los Santos', ''),
    ('Miguel', 'Ruiz', '11/11/1995', 'Citoyen', 'Los Santos', ''),
    ('Albert', 'Torres', '03/02/1994', 'Citoyen', 'Sandy Shores', ''),
    ('Emma', 'Taylor', '09/12/1993', 'Citoyen', 'Los Santos', ''),
    ('Liam', 'Walker', '23/06/1989', 'Citoyen', 'Sandy Shores', ''),
    ('Ava', 'Harris', '14/03/1996', 'Citoyen', 'Paleto Bay', ''),
    ('Noah', 'Clark', '30/08/1992', 'Citoyen', 'Los Santos', ''),
    ('Mia', 'Lewis', '05/07/1998', 'Citoyen', 'Paleto Bay', '');

INSERT INTO `vehicles` (marque, model, plate, profil_id)
VALUES
    ('Lampadati', 'Felon', 'MI8575RA', 1),
    ('Ubermacht', 'Oracle XS', 'MI0054RA', 2),
    ('Bravado', 'Duneloader', 'MI4286RA', 3),
    ('Annis', 'Hellion', 'MI9936RA', 3),
    ('Baller', 'Gallivanter', 'MI9936RA', 4),
    ('BeeJay XL', 'Karin', 'MI1254RA', 4),
    ('Pegassi', 'Toros', 'MI0001RA', 5),
    ('Swinger', 'Ocelot', 'MI0245RA', 6),
    ('Stirling GT', 'Benefactor', 'MI3651RA', 7),
    ('Karin', 'Dilettante', 'MI1025RA', 8),
    ('Weeny', 'Issi', 'MI1048RA', 9),
    ('Declasse', 'Rhapsody ', 'MI1168RA', 10),
    ('Lampadati', 'Felon', 'MI6899RA', 11);