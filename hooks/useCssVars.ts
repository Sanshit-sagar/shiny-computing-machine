import { useLayoutEffect } from "react";
// import "./styles.scss"; // -> https://codesandbox.io/s/15mko9187


const theme = {
  "button-padding": "16px",
  "button-font-size": "14px",
  "button-border-radius": "4px",
  "button-border": "none",
  "button-color": "#FFF",
  "button-background": "#6772e5",
  "button-hover-border": "none",
  "button-hover-color": "#FFF",
}

export const useCssVars = (theme) => {
  useLayoutEffect(() => {
    for (const key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key])
    }}, [theme])
}


// function App() {
    // useTheme(theme);
    // return (
    //   <div>
        // <button className="button">Button</button>
    //   </div>
    // );
//   }