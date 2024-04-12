import React from "react";

const Work = () => {
    return (
        <div>
            <div className="container mx-auto max-w-6xl p-3">
                <div
                    className="relative mt-8"
                    role="region"
                    aria-roledescription="carousel"
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex -ml-4"
                            style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/k73UnJZ.png);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            Discord Place
                                        </h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            All things related to Discord in one place. Find the best
                                            bots, servers, and communities.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                Next.js
                                            </span>
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                Express
                                            </span>
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                MongoDB
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://discord.place"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                discord.place
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/XXrkGOK.png);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            Steam Auto Try Converter
                                        </h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            A Google Chrome extension that automatically converts
                                            prices to TRY from USD with the current exchange rate on
                                            Steam web pages.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                JavaScript
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://github.com/chimpdev/steam-auto-try-converter"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                github.com/chimpdev/steam-auto-try-converter
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/4eFt9Oz.png);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            Discord SFX
                                        </h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            A website that allows you download mp3 files for your
                                            Discord Soundboard.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                Next.js
                                            </span>
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                Express
                                            </span>
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                MongoDB
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://discordsfx.com"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                discordsfx.com
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/PIAu4fe.jpg);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">Psimed</h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            A website for mental health center specializing in
                                            psychiatry, psychology, and psychotherapy.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                React
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://psimed.com.tr"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                psimed.com.tr
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/zVc91Zb.jpg);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">KİPT</h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            A website for a psychotherapy company specializing in
                                            evidence-based, short-term sessions for improved
                                            relationships and life quality, grounded in attachment
                                            models.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                React
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://kisilerarasiiliskilerterapisi.com"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                kisilerarasiiliskilerterapisi.com
                                            </span>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/5luXgfT.jpg);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            Seçim Barış Yasaman
                                        </h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            A website for a simulate election that in Discord Roleplay
                                            Server.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                React
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://secim.barisyasaman.com"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                secim.barisyasaman.com
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/XXrkGOK.png);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">bencan.net</h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            My personal website. You are here.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                Next.js
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://github.com/chimpdev/bencan.net"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                github.com/chimpdev/bencan.net
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
                            <div
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex sm:basis-1/2 xl:basis-1/4"
                            >
                                <div className="block w-[20px] h-full"></div>
                                <div
                                    className="w-[700px] h-[250px] xl:w-[350px] xl:h-[250px] rounded-lg relative"
                                    style={{ backgroundImage: "url(https://i.imgur.com/XXrkGOK.png);background-size:cover;background-position:center" }}
                                >
                                    <div className="absolute flex flex-col justify-end w-full h-full p-4 rounded-lg bg-gradient-to-t from-black via-black/80 gap-y-2">
                                        <h2 className="text-xl font-semibold text-white">
                                            Squirrelers Bot
                                        </h2>
                                        <p className="text-xs text-white text-opacity-80 text-pretty">
                                            A Discord bot for squirrel lovers. For DDevs Buildathon.
                                            Open sourced.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                Node.js
                                            </span>
                                            <span className="text-xs font-semibold text-opacity-80 bg-secondary px-2 py-0.5 rounded-sm">
                                                MongoDB
                                            </span>
                                        </div>
                                        <a
                                            className="flex items-center mt-1 text-xs text-white hover:underline gap-x-1"
                                            href="https://github.com/chimpdev/squirrelers-bot"
                                            previewlistener="true"
                                        >
                                            <span className="block max-w-[220px] truncate">
                                                github.com/chimpdev/squirrelers-bot
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
                        </div>
                    </div>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                        >
                            <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Next slide</span>
                    </button>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
                        disabled=""
                    >
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                        >
                            <path
                                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Previous slide</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Work;
