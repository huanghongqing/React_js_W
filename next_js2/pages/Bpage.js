import React from 'react'
import Link from 'next/link'
import React from 'react'

export default ()=>(
    <>
        <div>Page B.</div>
        {/* Link 里必须要一个A标签 */}
        <Link href='/'><a>Home.</a></Link>
    </>
)