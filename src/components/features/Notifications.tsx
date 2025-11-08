import { Circle } from "lucide-react";
import { CircleCheckBigIcon } from "../ui/CircleCheckBigIcon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { markAsRead, selectNotifications } from "@/store/notificationsSlice";

const Notifications = () => {

    const notifications = useAppSelector(selectNotifications);
    const dispatch = useAppDispatch();
    return <ul>
        {
            notifications.map((notification) => {
                return (
                    <li key={notification.id} className="flex items-center justify-between max-w-xl mx-auto my-2 px-8 py-4 sticky top-0 z-50 bg-transparent backdrop-blur-sm shadow-lg rounded-full cursor-pointer hover:border-white border-transparent border transition ease-in duration-300 mb-2">
                        <p>{notification.text}</p>
                        <div onClick={() => {
                            const idToUpdate = notification.id;
                            dispatch(markAsRead(idToUpdate));
                        }}>{
                                notification.read ? <div className="size-7 m-1"><CircleCheckBigIcon /></div> : <div className="size-7 m-1"><Circle className="size-6" /></div>
                            }
                        </div>
                    </li>
                );
            }
            )
        };
    </ul>;
}

export default Notifications;
