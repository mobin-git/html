import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    mainform:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    formpart1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1rem 0rem" ,
    },
    formpart2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "0.9rem",
    },
    inputs:{
        '&:focus': {
            outline: "none",
        },
        backgroundColor: "#c6e0fb",
        border: "none",
        borderRadius: "0.7rem",
        paddingRight: "1%",
        fontWeight: "bold",
        height: "3rem",
    },
    addbut:{
        '&:focus': {
            outline: "none",
        },
        '&:hover': {
            backgroundColor: "#ffe252",
        },
        padding: "0.8rem 0%",
        borderRadius: "0.8rem",
        cursor: "pointer",
        border: "none",
        backgroundColor: "#ffd500",
        boxShadow: "2px 3px 4px 0 rgba(0, 0, 0, 0.16)",
        width: "25%",
        fontWeight: "bold",
        margin: "0.5rem 0rem",
    },
});

