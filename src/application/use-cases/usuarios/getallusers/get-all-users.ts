import { Usuarios } from "../../../../domain/entities/usuarios";
import { UsuariosRepository } from "../../../interfaces/usuarios-repository";


export class GetAllUsersUseCase {
    constructor(private usuariosRepository: UsuariosRepository) { }

    async execute(): Promise<Usuarios[]> {
        return this.usuariosRepository.getAllUsers();
    }
}