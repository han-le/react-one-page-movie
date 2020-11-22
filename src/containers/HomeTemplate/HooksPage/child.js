//memo: giup compnent con ko render lai khi component cha thay doi

import React, { memo } from "react";

function Child() {
  console.log("Component Child rerun after click the add button yes no?");
  return (
    <div>
      <h3> Child Component</h3>
    </div>
  );
}

export default memo(Child);
