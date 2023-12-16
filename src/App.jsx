import RouteAdmin from "./Routes/RouteAdmin"
import RouteAuth from "./Routes/RouteAuth"
import RouteClient from "./Routes/RouteClient"
import RouteSadmin from "./Routes/RouteSuperAdmin"

function App() {
  return (
    <>
      <RouteClient />
      <RouteAuth />
      <RouteAdmin />
      <RouteSadmin />
    </>
  )
}

export default App