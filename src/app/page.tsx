import Layout from '../components/Layout'
import { load } from 'outstatic/server'
import ContentGrid from '../components/ContentGrid'
import markdownToHtml from '../lib/markdownToHtml'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import * as Separator from '@radix-ui/react-separator';
import ContentGrid2 from '@/components/ContentGrid2'

export default async function Index() {
  const { content, allPosts, allProjects } = await getData()

  return (
    <Layout>
            {/* <div className='bg-yellow'> */}
                {/* <div className="max-w-6xl mx-auto px-5"> */}
                    {/* <Header3/> */}
                    {/* <section className="mt-16 mb-16 md:mb-12">
                    <div
                        className="prose lg:prose-2xl home-intro"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    </section> */}
                    <section className='pt-16 pb-10'>
                        <div className='text-violet-950 text-7xl text-center font-extrabold'>The Memeverse Revolution</div>
                        <div className='w-full h-96 bg-white rounded-3xl mt-4'></div>
                        <div className='text-violet-950 text-xl font-normal mt-2'>We empower content creators and communities by transforming meme channels into valuable digital assets. With Swall, you have complete control over the content you create and 
                            how it's monetized and distributed. No intermediaries. No barriers. Just pure, creator-driven 
                            innovation, where you set the rules and unlock the true potential of your creativity.
                        </div>
                        <div className="w-fit mt-2">
                            <div className="flex bg-violet-950 px-4 py-2 items-center rounded-md gap-x-2">
                                <div>
                                    <a href="#" className="text-yellow text-xl font-bold">
                                        Launch App 
                                    </a>
                                </div>
                                <ArrowRightCircleIcon className="w-5 h-5 text-yellow"/>
                            </div>    
                        </div> 
                    </section>
                {/* </div> */}
            {/* </div> */}

            <div className='bg-white pb-20'>
                <div className="max-w-6xl mx-auto px-5">
                    <div className='text-violet-950 text-5xl font-bold pt-14'>
                        Shaping Tomorrow’s Creator Economy
                    </div>
                    <div className='text-violet-950 text-3xl font-normal pb-10 mt-2'>
                        The future of the creator economy is decentralization, direct ownership, and freedom of choice. 
                        Swall empowers creators with innovative tools for multi-protocol 
                        communication—whether you prefer on-chain or off-chain interactions—alongside 
                        peer-to-peer promotion, user-generated assets, and a dynamic marketplace to 
                        reward creators and their communities. Swall enhances ownership, monetization, 
                        and audience engagement, putting creators in full control.
                    </div>
                    <div className='bg-yellow rounded-2xl'>
                        <div className='grid grid-cols-2 gap-x-2'>
                            <div className='px-4'>
                                <div className='pt-4 text-violet-950 text-xl font-bold'>
                                Own and Monetize Your Digital Assets
                                </div>
                                <div className='pt-4 text-violet-950 text-xl font-normal'>
                                Your meme channel on Swall isn't just a platform—it's a valuable digital asset you fully own and control. Through Swall's bonding curve model, you set the value of your content dynamically as demand grows. The more your community engages, the more your digital assets are worth, ensuring you benefit directly from your creative efforts.
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='pt-4 text-violet-950 text-xl font-bold'>
                                Multi-Protocol Communication
                                </div>
                                <div className='pt-4 text-violet-950 text-xl font-normal'>
                                Engage with your community on your terms. Swall allows you to choose between on-chain interactions for secure, decentralized transactions or off-chain for faster, casual community engagement. Switch between both seamlessly to meet your needs and deepen your connection with fans and followers.
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                        <div className='px-4'>
                                <div className='pt-4 text-violet-950 text-xl font-bold'>
                                Peer-to-Peer Promotion & Marketplace
                                </div>
                                <div className='py-4 text-violet-950 text-xl font-normal'>
                                Promote, share, and earn together. Swall's peer-to-peer promotion system rewards creators and community members with multi-level incentives that let your content grow organically. Plus, the built-in marketplace supports selling products, memes, and merchandise—ensuring creators and their communities are rewarded for their collective effort.
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='pt-4 text-violet-950 text-xl font-bold'>
                                Product Marketplace for Monetizing Ideas
                                </div>
                                <div className='py-4 text-violet-950 text-xl font-normal'>
                                Turn your creativity into income with Swall's product marketplace. Whether selling meme merchandise, digital assets, or launching innovative projects, the platform supports product sales and crowdfunding using the bonding curve model, allowing you to monetize your ideas effortlessly.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-purpple py-10'>
                <div className='text-center text-white text-5xl font-normal '>Fun Facts</div>
                <div className='text-center text-white/80 text-xl font-normal  px-32 mt-10 '>Memes are more than just entertainment — they’re a cultural phenomenon shaping digital communication, engagement, and even the global economy!</div>
                <div className='grid grid-cols-3 gap-x-2 px-20 mt-10'>
                    <div className='bg-yellow rounded-xl'>
                        <div className='text-violet-950 text-xl font-bold  text-center px-10 mt-4'>Memes Drive High Engagement</div>
                        <div className='flex justify-center'>
                            <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                        </div>
                        <div className='px-10 pb-8'>
                        Relatable, humorous, and viral by nature, memes consistently rank among the most engaging content on Web2 
                        platforms like Instagram, TikTok, Reddit, and more. Memes achieve impressive reach, with a 30.81% reach rate and an engagement rate of 1.23%, 
                        outperforming many other content types. Their ability to instantly connect with audiences makes memes powerful 
                        for driving high engagement and fostering community interaction.
                        </div>
                    </div>
                    <div className='bg-yellow rounded-xl'>
                        <div className='text-violet-950 text-xl font-bold  text-center px-10 mt-4'>Memes Influence Financial Markets</div>
                        <div className='flex justify-center'>
                            <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                        </div>
                        <div className='px-10 pb-8'>
                        Memes aren't just for laughs—they can move markets. The GameStop stock surge is a prime example 
                        where a meme-fueled rally led to significant financial gains. Meme-based cryptocurrencies, 
                        like Dogecoin, have also seen explosive growth driven by their viral nature, showing the real-world impact of meme culture on finance.
                        </div>
                    </div>
                    <div className='bg-yellow rounded-xl'>
                        <div className='text-violet-950 text-xl font-bold  text-center px-10 mt-4'>Memes Power Marketing and Advertising</div>
                        <div className='flex justify-center'>
                            <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                        </div>
                        <div className='px-10 pb-8'>
                        Brands and marketers are tapping into the power of memes to connect with audiences in meaningful ways. In 2022, 
                        businesses spent over $605 million on meme marketing, up from $524 million in 2021. Memes are widely used for community engagement, 
                        influencer campaigns, and to boost followership, becoming an essential part of viral marketing strategies.
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 px-20 mt-2'>
                    <div className='bg-yellow rounded-xl'>
                        <div className='text-violet-950 text-xl font-bold  text-center px-10 mt-4'>Memes Have Global Reach</div>
                        <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-10 pb-8'>
                            Memes are a universal language, connecting people across the globe through humor and shared experiences. In North America, 64% of people aged 18-29 regularly use memes. Europe follows closely, with meme usage high in countries like the UK (51%), France (47%), and Germany (42%).
                            </div>
                            <div className='px-10 pb-8'>
                            In Latin America, memes are an integral part of digital culture—86% of Brazilians and 85% of Mexicans frequently share memes. Even in China, younger demographics, especially those aged 20-29, are passionate meme users, with 63% regularly engaging with meme content.
                            </div>
                        </div>
                    </div>
            </div>
            <div className='my-10 mx-5'>
                {allPosts.length > 0 && (
                <ContentGrid2
                    title=""
                    items={allPosts}
                    collection="posts"
                    priority
                />
                )}
            </div>
            
            <div className='bg-purpple py-4'>
                <div className='text-center text-white text-6xl font-bold'>Our Approach</div>
                {/* <div className='text-white/80 text-2xl font-normal  px-72'>The Swall Flywheel is your roadmap to unlock the full potential of your channel, 
                    build momentum through peer-driven promotion, attract brand sponsorships, 
                    and continuously expand your reach and revenue.
                </div> */}
                <div className='grid grid-cols-4 mt-2'>
                    <div></div>
                    <div className='text-white/80 text-2xl font-normal col-span-2 text-center'>The Swall Flywheel is your roadmap to unlock the full potential of your channel, 
                    build momentum through peer-driven promotion, attract brand sponsorships, 
                    and continuously expand your reach and revenue.
                    </div>
                    <div></div>
                </div>
                <div className='grid grid-cols-4 mt-4'>
                    <div></div>
                    <div className='col-span-2 grid grid-cols-2 gap-x-2'>
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-16 text-center text-violet-950 text-base font-bold font-defualt'>Create & Launch Your Channel</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                                Set up your channel with a bonding curve model that dynamically adjusts the price of member licenses based on demand. As more people join your channel, the value of each license increases, allowing you to benefit directly from your channel’s growth and popularity.
                            </div>
                        </div>
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-16 text-center text-violet-950 text-base font-bold font-defualt'>Develop & Share Content</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            Keep your audience engaged with regular meme drops, viral posts, and interactive challenges. Consistent, high-quality content will keep followers excited and eager to share your channel with others.
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='grid grid-cols-4 mt-4'>
                    <div></div>
                    <div className='col-span-2 grid grid-cols-2 gap-x-2'>
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-16 text-center text-violet-950 text-base font-bold font-defualt'>Activate Peer-to-Peer Promotion</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            Use your promotion link to spark viral growth. Followers can share it with their networks, earning rewards for themselves and boosting your channel’s reach. This peer-to-peer promotion fuels organic growth and extends your visibility.
                            </div>
                        </div>
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-10 text-center text-violet-950 text-base font-bold font-defualt'>Amplify Growth with Community Engagement</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            Empower your community to become active promoters. Host events, meme contests, and exclusive content releases to increase engagement. The more your followers participate, the faster your channel grows in value and reach.
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='grid grid-cols-4 mt-4'>
                    <div></div>
                    <div className='col-span-2 grid grid-cols-2 gap-x-2'>
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-16 text-center text-violet-950 text-base font-bold font-defualt'>Monetize & Scale Value</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            As demand for your channel grows, the value of member licenses rises. Sell exclusive memes, digital assets, or merchandise through the marketplace to monetize your audience, turning your creativity into a sustainable revenue stream.
                            </div>
                        </div>
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-10 text-center text-violet-950 text-base font-bold font-defualt'>Attract & Deliver Brand-Sponsored Content</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            Maximize results for your clients by offering brand-sponsored content opportunities. Use your growing community and peer-to-peer promotion system to amplify sponsored campaigns, ensuring greater brand reach and engagement. Show brands the impact of your audience and help them achieve measurable results through authentic, community-driven promotion.
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='grid grid-cols-3 mt-4'>
                    <div></div>
                    {/* <div className='grid grid-cols-1'> */}
                        <div className='bg-white rounded-lg py-4'>
                            <div className='px-16 text-center text-violet-950 text-base font-bold font-defualt'>Reinvest & Expand</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            Reinvest earnings to upgrade your content and reward top community members. Collaborate with other creators, expand into new niches, and keep your channel evolving to maintain long-term growth in the Memeverse.
                            </div>
                        </div>
                        {/* <div className='bg-white rounded-lg py-4'>
                            <div className='px-10 text-center text-violet-950 text-base font-bold font-defualt'>Attract & Deliver Brand-Sponsored Content</div>
                            <div className='flex justify-center'>
                                <Separator.Root className='bg-violet-950 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-10 data-[orientation=vertical]:h-full my-4'/>
                            </div>
                            <div className='px-4 text-center text-violet-950 text-base font-normal '>
                            Maximize results for your clients by offering brand-sponsored content opportunities. Use your growing community and peer-to-peer promotion system to amplify sponsored campaigns, ensuring greater brand reach and engagement. Show brands the impact of your audience and help them achieve measurable results through authentic, community-driven promotion.
                            </div>
                        </div> */}
                    {/* </div> */}
                    <div></div>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className="w-fit">
                        <div className="flex bg-yellow px-4 py-2 items-center rounded-md gap-x-2">
                            <div>
                                <a href="#" className="text-purpple text-xl font-bold ">
                                    Launch App 
                                </a>
                            </div>
                            <ArrowRightCircleIcon className="w-5 h-5 text-purpple"/>
                        </div>    
                    </div> 
                </div>

            </div>
            {/* {allProjects.length > 0 && (
            <ContentGrid
                title="Projects"
                items={allProjects}
                collection="projects"
            />
            )} */}
    </Layout>
  )
}

async function getData() {
  const db = await load()

  const page = await db
    .find({ collection: 'pages', slug: 'home' }, ['content'])
    .first()

  const content = await markdownToHtml(page.content)

  const allPosts = await db
    .find({ collection: 'posts' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'tags'
    ])
    .sort({ publishedAt: -1 })
    .toArray()
    console.log(JSON.stringify(allPosts))

  const allProjects = await db
    .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
    .sort({ publishedAt: -1 })
    .toArray()

  return {
    content,
    allPosts,
    allProjects
  }
}
