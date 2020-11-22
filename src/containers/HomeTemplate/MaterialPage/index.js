import React from "react";
import Button from "@material-ui/core/Button";
import useStyle from "./../../../style";

export default function MaterialPage() {
  const classes = useStyle();

  return (
    <div className={classes.content}>
      <h3 className={classes.title}>Material Design</h3>

      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <span>Joe Biden won</span>
    </div>
  );
}
