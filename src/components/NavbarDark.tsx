import {
    Navbar,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";

export function NavbarDark() {
    return (
        <Navbar
            {...{}}
            variant="gradient"
            color="blue-gray"
            className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
                <Typography
                    {...{}}
                    as="a"
                    href="#home"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    Redux Notifications
                </Typography>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <IconButton variant="text" color="white">
                        <BellIcon className="h-4 w-4" />
                    </IconButton>
                </div>
            </div>
        </Navbar>
    );
}