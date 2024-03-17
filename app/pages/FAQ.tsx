export default function FAQ() {
    return (
        <section id="faq"
        className="container space-y-6 bg-slate-50 py-8 md:py-12 lg:py-24 dark:bg-transparent">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="mt-8 text-4xl  lg:text-6xl text-balance bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent  drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] md:text-7xl md:leading-[5rem] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900">
                    FAQ
                </h2>
            <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            Some of the most common questions about Notely are answered below.
            Feel free to reach out if you have any other questions.
            </p>
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-400">What is Notely?</summary>
                    <p className="px-4 py-6 pt-0 -mt-4 dark:text-gray-400">
                    Notely is a modern note-taking app that allows you to quickly and easily jot down your thoughts, ideas, and tasks.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-400">How do I create a new notes & Is there a limit to how many notes I can create in Notely?</summary>
                    <p className="px-4 py-6 pt-0 -mt-4 dark:text-gray-400">
                    You can create a new note by clicking on the New Note button in your dashboard and then typing your note into the text field that appears.
                    Free accounts may have a limit, while premium accounts typically allow for unlimited notes.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-400">Is my data secure with Notely & Can I access my notes offline?</summary>
                    <p className="px-4 py-6 pt-0 -mt-4 dark:text-gray-400">
                    Yes, Notely takes data security very seriously. Your notes are stored securely and are only accessible by you.
                    Notely does only allows you to access your notes online and you can always have access to your notes when online.
                    </p>
                </details>
            </div>
        </div>
        </div>
    </section>
    );
};