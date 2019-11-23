create table Usuarios (
	nick varchar (50),
    foto varchar(50),
	primary key (nick)
);

create table Salas (
	fechaCreada date,
    nombre varchar(50),
    nickUsuario varchar (50),
	primary key (nombre)
    
);

create table Sesiones (
	idSesion int auto_increment,
    fechaHoraInicio date,
    fechaHoraFin date,
    nickUsuario varchar (50),
    nombreSala varchar (50),
	primary key (idSesion)
);

create table Mensajes (
	idMensaje int,
    texto varchar(300),
    fechaHora datetime,
    idSesion integer,
    primary key (idMensaje,idSesion)
);

alter table Mensajes
add foreign key (idSesion)
references Sesiones(idSesion)
on delete cascade on update cascade;

alter table Salas
add foreign key (nickUsuario)
references Usuarios(nick)
on delete cascade on update cascade;

alter table Sesiones
add foreign key (nombreSala)
references Salas(nombre)
on delete cascade on update cascade,
add foreign key (nickUsuario)
references Usuarios(nick)
on delete cascade on update cascade;



