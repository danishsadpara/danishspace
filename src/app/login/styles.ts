import { makeStyles } from "@mui/styles";

export const loginStyles = makeStyles(() => ({
  paper: {
    width: 228,
    height: 328,
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
    marginBottom: "30px",
  },
  textField: {
    width: "100%",
    fontWeight: "bolder",
    marginTop: "10px",
  },
  submitButton: {
    marginTop: 10,
  },
}));
