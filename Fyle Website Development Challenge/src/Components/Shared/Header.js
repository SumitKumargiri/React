import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = ({ user }) => {
    const { avatar_url, name, location, twitter_username, login, bio } = user;

    return (
        <header className="sm:flex items-center gap-10 py-10 container mx-auto">
            <div>
                <img className="w-[300px] rounded-full border p-1 mb-5" src={avatar_url} alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-medium">{name}</h2>
                <p className="text-xl font-thin mb-4">{login}</p>
                <p className="w-[400px] mb-4">{bio}</p>
                <p className="mb-1">
                    <FontAwesomeIcon className="w-5" icon={faLocationDot} /> {location}
                </p>
                <p className="mb-1">
                    <FontAwesomeIcon className="w-5" icon={faTwitter} /> <a href={`https://twitter.com/${twitter_username}`}>@{twitter_username}</a>
                </p>
                <p className="mb-1">
                    <FontAwesomeIcon className="w-5" icon={faLink} /> <a href={`https://github.com/${login}`}>https://github.com/{login}</a>
                </p>
            </div>
        </header>
    );
};

export default Header;
