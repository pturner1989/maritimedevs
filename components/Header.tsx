import Link from "next/link";

const links:{label:string, path:string}[] = [
//    {label: 'Home', path:'/'},
//    {label: 'Useful Resources', path: '/resources'},
//    {label: 'Guides & Articles', path: '/articles'}
]

export default function Header() {

    return (
        <div className="py-10 font-mono">
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