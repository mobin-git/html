import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container:{
        width: "100%",
        height: "100vh",
        margin: 0 ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(to top right, #0e42d1 0%, #4b60d8 100%)",
    },
    box:{
        width: "80%",
        direction: "rtl",
        height: "78vh",
        display: "flex",
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: "0.6vw",
        overflow: "hidden",
        boxShadow: "20px 20px 20px #22222271",
    },
    loginpart:{
        width: "60%",
        paddingTop: "2.7%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
    },
    title:{
        margin: 0,
        marginBottom: "4%",
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
        paddingRight: "4%",
        fontWeight: "550",
        fontSize: "1.2vw",
        color: "#235ad3",
    },
    loginbutt:{
        '&:focus': {
            outline: "none",
        },
        '&:hover': {
            backgroundColor: "#0032bb",
        },
        width: "90%",
        height: "2.9rem",
        fontSize: "1.8vw",
        fontWeight: "bold",
        fontFamily: "shabnam",
        borderRadius: "2rem",
        border: "none",
        backgroundColor: "#235ad3",
        color: "white",
        cursor: "pointer",
    },
    email:{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "4%",
    },
    password:{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "4%",
    },
    img:{
        height: "78vh",
        marginRight: "3%",
    },
    spacer:{
        width: "13%",
    },
    passpart:{
        display: "flex",
        justifyContent: "space-between",
    },
    showpass:{
        margin: 0,
        border: "none",
        padding: 0,
        paddingLeft: "3%",
        cursor: "pointer",
    },
    eye:{
        color: "#0032bb",
    },  
    registerbutton: {
        '&:hover': {
            backgroundColor: "#ebc439",
        },
        '&:focus': {
            outline: "none",
        },
        backgroundColor: "#ffd000" ,
        color: "white" ,
        width: "90%" ,
        borderRadius: "1.5rem",
        height: "7vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginTop: "1vh",
        border: "none",
    },
    notic:{
        margin: "4vh 0 0.2vh",
        fontSize: "0.8rem",
        color: "#0032bb"
    },
    logo:{
        width: "55%",
        marginBottom: "10%",
    }
  });

