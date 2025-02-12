import React, { useState } from 'react';

const Card = ({ title, description, link, btnText, path }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100; // Maximum characters to show initially

    const toggleReadMore = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    const renderDescription = () => {
        if (!description) {
            description = "This is a beautiful and engaging card component that provides essential information about a given topic. Click the button below to explore more details.";
        }

        if (description.length <= maxLength) {
            return description;
        }

        if (!isExpanded) {
            return (
                <>
                    {description.slice(0, maxLength)}...
                    <button
                        onClick={toggleReadMore}
                        className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                        Read More
                    </button>
                </>
            );
        }

        return (
            <>
                {description}
                <button
                    onClick={toggleReadMore}
                    className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                    Show Less
                </button>
            </>
        );
    };

    return (
        <div className="w-[320px]">
            <article className="group flex h-auto min-h-[600px] rounded-md flex-col overflow-hidden border border-neutral-300 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                <div className="h-[200px] w-full bg-no-repeat">
                    <img
                        src={path}
                        alt={title || "Card Image"}
                        className="w-full h-[200px] object-cover transition duration-700 ease-out transform group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-balance text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white" aria-describedby="cardDescription">
                        {title}
                    </h3>
                    <p id="cardDescription" className="text-pretty text-sm flex-1 text-neutral-700 dark:text-neutral-400">
                        {renderDescription()}
                    </p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                        <button
                            type="button"
                            className="w-full cursor-pointer whitespace-nowrap bg-black px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 dark:bg-white dark:text-black dark:focus-visible:outline-white rounded-md"
                        >
                            {btnText}
                        </button>
                    </a>
                </div>
            </article>
        </div>
    );
};

export default Card;