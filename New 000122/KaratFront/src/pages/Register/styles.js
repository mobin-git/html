import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container:{
        width: "100%",
        height: "100vh",
        margin: 0 ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(to top right, #ffee00 0%, #ffd000 100%)",
    },
    box:{
        width: "80%",
        direction: "rtl",
        height: "78vh",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: "0.6vw",
        overflow: "hidden",
        boxShadow: "20px 20px 20px #22222271",
    },
    loginpart:{
        direction: "ltr",
        width: "50%",
        paddingTop: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
        overflowY: "scroll",
    },
    title:{
        margin: "2vh 0 3vh",
        textAlign: "center",
        fontSize: "2.5vw",
        color: "#235ad3",
        fontWeight: "bold",
    },
    input:{
        '&:focus': {
            outline: "none",
        },
        height: "2.5rem",
        padding: "0 4%",
        border: "solid 2px #235ad3",
        borderRadius: "2rem",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: "1.2vw",
        fontWeight: "bold",
        fontFamily: "shabnam",
        color: "#235ad3",
        direction: "ltr",
    },
    label:{
        margin: 0,
        marginBottom: "1vh",
        paddingRight: "4%",
        fontWeight: "550",
        fontSize: "1.2vw",
        color: "#235ad3",
    },
    loginbutton:{
        '&:focus': {
            outline: "none",
        },
        '&:hover': {
            backgroundColor: "#0032bb",
        },
        width: "90%",
        height: "3rem",
        fontSize: "1.8vw",
        fontWeight: "bold",
        fontFamily: "shabnam",
        borderRadius: "2rem",
        border: "none",
        backgroundColor: "#235ad3",
        color: "white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration:"none",
        marginBottom: "2vh"
    },
    form:{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "4%",
    },
    img:{
        width: "50%",
    },
    spacer:{
        width: "13%",
    },
    passpart:{
        display: "flex",
        justifyContent: "space-between",
    },
    showpass:{
        '&:focus': {
            outline: "none",
        },
        border: "none",
        padding: 0,
        paddingLeft: "3%",
        cursor: "pointer",
        backgroundColor: "white",
    },
    eye:{
        color: "#0032bb",
    },  
    registerbutton: {
        '&:hover': {
            backgroundColor:"#ffd000",
        },
        '&:focus': {
            outline:"none",
        },
        backgroundColor: "#ebc439",
        color: "white" ,
        width: "80%" ,
        borderRadius: "2rem",
        height: "3rem",
        textAlign: "center",
        display: "flex",
        marginBottom: "4vh",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "1.4rem",
        fontWeight: "bold",
        border: "none",
    },
    notic:{
        margin: "0 0 3%",
        fontSize: "0.8rem",
        color: "#0032bb"
    },
  });

