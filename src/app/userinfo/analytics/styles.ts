import { makeStyles } from "@mui/styles";

export const styles = makeStyles(() => ({
  modal: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    padding: "10px",
  },
}));
