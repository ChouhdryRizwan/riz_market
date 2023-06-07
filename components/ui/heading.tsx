export default function Heading({ overlay, head }: {
    overlay: string,
    head: string,
}) {
    return (
        <div className='relative'>
            <span className='text-9xl font-bold opacity-10 text-gray-400 tracking-wide'>{overlay}</span>
            <span className='text-3xl font-bold absolute left-0 top-14'>{head}</span>
            <hr className='text-gray-500 mt-5' />
        </div>
    )
}


