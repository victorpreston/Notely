export default function Features() {
    return (
        <><section
            id="features"
            className="container space-y-6 bg-slate-50 py-8 md:py-12 lg:py-24 dark:bg-transparent">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="mt-8 text-4xl  lg:text-6xl text-balance bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent  drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] md:text-7xl md:leading-[5rem] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900">
                    Features
                </h2>
                <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                Notely is a modern, feature-rich application designed to streamline your note-taking process. 
                Built with Next.js 14, SuperBase, KindeAuth Prisma ORM & Shadcdn UI.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-plus">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    <path d="M9 12h6"/>
                    <path d="M12 9v6"/>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Authentication</h3>
                            <p className="text-sm text-muted-foreground">
                                Notely allows you to have your notes secured.
                                This means that only you can access your notes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
                    <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Dashboard</h3>
                            <p className="text-sm text-muted-foreground">
                                You can manage your notes from our dashboard.
                                This makes it easy to keep track of your notes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                    <circle cx="12" cy="12" r="3"/></svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Settings</h3>
                            <p className="text-sm text-muted-foreground">
                                Notely allows you to customize your settings.
                                You can try out different settings to see what works best for you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Bookmarks</h3>
                            <p className="text-sm text-muted-foreground">
                                Notely allows you to bookmark your notes.
                                This makes it easy to access your favorite notes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-wide-narrow">
                        <path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/>
                    <path d="M11 12h4"/></svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Sorting</h3>
                            <p className="text-sm text-muted-foreground">
                                Notely allows you to sort your notes by category, date or title.
                                This means you can easily to find your notes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-kanban"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                    <path d="M8 10v4"/>
                    <path d="M12 10v2"/>
                    <path d="M16 10v6"/>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Management</h3>
                            <p className="text-sm text-muted-foreground">
                                Notely allows you to easily create, save, edit and delete notes at your convenience.
                                Our makes note management a breeze.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    );
  };