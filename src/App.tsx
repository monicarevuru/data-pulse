import { Suspense } from "react"
import AppRoutes from "./routes"

function App() {

  return (
    <Suspense fallback={<></>}>
      <AppRoutes />
  </Suspense>
  )
}

export default App
