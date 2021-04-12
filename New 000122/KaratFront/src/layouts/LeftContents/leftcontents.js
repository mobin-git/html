import React, { useState } from 'react';
import moment from 'jalali-moment'
import Clock from 'react-live-clock';
import { DatePicker } from "jalali-react-datepicker";
import JCalendar from 'reactjs-persian-calendar'

import {useStyles} from "./styles"
import {Todaysapi} from "../../api/reports/reportsapi"

import TimerIcon from '@material-ui/icons/Timer';


function Leftcontents() {

    const style = useStyles()
    const m = moment();
    m.locale('fa');

    const [todayleft , settodayleft] = useState("")
    const [todaydone , settodaydone] = useState("")

    const today = m.format('YYYY/MM/DD')
    const todayDate = m.format('dddd')+" "+m.format('D')+" "+m.format('MMMM')

    Todaysapi(today,(okness , data)=>{
        if(!okness) return alert(data);
        else{
            settodayleft(data.left);
            settodaydone(data.done)
        } 
    });

    return (
        <div className={style.leftcontents}>
            <div className={style.contents}>
                <div className={style.content} style={{height: "5.4rem", marginTop: "1.5vh"}}>
                    <div className={style.todayworks}>
                        <div className={style.maintxt}>وظایف</div>
                        <div>امروز</div>
                    </div>
                    <div className={style.numcontent}>{ todayleft }</div>
                </div>
                <div className={style.content} style={{height: "5.4rem"}}>
                    <div className={style.todayworks}>
                        <div className={style.maintxt} style={{fontSize:"150%"}}>انجام شده</div>
                        <div>امروز</div>
                    </div>
                    <div className={style.numcontent}>{ todaydone }</div>
                </div>
                <div className={style.content} style={{height:"8rem",flexDirection:"column",alignItems:"center",justifyContent: "center",overflow:"hidden"}}>
                    <div style={{margin:"-0.5rem 0rem",fontSize:"3.8vw",fontWeight:"bold"}}>
                        <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Tehran'} />
                    </div>
                    <div style={{fontSize:"1.5vw",fontWeight:"bold", marginTop: "4%"}}> {todayDate} </div>
                </div>
                <JCalendar 
                locale={'fa'} 
                color={'#0069cc'}
                size={30}
                onClick={console.log}
                itemRender={(key, item, children) => children}
                />
                <a href={"/stopwatch"} className={style.content} style={{height: "5.4rem",marginBottom: "1rem",justifyContent: "center",textDecoration:"none"}}>
                    <TimerIcon style={{marginLeft: "3%", fontSize:"3rem"}}/>
                    <div style={{fontSize:"2rem"}}>کرنومتر</div>
                </a>
            </div>
        </div>
    )
}

export default Leftcontents;