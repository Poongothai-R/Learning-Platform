import "./styles/global/style.css";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./state/UserState";
import { useEffect } from "react";
import { readDocuments } from "./scripts/fireStore";
import UnloggedRoutes from "./routes/UnloggedRoutes";
import LoggedRoutes from "./routes/LoggedRoutes";

export default function App() {
  const { uid, setProfileData } = useUser();
  const profileCollection = 'profile';
 
  useEffect(() => {
    const loadData = async (collectionName) => {
        const data = await readDocuments(collectionName).catch(onFail);
        onSuccess(data);
    }
    loadData(profileCollection);
}, [onSuccess]);

function onSuccess(data) {
  setProfileData(data);
    // setStatus(1);
}

function onFail() { 
  // setStatus(2); 
  console.error();
}

  return (
    <BrowserRouter>
     {uid ? <LoggedRoutes/> : <UnloggedRoutes />}
    </BrowserRouter>
  );
}


