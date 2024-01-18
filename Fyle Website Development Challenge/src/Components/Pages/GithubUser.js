import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRepositories from "../../Hooks/useRepositories";
import useUser from "../../Hooks/useUser";
import Header from "../Shared/Header";
import Pagination from "../Shared/Pagination";
import Repositories from "./Repositories";

const GithubUser = () => {
    const { username } = useParams();

    const [user] = useUser(username);
    const [repositories, setRepositories] = useState([]);
    const { pageLoading } = useRepositories(username, setRepositories);

    return (
        <div className="container mx-auto px-5">
            <Header user={user} />
            <Repositories pageLoading={pageLoading} repositories={repositories} />
            <Pagination username={username} setRepositories={setRepositories} />
        </div>
    );
};

export default GithubUser;
