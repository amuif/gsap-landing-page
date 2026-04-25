
import SectionTitle from './section-title'

const OurServices = () => {
    return (
        <div className='border-y-0 border border-dashed border-gray-300 w-full max-w-5xl  flex flex-col gap-4'>
            <div className='mx-auto pt-14 flex flex-col gap-5'>
                <div className='mx-auto'>
                    <SectionTitle title='our services' />
                </div>
                <h2 className='text-3xl md:text-5xl  font-semibold'>
                    Problem-Solving <span className='text-[#4F4F4F]'>AI.</span>
                </h2>
                <p className='text-balance'>Explore the key features that drive our partners growth, day after day.</p>
            </div>
        </div>
    )
}

export default OurServices