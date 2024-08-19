import { useEffect, useState } from "react";
import { Usuarios } from "../../domain/entities/usuarios";
import { GetUserByIdUseCase } from "../../application/use-cases/usuarios/getuserbyid/get-user-by-id-use-case";
import { UsuariosRepositoryImplementation } from "../../infrasctructure/repositories/usuarios-repository-implementation";
import { GetAllUsersUseCase } from "../../application/use-cases/usuarios/getallusers/get-all-users";


export const useUsuarios = () => {

    const [isloading, setIsloading] = useState(true);
    const [usuario, setUsuario] = useState<Usuarios>();
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

    useEffect(() => {
        initialLoad();
      }, []);

    const initialLoad = async () => {
        setIsloading(true);
        const fetchDataUseCase = new GetUserByIdUseCase(new UsuariosRepositoryImplementation());
        const fetchAllUserUseCase = new GetAllUsersUseCase(new UsuariosRepositoryImplementation());
        //const result = await fetchDataUseCase.execute(1);
        const resultAll = await fetchAllUserUseCase.execute();
        //setUsuario(result);
        setUsuarios(resultAll);

        setIsloading(false);
    }

    return { isloading, usuario, initialLoad, usuarios };
}
