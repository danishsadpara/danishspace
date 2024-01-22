import { makeStyles } from "@mui/styles";

export const Styles = makeStyles(() => ({
  paper: {
    width: 300,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  },
  title: {
    marginBottom: "20px",
    alignSelf: "flex-start",
    fontWeight: "bolder",
    color: "rgb(218, 165, 32)",
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
  p20: {
    padding: 20,
  },
  pb10: {
    paddingBottom: 10,
  },
}));
