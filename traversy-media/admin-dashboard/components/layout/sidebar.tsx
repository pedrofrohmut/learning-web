import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from "@/components/ui/command"
import Link from "next/link"
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react"

const Sidebar = () => {
    return (
        <Command className="bg-slate-300 rounded-none">
            <CommandInput placeholder="Type a command or search..." />

            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Suggestions">
                    <Link href="/">
                        <CommandItem>
                            <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
                        </CommandItem>
                    </Link>

                    <Link href="/posts">
                        <CommandItem>
                            <Newspaper className="mr-2 h-4 w-4" /> Posts
                        </CommandItem>
                    </Link>

                    <Link href="/categories">
                        <CommandItem>
                            <Folders className="mr-2 h-4 w-4" /> Categories
                        </CommandItem>
                    </Link>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" /> Profile
                        <CommandShortcut>Ctrl + P</CommandShortcut>
                    </CommandItem>

                    <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" /> Billing
                        <CommandShortcut>Ctrl + B</CommandShortcut>
                    </CommandItem>

                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4"/> Settings
                        <CommandShortcut>Ctrl + S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    )
}

export default Sidebar
