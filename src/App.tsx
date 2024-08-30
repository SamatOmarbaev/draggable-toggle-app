import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { WidgetsPage } from "./pages/WidgetPage"

function App() {
  return (
    <Routes >
      <Route path="/" element={<MainPage />} />
      <Route path="/widgets" element={<WidgetsPage />} />
    </Routes>
  )
}

export default App
