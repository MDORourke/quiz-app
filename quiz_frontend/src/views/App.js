import React from "react";

import Game from "./containers/Game";

const App = (roundConfig) => {
  return (
    <div>
      <div>
        <section>
          <Game roundConfig={roundConfig} />
        </section>
      </div>
    </div>
  );
};

export default App;
