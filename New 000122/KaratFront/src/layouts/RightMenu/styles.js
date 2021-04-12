import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    rightmenu:{
        width: "10%",
        backgroundColor: "#f5c000",
        boxShadow: "-4px 0 5px 0 rgba(0, 0, 0, 0.16)",
        zIndex: "1",
    },
    profpic: {
        width: "70%",
        borderRadius: "1.5rem",
        boxShadow: "4px 5px 5px 0 rgba(0, 0, 0, 0.16)",
        marginTop: "0.4rem",
        marginBottom: "0.4rem",
    },
    profbar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffd500",
        borderRadius: "0rem 0rem 2vw 2vw",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.16)",
        height: "11vw",
        marginBottom: "1.3rem",
        overflow: "hidden",
    },
    menuoptions: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
    },
    menuoption: {
        '&:hover': {
            backgroundColor: "#ffe252",
            transform: "scale(1.1)",
        },
        backgroundColor: "#ffd500",
        marginBottom: "0.9rem",
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "2.5rem",
        borderRadius: "0.6rem",
        color: "#00296b",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        overflow: "hidden",
    },
    proper:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        color: "black",
        marginTop: "50%"
    },
    logo:{
        width: "90%",
    },
    version:{
        margin: "5% 0vh 10%",
        fontFamily: "tahoma",
        fontWeight: "bold",
        fontSize: "0.9rem",
    }
});