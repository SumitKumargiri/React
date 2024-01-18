import React from "react";
import { BallTriangle } from "react-loader-spinner";
import Repository from "./Repository";

const Repositories = ({ repositories, pageLoading }) => {
    if (pageLoading) {
        return <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{ justifyContent: "center", alignItems: "center", height: "100vh" }} visible={true} />;
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                {repositories.map((repository) => (
                    <Repository key={repository.id} repository={repository} />
                ))}
            </div>
        </div>
    );
};

export default Repositories;
