import {withRouter} from 'next/router'
import Link from 'next/link'

const Device =({router}) =>{
    return(
        <>
            <div>
                {router.query.name}  ,
                {router.query.numbers}
            </div>
        </>
    )
}
export default withRouter(Device)