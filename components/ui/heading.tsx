export default function Heading({ overlay, head }: {
    overlay: string,
    head: string,
}) {
    return (
        <div className='relative'>
            <span className='xl:text-9xl lg:text-9xl text-5xl font-bold opacity-10 text-gray-400 tracking-wide'>{overlay}</span>
            <span className='xlgl:text-3xl xl:text-3xl text-sm font-bold absolute left-0 top-5 lg:top-14 xl:top-14'>{head}</span>
            <hr className='text-gray-500 lg:mt-5 xl:mt-5 mt-2' />
        </div>
    )
}


