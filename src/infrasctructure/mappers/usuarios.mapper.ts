import { Result } from "../../domain/common/result";
import { Usuarios } from "../../domain/entities/usuarios";


export class UsuariosMapper {
    static mapFromApiToDomain(result: Result<Usuarios>): Usuarios {
        return {
             activo: result.data.activo,
                activos: result.data.activos,
                activosNivel: result.data.activosNivel,
                almacen: result.data.almacen,
                almacenNivel: result.data.almacenNivel,
                bd: result.data.bd,
                caja: result.data.caja,
                cajaNivel: result.data.cajaNivel,
                code: result.code,
                compras: result.data.compras,
                comprasNivel: result.data.comprasNivel,
                contabilidad: result.data.contabilidad,
                contabilidadNivel: result.data.contabilidadNivel,
                data: result.data,
                depto: result.data.depto,
                deptoDescripcion: result.data.deptoDescripcion,
                descripcion: result.data.descripcion,
                exception: result.exception,
                idPue: result.data.idPue,
                login: result.data.login,
                messages: result.messages,
                municipio: result.data.municipio,
                noEmpleado: result.data.noEmpleado,
                nombreCompleto: result.data.nombreCompleto,
                nominas: result.data.nominas,
                nominasNivel: result.data.nominasNivel,
                oficina: result.data.oficina,
                pass: result.data.pass,
                polnom: result.data.polnom,
                presupuestos: result.data.presupuestos,
                presupuestosNivel: result.data.presupuestosNivel,
                succeeded: result.succeeded,
                usuario: result.data.usuario,
                vales: result.data.vales,
                valesNivel: result.data.valesNivel,
                viaticos: result.data.viaticos,
                viaticosNivel: result.data.viaticosNivel
        }
    }

}