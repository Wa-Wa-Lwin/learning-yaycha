import { useState, createContext, useContext, useMemo } from "react";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    // Snackbar, //CHANGE 
} from "@mui/material";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// import App from "./App";  //CHANGE 
// import AppDrawer from "./components/AppDrawer";  //CHANGE 
import { deepPurple, grey } from "@mui/material/colors";

import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Likes from "./pages/Likes";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/comments/:id",
                element: <Comments />,
            },
            {
                path: "/profile/:id",
                element: <Profile />,
            },
            {
                path: "/likes/:id",
                element: <Likes />,
            },
        ],
    },
]);

export default function ThemedApp() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [globalMsg, setGlobalMsg] = useState(null);
    const [auth, setAuth] = useState(null);
    const [mode, setMode] = useState("dark");
    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
                primary: deepPurple,
                banner: mode === "dark" ? grey[800] : grey[200],
                text: {
                    fade: grey[500],
                },
            },
        });
    }, [mode]);
    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider
                value={{
                    showDrawer,
                    setShowDrawer,
                    showForm,
                    setShowForm,
                    globalMsg,
                    setGlobalMsg,
                    auth,
                    setAuth,
                    mode,
                    setMode,
                }}>
                {/* <App />
                <AppDrawer /> */}
                {/* // CHANGE */}
                {/* <Snackbar
                    anchorOrigin={{
                        horizontal: "center",
                        vertical: "bottom",
                    }}
                    open={Boolean(globalMsg)}
                    autoHideDuration={6000}
                    onClose={() => setGlobalMsg(null)}
                    message={globalMsg}
                /> */}
                <RouterProvider router={router} />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    );
}