import { StyledEngineProvider } from "@mui/material";

const GlobalCssPriority = ({ children }) => {
    return (
        <StyledEngineProvider>
            {children}
        </StyledEngineProvider>
    )
}
export default GlobalCssPriority;
