import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GithubUser from "./Components/Pages/GithubUser";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Shared/NotFound";

export const UserContext = createContext();

function App() {
    const [username, setUsername] = useState("");

    return (
        <UserContext.Provider value={[username, setUsername]}>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/:username" element={<GithubUser />} />

                <Route path="/user-not-found" element={<NotFound />} />
            </Routes>
        </UserContext.Provider>
    );
}

export default App;
