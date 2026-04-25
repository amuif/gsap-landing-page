
const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className='bg-[#e5e5e5] p-2 rounded-full flex gap-2 items-center w-fit'>
            <div className='bg-black rounded-full w-2 h-2'/>
            <p className='uppercase text-sm font-semibold'>{title}</p>
        </div>
    )
}

export default SectionTitle