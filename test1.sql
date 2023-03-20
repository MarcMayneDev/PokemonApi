CREATE SCHEMA IF NOT EXISTS `politecnics` DEFAULT CHARACTER SET utf8mb4 ;
USE `politecnics` ;

CREATE TABLE Usuarios(
    id integer NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Correo VARCHAR(50),
    Nickname VARCHAR(50),
    Password VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO `usuarios` (`Nombre`, `Apellido`, `Correo`, `NickName`, `Password`)
 VALUES ('Nombre_test1', 'Apellido_test1','correotest1@te.test', 'nickname_test1','password_test');
INSERT INTO `usuarios` (`Nombre`, `Apellido`, `Correo`, `NickName`, `Password`)
 VALUES ('Nombre_test2', 'Apellido_test2','correotest2@te.test', 'nickname_test2','password_test2');

CREATE TABLE Juegos(
    ID_Juego tinyint,
    titulo VARCHAR(50),
    PRIMARY KEY (ID_Juego)
);

INSERT INTO `Juegos` (`ID_Juego`, `titulo`)
 VALUES (001, 'Frase');
INSERT INTO `Juegos` (`ID_Juego`, `titulo`)
 VALUES (002, 'Salidas Profesionales');


CREATE TABLE juega(
	id  integer AUTO_INCREMENT,
    ID_Usuarios integer,
    ID_Juego tinyint,
    juego_finalizado boolean,
    puntuacion_juego integer,
    PRIMARY KEY (id),
    foreign key(ID_Usuarios) REFERENCES  Usuarios(ID_Usuarios),
    foreign key(ID_Usuarios) REFERENCES  Usuarios(ID_Usuarios),
    foreign key(ID_Juego) REFERENCES  Juegos(ID_Juego)
);

INSERT INTO `juega` (`id`, `ID_Usuarios`, `ID_Juego`, `juego_finalizado`, `puntuacion_juego`)
 VALUES (DEFAULT, 1, '002',true, 100);
 INSERT INTO `juega` (`id`, `ID_Usuarios`, `ID_Juego`, `juego_finalizado`, `puntuacion_juego`)
 VALUES (DEFAULT, 2, '001',true, 100);