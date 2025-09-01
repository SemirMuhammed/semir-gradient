import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App";

import ColorProvider from "./components/ColorProvider";
import GradientColorsProvider from "./components/GradientColorsProvider";
import NumOfColorsProvider from "./components/NumOfColorsProvider";

let container = document.querySelector("#app");
let root = createRoot(container);
root.render(
  <StrictMode>
    <ColorProvider>
      <NumOfColorsProvider>
        <GradientColorsProvider>
          <App />
        </GradientColorsProvider>
      </NumOfColorsProvider>
    </ColorProvider>
  </StrictMode>
);
