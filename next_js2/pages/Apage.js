import Link from 'next/link'

export default ()=>(
    <>
        <div>Page A.</div>
        {/* Link 里必须要一个A标签 */}
        <Link href='/'><a>Home.</a></Link>
    </>
)