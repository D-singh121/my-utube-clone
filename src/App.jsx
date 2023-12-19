import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Box } from "@mui/material"


const App = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#000' }}>
        <Header />
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  )
}

export default App