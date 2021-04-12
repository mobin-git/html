import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    leftcontents: {
        width: "18%",
    },
    content:{
        backgroundColor: "#0069cc",
        borderRadius: "1.5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        padding: "0.6rem 6%",
        color: "#ffffff",
    },
    contents: {
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        paddingTop: "0.5rem",
        paddingLeft: "3%",
    },
    todayworks: {
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "80%",
    },
    numcontent:{
        fontSize: "3.2vw",
        fontWeight: "bold",
    },
    maintxt:{
        marginLeft: "4%",
        fontWeight: "bold",
        fontSize: "190%",
    },
});