
export default function Menu(){

    return (
        <>
            {/* drawer init and show */}
            <div className="text-center">
                <button
                className="button text-black text-2xl bg-white-700 hover:bg-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:text-white dark:hover:bg-gray-800"
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
                >
                Menu
                </button>
            </div>
            {/* drawer component */}
            <div
                id="drawer-navigation"
                className="font fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full menu dark:bg-gray-800"
                tabIndex={-1}
                aria-labelledby="drawer-navigation-label"
            >
                <h5
                id="drawer-navigation-label"
                className="text-3xl font-extrabold text-black uppercase dark:text-white"
                >
                BIBLION
                </h5>
                <button
                type="button"
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-pink-400 bg-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                    <a
                        href="#home"
                        className="flex items-center p-2 text-white dark:text-pink hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 menuElement"
                    >
                        <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                    </a>
                    </li>
                    <li>
                    <a
                        href="#indicacoes"
                        className="flex items-center p-2 text-white dark:text-pink hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 menuElement"
                    >
                        <span className="flex-1 ml-3 whitespace-nowrap">Indicações</span>
                    </a>
                    </li>
                    <li>
                    <a
                        href="#sobre"
                        className="flex items-center p-2 text-white dark:text-pink hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 menuElement"
                    >
                        <span className="flex-1 ml-3 whitespace-nowrap">Sobre</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </>
    );

}
