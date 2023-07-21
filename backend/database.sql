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
  `auth_id` INT,
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
    ('John', 'Doe', '01/01/1990', 'Citoyen', 'Sandy Shores', 'https://media.discordapp.net/attachments/947820306746208327/1131284214625615967/image_60.png?width=1242&height=676'),
    ('Jane', 'Smith', '15/07/1995', 'Citoyen', 'Sandy Shores', 'https://media.discordapp.net/attachments/947820306746208327/1130046748170129488/20230716095716_1.jpg?width=1341&height=702'),
    ('Michael', 'Johnson', '28/03/1985', 'Citoyen', 'Paleto Bay', 'https://media.discordapp.net/attachments/947820306746208327/1129407873718435840/04.png?width=1202&height=676'),
    ('Isabella', 'Martinez', '03/02/1994', 'Citoyen', 'Los Santos', 'https://media.discordapp.net/attachments/947820306746208327/1130838882942976111/image.png?width=1289&height=702'),
    ('Miguel', 'Ruiz', '11/11/1995', 'lspd', 'Los Santos', 'https://media.discordapp.net/attachments/947820306746208327/1130852698732904509/20230718150247_1.jpg?width=1248&height=702'),
    ('Albert', 'Torres', '03/02/1994', 'Citoyen', 'Sandy Shores', 'https://i.pinimg.com/originals/0e/e2/c4/0ee2c419628899a91d21754b28e398b6.jpg'),
    ('Emma', 'Taylor', '09/12/1993', 'Citoyen', 'Los Santos', 'https://media.discordapp.net/attachments/947820306746208327/1129360597448937542/20230714123058_1.jpg?width=1248&height=702'),
    ('Liam', 'Walker', '23/06/1989', 'Citoyen', 'Sandy Shores', 'https://media.discordapp.net/attachments/947820306746208327/1127526541283299449/20230709105220_1.jpg?width=1332&height=702'),
    ('Ava', 'Harris', '14/03/1996', 'Citoyen', 'Paleto Bay', 'https://media.discordapp.net/attachments/947820306746208327/1124698486865141831/20230701152648_1.jpg?width=1248&height=702'),
    ('Noah', 'Clark', '30/08/1992', 'Citoyen', 'Los Santos', 'https://media.discordapp.net/attachments/947820306746208327/1127215223233859606/20230708142834_1.jpg?width=1248&height=702'),
    ('Mia', 'Lewis', '05/07/1998', 'Citoyen', 'Paleto Bay', 'https://media.discordapp.net/attachments/947820306746208327/1126600436284141578/Capture_decran_2023-07-06_013811.png?width=1304&height=702');

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


INSERT INTO `news` (titre, article)
VALUES
    ('AVIS DE RECHERCHE', "Gabriel 'D' Infinite & Céleste 'Nyx' McAllister sont activement recherchés pour les motifs suivats : Attaque à main armée au DOJ, kidnapping, recel d'armes, association de malfaiteurs. 10 000$ de récompense seront données a toute personne donnant une information majeure"),
    ('CHASSE INTERDITE', "Les parks Rangers vous informent que la chasse n'est plus autorisée jusqu'au 2 juillet 14h. Des sanctions peuvent être appliquées."),
    ('CODE ROUGE', "Suite aux récents évènements, le CODE ROUGE est promulgué jusqu'au 16/07/2023 12h");

INSERT INTO `amendes` (tarif, titre, description, profil_id, auth_id)
VALUES
    (150, "Excès de vitesse", "120km en ville", 11, 5),
    (350, "Excès de vitesse", "170 sur autoroute", 11, 5),
    (2000, "Braquage superette", "Superette 7501 - braquage Apu", 3, 5);
