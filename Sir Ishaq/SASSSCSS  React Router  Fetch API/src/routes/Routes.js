import { Routes as AppRoutes, Route } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Invoice from "../components/Invoice"

const Routes = () => {
  return (
    <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices/:invoiceId" element={<Invoice />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={"Page Not Found"} />
    </AppRoutes>
  )
}

export default Routes