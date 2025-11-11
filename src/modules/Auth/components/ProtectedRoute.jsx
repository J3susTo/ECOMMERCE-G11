import useAuthStore from "../../../store/useAuthStore"
import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
  const { isLogged } = useAuthStore();

  console.log("Desde ProtectedRoute:", isLogged)

  return (
    <>
      { isLogged ? props.children : <Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoute
