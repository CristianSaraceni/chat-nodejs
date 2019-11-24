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