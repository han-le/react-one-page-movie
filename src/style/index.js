import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    content: {
      backgroundColor: "pink",
      color: "white",
      "& span ": {
        fontSize: 13,
      },
    },

    title: {
      color: "blue",
    },
  };
});

export default useStyle;
