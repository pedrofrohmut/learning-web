import Link from "next/link"
import Image from "next/image"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import ThemeToggler from "@/components/shared/theme-toggler"

import logoImage from "@/img/logo.png"

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
            <Link href="/">
                <Image src={logoImage} alt="TraversyPress" width={40} />
            </Link>

            <div className="flex items-center">
                <ThemeToggler />

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback className="text-black">BT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <Link href="/profile">Profile</Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Link href="/auth">Sign Out</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar
