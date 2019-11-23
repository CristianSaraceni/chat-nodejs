delimiter //
create procedure insertarUsuario(in pnick varchar(50))
begin
	insert into usuarios(nick) values(pnick);
end
//