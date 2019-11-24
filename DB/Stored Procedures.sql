delimiter //
create procedure insertarUsuario(in pnick varchar(50))
begin
	insert into usuarios(nick) values(pnick);
end
//

delimiter //
create procedure SalasCrear(in nombre varchar(50), in nick varchar(50))
begin
	insert into salas values(CURDATE(), nombre, nick);
end//

delimiter //
create procedure SesionesCrear(in nombre varchar(50), in nick varchar(50))
begin
	insert into sesiones(fechaHoraInicio, fechaHoraFin, nickUsuario, nombreSala) values(now(), null, nick, nombre);
end//