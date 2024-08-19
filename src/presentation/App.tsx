
import './App.css'
import { useUsuarios } from './hooks/useUsuarios'

export const App = () => {

  const { usuario, usuarios, isloading } = useUsuarios()

  return (
    <>
      <div>
          { 
            isloading ? <p>Loading...</p> :
             usuarios.map((user, index) => (
              <div key={index}>
                <p>{user.login}</p>
                <p>{user.depto}</p>
                <p>{user.descripcion}</p>
              </div>
            ))
          }
      </div>
    </>
  )
}



