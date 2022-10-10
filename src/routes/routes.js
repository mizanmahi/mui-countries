import PDF from "../components/PDF/PDF";
import Home from "../pages/Home/Home";
import SingleCountry from "../pages/SingleCountry/SingleCountry";

 export const routes = [
    {
       path: '/',
       element: <Home />,
    },
    {
       path: 'name/:country',
       element: <SingleCountry />,
    },
    {
       path: 'pdf',
       element: <PDF />,
    }
 ];