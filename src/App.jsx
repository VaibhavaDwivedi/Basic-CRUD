import { useRoutes } from "react-router-dom";
import EmployeePage from "./EmployeePage";

function App() {
  const routeElement = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <EmployeePage />,
        },
        // {
        //   path: "newuser",
        //   element: <NewUser />,
        // },
      ],
    },
  ]);

  return routeElement;
}

export default App;
