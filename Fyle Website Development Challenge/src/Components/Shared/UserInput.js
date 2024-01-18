import React from "react";
import { useNavigate } from "react-router-dom";

const UserInput = () => {
    const navigate = useNavigate();

    const handleUserInput = (e) => {
        e.preventDefault();
        const inputText = e.target.username.value;
        navigate(`/${inputText}`);

        e.target.reset();
    };
    return (
        <div className="form-control w-full max-w-xs">
            <div className="divider">OR</div>
            <form className="input-group pt-4" onSubmit={handleUserInput}>
                <input name="username" type="text" placeholder="Input your username" className="input input-bordered w-full max-w-xs" />
                <button type="submit" className="btn">
                    Go
                </button>
            </form>
        </div>
    );
};

export default UserInput;
