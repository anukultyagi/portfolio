import React from "react";
import { workData } from "@/data";

const Work = () => {
    return (
        <div className="container mx-auto max-w-6xl p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {workData.map((project) => (
                    <div
                        key={project.id}
                        role="group"
                        aria-roledescription="slide"
                        className="relative rounded-lg overflow-hidden"
                    >
                        <div
                            className="w-full h-[250px] rounded-lg relative"
                            style={{
                                backgroundImage: `url(${project.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                <h2 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h2>
                                <p className="text-xs text-white text-opacity-80">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                    href={project.link}
                                    previewlistener="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="block max-w-[220px] truncate">
                                        {project.repo ? project.link : project.title}
                                    </span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
