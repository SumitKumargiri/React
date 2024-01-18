import React from "react";

const Repository = ({ repository }) => {
    const { name, description, topics, html_url } = repository;

    return (
        <div className="border p-2">
            <a target="_blank" href={html_url} rel="noreferrer">
                <h2 className="capitalize text-2xl font-semibold text-info mb-3">{name.split("-").join(" ")}</h2>
            </a>
            <p className="mb-3">{description}</p>
            {topics
                .map((topic, index) => {
                    return (
                        <button key={index} className="lowercase btn btn-sm btn-info mr-2 mb-2 text-white">
                            {topic}
                        </button>
                    );
                })
                .slice(0, 4)}

            {topics.length > 4 && (
                <div data-tip={topics.slice(4).slice(",").join(", ")} className="tooltip">
                    <button className="btn btn-sm btn-info mb-2 text-white">{topics.length - 4 + "+"}</button>
                </div>
            )}
        </div>
    );
};

export default Repository;
