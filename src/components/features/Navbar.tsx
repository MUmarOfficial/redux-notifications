import { useAppSelector } from "@/store/hooks";
import { BellRingIcon } from "../ui/BellRingIcon";
import { selectUnreadNotificationsCount } from "@/store/notificationsSlice";

const Navbar = () => {
    const unreadNotifications = useAppSelector(selectUnreadNotificationsCount);
    return <nav className="w-full my-2 px-12 py-4 sticky top-0 z-50 bg-transparent backdrop-blur-sm shadow-lg rounded-full">
            <ul className="flex items-center justify-between">
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 shadow-lg text-white transition-all duration-300
                                hover:bg-white/10 hover:backdrop-blur-md hover:shadow-xl 
                                rounded-full hover:scale-105"
                    >
                        <span className="text-xl font-semibold">
                            Redux Notifications
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4.5 py-2 shadow-lg 
                                rounded-full"
                        aria-label="View notifications"
                    >
                        <BellRingIcon className="h-6 w-6" />
                        <span className="absolute size-4 right-[-1] top-[-18] text-white
                                bg-white/10 backdrop-blur-md shadow-lg 
                                rounded-full text-[10px] text-center">{unreadNotifications}</span>
                    </a>
                </li>
            </ul>
        </nav>
};

export default Navbar;