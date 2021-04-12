import React, { useState } from 'react';

import {loginapi} from "../../api/users/loginapi" 
import {useStyles} from "./styles"

import VisibilityIcon from '@material-ui/icons/Visibility';

function login() {

    const style = useStyles()

    const [logininput , setlogininput] = useState();
    const [loginpass , setloginpass] = useState();
    const [passwordShown, setPasswordShown] = useState(false);
    
    function clickhandler(){

        if(!logininput || !loginpass)return alert("لطفا همه چیز رو وارد کن!!");

        const user= {
            input: logininput,
            password: loginpass
        }
        loginapi(user,(okness , data)=>{
            if(!okness) return alert(data);
            else{
                localStorage.setItem("something" , data.tokenium );
                localStorage.setItem("name" , data.name );
                localStorage.setItem("family", data.family);
                localStorage.setItem("userid", data.userid);
                window.location.reload();
            } 
        });
    }

    function showpass(){
        setPasswordShown(passwordShown ? false : true);
    }

    return(
        <div className={style.container}>
        <div className={style.box}>
            <div className={style.spacer}></div>
            <div className={style.loginpart}>
                <img alt={"logo"} src={"/images/comlogo.png"} className={style.logo} />
                <h1 className={style.title}>صفحه ورود</h1>
                <div className={style.email}>
                    <p className={style.label}>شماره موبایل یا ایمیل</p>
                    <input onChange={e=>{setlogininput(e.target.value)}} type="phone" className={style.input} autoFocus />
                </div>
                <div className={style.password}>
                    <div className={style.passpart}>
                    <p className={style.label}>رمز عبور</p>
                    <p className={style.showpass} onClick={showpass}><VisibilityIcon className={style.eye} /></p>
                    </div>
                    <input type={passwordShown ? "text" : "password"} onChange={e=>setloginpass(e.target.value)} className={style.input} />
                </div>
                <button onClick={clickhandler} className={style.loginbutt}>ورود</button>
                {/* <p className={style.notic}>ثبت نام نکردی؟! پس بزن بریم ثبت نام کنیم!</p>
                <a className={style.registerbutton} href="/register" ><div>ثبت نام!</div></a> */}
            </div>
                <img className={style.img} alt={"login pic"} src="images/login.png" />
        </div>
    </div>
)}

export default login;
