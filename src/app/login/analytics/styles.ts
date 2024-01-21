import { makeStyles } from "@mui/styles";

export const loginStyles = makeStyles(() => ({
  paper: {
    width: 228,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    padding: "10px",
  },
  title: {
    marginBottom: "20px",
    alignSelf: "flex-start",
    fontWeight: "bolder",
  },
  textField: {
    width: "100%",
  },
  submitButton: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "goldenrod",
    color: "black",
  },
  helperText: {
    fontSize: "12px",
    color: "red",
  },
}));
