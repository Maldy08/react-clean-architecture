import { UsuariosRepository } from "../../application/interfaces/usuarios-repository";
import { Result } from "../../domain/common/result";
import { Usuarios } from "../../domain/entities/usuarios";
import { DbAdapter } from "../adapters/db.adapter";
import { UsuariosMapper } from "../mappers/usuarios.mapper";

export class UsuariosRepositoryImplementation implements UsuariosRepository {

  async getAllUsers(): Promise<Usuarios[]> {
    const { data } = await DbAdapter.get<Result<Usuarios[]>>(
      "Usuario/GetAllUsuarios"
    );

    return data.map((usuario) => UsuariosMapper.mapFromApiToDomain(usuario));
  }

  async getUserById(id: number): Promise<Usuarios> {
    const { data } = await DbAdapter.get<Result<Usuarios>>(
      `Usuario/GetUserById?id=${id}`
    );
    
    return UsuariosMapper.mapFromApiToDomain(data);
  }
}
