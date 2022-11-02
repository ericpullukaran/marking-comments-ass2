import React from 'react';
import {
  Button,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import { ContentCopy, Delete } from '@mui/icons-material';
import { useLocalStorage } from "./hooks";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Montserrat',
    h3: {
      fontWeight: 700,
    },
  },
});

function App() {
  const [ms1, setMs1] = useLocalStorage('ms1','');
  const [ms2, setMs2] = useLocalStorage('ms2','');
  const [ms3, setMs3] = useLocalStorage('ms3','');
  const [ms4, setMs4] = useLocalStorage('ms4','');
  const [ms5, setMs5] = useLocalStorage('ms5','');
  const [ms6, setMs6] = useLocalStorage('ms6','');
  const [ms7, setMs7] = useLocalStorage('ms7','');
  const [bonus, setBonus] = useLocalStorage('bonus','');
  const [responsive, setResponsive] = useLocalStorage('responsive','');
  const [cq, setCq] = useLocalStorage('cq','');
  const [access, setAccess] = useLocalStorage('access','');

  const handleMilestoneCpy = () => {
    let cpyText = '[ Milestone 1: ' + (ms1 ? ms1 : 'N/A') + ' | ';
    cpyText += 'Milestone 2: ' + (ms2 ? ms2 : 'N/A') + ' | ';
    cpyText += 'Milestone 3: ' + (ms3 ? ms3 : 'N/A') + ' | ';
    cpyText += 'Milestone 4: ' + (ms4 ? ms4 : 'N/A') + ' | ';
    cpyText += 'Milestone 5: ' + (ms5 ? ms5 : 'N/A') + ' | ';
    cpyText += 'Milestone 6: ' + (ms6 ? ms6 : 'N/A') + ' | ';
    cpyText += 'Milestone 7: ' + (ms7 ? ms7 : 'N/A') + ']';
    navigator.clipboard.writeText(cpyText);
  };

  const clearAll = () => {
    if (!window.confirm('Are you sure you want to clear your hard work?')) {
     return;
    }
    setMs1('')
    setMs2('')
    setMs3('')
    setMs4('')
    setMs5('')
    setMs6('')
    setMs6('')
    setBonus('')
    setResponsive('')
    setCq('')
    setAccess('')
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <header className="App-header">
            <Typography variant="h3">Generating Comments!</Typography>
          </header>
          <div className="inputs">
            <TextField
              label="Milestone 1"
              multiline
              value={ms1}
              onChange={(e) => setMs1(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Milestone 2"
              multiline
              value={ms2}
              onChange={(e) => setMs2(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Milestone 3"
              multiline
              value={ms3}
              onChange={(e) => setMs3(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Milestone 4"
              multiline
              value={ms4}
              onChange={(e) => setMs4(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Milestone 5"
              multiline
              value={ms5}
              onChange={(e) => setMs5(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Milestone 6"
              multiline
              value={ms6}
              onChange={(e) => setMs6(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Milestone 7"
              multiline
              value={ms7}
              onChange={(e) => setMs7(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Bonus"
              multiline
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Responsive"
              multiline
              value={responsive}
              onChange={(e) => setResponsive(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Code Quality"
              multiline
              value={cq}
              onChange={(e) => setCq(e.target.value)}
              variant="filled"
            />
            <TextField
              label="Usability / Accessibility"
              multiline
              value={access}
              onChange={(e) => setAccess(e.target.value)}
              variant="filled"
            />
          </div>
          <div className="copy">
            <Button
              endIcon={<ContentCopy />}
              variant="contained"
              onClick={handleMilestoneCpy}
            >
              MS
            </Button>
            <Button
              endIcon={<ContentCopy />}
              variant="contained"
              onClick={() => {
                navigator.clipboard.writeText(cq);
              }}
            >
              Code Style
            </Button>
            <Button
              endIcon={<ContentCopy />}
              variant="contained"
              onClick={() => {
                navigator.clipboard.writeText(responsive);
              }}
            >
              Mobile
            </Button>
            <Button
              endIcon={<ContentCopy />}
              variant="contained"
              onClick={() => {
                navigator.clipboard.writeText(access);
              }}
            >
              Access
            </Button>
          </div>
          <div className="footer">
            <Button
                endIcon={<Delete />}
                variant="contained"
                onClick={clearAll}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
