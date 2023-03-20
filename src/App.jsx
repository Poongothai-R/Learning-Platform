import "./styles/global/style.css";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./state/UserState";

import UnloggedRoutes from "./routes/UnloggedRoutes";
import LoggedRoutes from "./routes/LoggedRoutes";

export default function App() {
  const { uid } = useUser();

  return (
    <BrowserRouter>
     {uid ? <LoggedRoutes/> : <UnloggedRoutes />}
    </BrowserRouter>
  );
}


