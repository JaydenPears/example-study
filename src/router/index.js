import MainPage from "../pages/MainPage";
import SecondPage from "../pages/SecondPage";


export const arrayRoutes = [
    {id: 0, path: "", element: <MainPage/>, exact: true},
    {id: 1, path: "/page", element: <SecondPage/>, exact: true},
]