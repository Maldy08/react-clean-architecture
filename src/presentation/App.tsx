
import './App.css'
import { useUsuarios } from './hooks/useUsuarios'

export const App = () => {

  const { usuario, isloading, usuarios } = useUsuarios()

  return (
    <>
      <div>
          { 
            JSON.stringify(usuarios)
          }
      </div>
    </>
  )
}



