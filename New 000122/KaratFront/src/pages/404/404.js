import React from 'react';
import {useStyles} from "./styles"

const Page404 = () => {

    const style = useStyles()

    return ( 
        <div className={style.maintxtformat}>
            <div className={style.txt404}>404</div>
            <div>گشتیم نبود ! نگرد نیست !</div>
        </div>
     );
}
 
export default Page404;