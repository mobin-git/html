import React from 'react';

import {useStyles} from "./styles"

import EventNoteIcon from '@material-ui/icons/EventNote';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import TableChartIcon from '@material-ui/icons/TableChart';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DescriptionIcon from '@material-ui/icons/Description';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Rightmenu() {

    const style = useStyles()

    const name = localStorage.getItem("name")+" "+localStorage.getItem("family")

    return (<div className={style.rightmenu}>
        <div className={style.profbar}>
            <img className={style.profpic} src={"images/avatar.png"} alt={"profpic"}/>
            <div> {name} </div>
        </div>
        <div className={style.menuoptions}>
            <a href={"/Works"} className={style.menuoption}><EventNoteIcon/>وظایف</a>
            <a href={"/Done"} className={style.menuoption}><LibraryAddCheckIcon/>انجام شده</a>
            <a href={"/Table"} className={style.menuoption}><TableChartIcon/>جدول</a>
            <a href={"/Report"} className={style.menuoption}><DescriptionIcon/>گزارش</a>
            <a href={"/About"} className={style.menuoption}><ContactSupportIcon/>درباره ما</a>
            <a onClick={()=>{localStorage.clear();window.location.reload()}} className={style.menuoption}><ExitToAppIcon/>خروج</a>
        </div>
        <a className={style.proper} href={"/Works"}>
            <img alt="logo" src="/images/comlogo.png" className={style.logo} />
            <p className={style.version}>v1.0.0</p>
        </a>
        </div>
    )
}

export default Rightmenu;