import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        width: "100%",
        height: "100%",
        margin: "0" ,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    stopwatchcard: {
        alignItems: "center",
        fontFamily: "shabnam",
        backgroundColor: "#0069cc",
        textAlign: "center",
        borderRadius: "4.5vh",
        width: "50vw",
        height: "50vh",
    },
    time: {
        color: "white",
        fontSize: "7rem",
    },
    buttons: {
        width: "10vw",
    },
    startbutt: {
        backgroundColor: "blue",
        fontSize: "2rem",
    },
    
    resetbutt: {
        backgroundColor: "orange"
        
    },
 });

