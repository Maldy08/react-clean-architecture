import { Usuarios } from "../../../../domain/entities/usuarios";
import { UsuariosRepository } from "../../../interfaces/usuarios-repository";


export class GetUserByIdUseCase {
    constructor(private usuariosRepository: UsuariosRepository) { }

    async execute(id: number): Promise<Usuarios> {
        return this.usuariosRepository.getUserById(id);
    }
}