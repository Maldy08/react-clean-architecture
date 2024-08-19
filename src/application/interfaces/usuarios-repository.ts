import { Usuarios } from "../../domain/entities/usuarios";


export interface UsuariosRepository {

    getUserById(id: number): Promise<Usuarios>;
    getAllUsers(): Promise<Usuarios[]>;

}