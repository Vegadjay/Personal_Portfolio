import React from 'react'

export const Card = ({ title, discription, link, btnText, path }) => {
    return (
        <div>
            <article class="group flex rounded-md max-w-sm flex-col overflow-hidden border border-neutral-300 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                <div className="h-44 md:h-64 overflow-hidden bg-no-repeat">
                    <img
                        src={path}
                        alt="Descriptive Alt Text"
                        className="w-full h-full object-cover transition duration-700 ease-out transform group-hover:scale-105"
                    />
                </div>

                <div class="flex flex-col gap-4 p-6">
                    <h3 class="text-balance text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white" aria-describedby="tripDescription">{title}</h3>
                    <p id="tripDescription" class="text-pretty text-sm mb-2">
                        {discription}
                    </p>
                    <a href={link} target='_blank'>
                        <button type="button" class="cursor-pointer whitespace-nowrap bg-black px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 dark:bg-white dark:text-black dark:focus-visible:outline-white rounded-md">{btnText}</button>
                    </a>
                </div>
            </article>
        </div>
    )
}
