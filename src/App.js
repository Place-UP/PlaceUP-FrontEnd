import './reset.css'
import Rotas from "./Rotas";
import { DarkThemeProvider } from './Common/Context/DarkThemeProvider'

export default function App() {
  return (
    <DarkThemeProvider>
      <Rotas />
    </DarkThemeProvider>
  );
}
