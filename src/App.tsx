import {
  Box,
  ColorSchemeProvider,
  DeviceTypeProvider,
  IconButtonFloating,
} from "gestalt";
import "./App.css";
import { KeyboardEvent, MouseEvent, useState } from "react";
import Navigation from "./components/Navigation/Navigation";

//declare a custom type
type ThemeType = "light" | "dark" | "userPreference";
type DeviceTypeType = "desktop" | "mobile";

function App() {
  const [scheme, setScheme] = useState<ThemeType>("dark");
  const [deviceType, setDeviceType] = useState<DeviceTypeType>("mobile");
  return (
    <ColorSchemeProvider colorScheme={scheme} id="docsExample">
      <DeviceTypeProvider deviceType={deviceType}>
        <Navigation />
        <Box
          role="contentinfo"
          position="fixed"
          dangerouslySetInlineStyle={{
            __style: {
              right: "0%",
              bottom: "0%",
              transform: "translate(-30%, -30%)",
            },
          }}
        >
          <IconButtonFloating
            accessibilityPopupRole={"dialog"}
            accessibilityLabel={""}
            icon={"add"}
            onClick={() => {}}
            tooltip={{
              accessibilityLabel: undefined,
              inline: undefined,
              text: "",
              zIndex: undefined,
            }}
          />
        </Box>
      </DeviceTypeProvider>
    </ColorSchemeProvider>
  );
}

export default App;
