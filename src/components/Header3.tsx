import { ArrowDownCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Flywheel', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Testnet', href: '#' },
    { name: 'Sign Up', href: '#' },
]

export default function Header3() {
    return (
        <header className="">
            <nav aria-label="Global" className="mx-auto gap-x-10 flex max-w-7xl p-6 lg:px-8">
                <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Swall</span>
                        <img alt="" src="/images/swall.png" className="w-auto lg:h-36 pt-10" />
                    </a>
                    {/* <img className="absolute w-96 h-96 -top-40 -left-32 opacity-30 rounded-full" src="https://via.placeholder.com/587x1027" /> */}
                </div>
                <div className="flex justify-around w-full mt-5">
                    <div className="hidden lg:flex lg:gap-x-12 mt-3">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-xl leading-6 font-normal text-violet-900">
                            {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="">
                        <div className="flex bg-violet-950 px-4 py-2 items-center rounded-md gap-x-2">
                            <div>
                                <a href="#" className="text-yellow text-xl font-bold font-default">
                                    Launch App 
                                </a>
                                {/* <span aria-hidden="true"></span> */}
                            </div>
                            <ArrowRightCircleIcon className="w-5 h-5 text-yellow"/>
                        </div>    
                    </div>
                </div>
            </nav>
        </header>
    )
}