import Footer from './Footer'
import Footer2 from './Footer2'
import Header3 from './Header3'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
        
        <div className='bg-yellow'>
            <div className="max-w-6xl mx-auto px-5">
                <Header3/>
                <main>{children}</main>
                <Footer2 />
            </div>
        </div>
        
    </>
  )
}

export default Layout
