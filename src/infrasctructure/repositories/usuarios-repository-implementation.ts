import { UsuariosRepository } from "../../application/interfaces/usuarios-repository";
import { Result } from "../../domain/common/result";
import { Usuarios } from "../../domain/entities/usuarios";
import { DbAdapter } from "../adapters/db.adapter";
import { UsuariosMapper } from "../mappers/usuarios.mapper";


export class UsuariosRepositoryImplementation implements UsuariosRepository {

    async getAllUsers(): Promise<Usuarios[]> {
        //const response = await fetch('http://200.56.97.5:7281/api/Usuario/GetAllUsuarios');
        const { data } = await DbAdapter.get<Result<Usuarios[]>>('Usuario/GetAllUsuarios');
       // console.log(data);
        return data.map((usuario) => UsuariosMapper.mapFromApiToDomain(usuario as Usuarios));

    }
    async getUserById(id: number): Promise<Usuarios> {
        const  {data}  = await DbAdapter.get<Result<Usuarios>>(`Usuario/GetUserById?id=${id}`);

       // const data = await response.json();
       return UsuariosMapper.mapFromApiToDomain(data as Usuarios);

    }
}