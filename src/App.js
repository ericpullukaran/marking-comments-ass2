import React from "react";
import {
  Box,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./App.css";
import CommentGenerator from "./components/CommentGenerator/CommentGenerator";
import Scripts from "./components/Scripts/Scripts";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
    h3: {
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h5: {
      fontWeight: 700,
      marginTop: "1rem",
      marginBottom: "1rem",
      textDecoration: "underline",
    },
    h6: {
      fontWeight: 700,
    },
  },
});

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Generate Comments" />
          <Tab label="Get Scripts" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CommentGenerator />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Scripts />
        </TabPanel>
      </div>
    </ThemeProvider>
  );
}

export default App;
