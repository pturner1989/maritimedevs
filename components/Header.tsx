import Link from "next/link";
import Image from "next/image";

const links:{label:string, path:string}[] = [
    {label: 'Home', path:'/'},
//    {label: 'Useful Resources', path: '/resources'},
    {label: 'Useful Tools', path: '/articles'}
]

export default function Header() {

    return (
        <div className="py-10 font-mono">
            <div className="flex justify-center mb-4">
                <Image
                    src="/appicon.png"
                    alt="Maritime Devs Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
            </div>
            <h1 className="text-4xl text-center">🚢 Maritime Devs 🚢</h1>
            <div className="pt-6 flex gap-4 justify-center text-blue-600">
                {
                    links.map((link, i) => {
                            return (
                                <Link href={link.path} key={link.path}>{link.label}</Link>
                            )
                    })
                }
            </div>
        </div>
    )
}