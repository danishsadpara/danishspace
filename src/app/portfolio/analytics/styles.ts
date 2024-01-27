import { makeStyles } from "@mui/styles";

export const styles = makeStyles(() => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "space-between",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    padding: "10px",
    width: "max-content",
  },
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "5px",
  },
}));
