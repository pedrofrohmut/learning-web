import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link"

type BackButtonProps = {
    text: string
    link: string
}

const BackButton = ({ text, link }: BackButtonProps) => (
    <Link href={link}>
        <button className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5">
            <ArrowLeftCircle size={18} /> {text}
        </button>
    </Link>
)

export default BackButton
