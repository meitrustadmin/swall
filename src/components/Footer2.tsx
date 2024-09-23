const navigation = [
  { name: 'About', href: '#' },
  { name: 'Flywheel', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Testnet', href: '#' },
  { name: 'Sign Up', href: '#' },
]


const Footer2 = () => {
  return (
    <footer className="py-10">
        <div className="flex justify-around">
            <div>
                <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Swall</span>
                        <img alt="" src="/images/swall.png" className="h-20 w-56" />
                    </a>
                        {/* <img className="absolute w-96 h-96 -top-40 -left-32 opacity-30 rounded-full" src="https://via.placeholder.com/587x1027" /> */}
                </div>
                <div className="flex justify-center mt-6">
                    <div className="flex gap-x-6">
                        <div className="w-8 h-8 rounded-full bg-purpple"></div>
                        <div className="w-8 h-8 rounded-full bg-purpple"></div>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="flex flex-col mt-3">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-base leading-6 text-violet-900">
                        {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className="text-center text-violet-950 text-base font-normal mt-4">© 2024 COPYRIGHT SWALL. ALL RIGHTS RESERVED.</div>
    </footer>
  )
}

export default Footer2
