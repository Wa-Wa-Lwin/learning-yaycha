import { useApp } from "../ThemedApp";

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from "@mui/material";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    Cancel as CancelIcon, 
} from "@mui/icons-material";

export default function Header() {
    const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setShowDrawer(true)} 
                >
                    <MenuIcon />
                </IconButton>

                <Typography sx={{ color: "text.fade", flexGrow: 1, ml: 2 }}>Yaycha</Typography>

                <Box sx={{ bgcolor: "banner" }}>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowForm(!showForm)}
                    >
                        { showForm ? <CancelIcon /> : <AddIcon /> }
                        
                    </IconButton>

                    {
                        mode === "dark" ?
                            (
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                    onClick={() => setMode("light")}
                                >
                                    <LightModeIcon />
                                </IconButton>
                            ) :
                            (
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                    onClick={() => setMode("dark")}
                                >
                                    <DarkModeIcon />
                                </IconButton>

                            )
                    } 
                </Box> 
            </Toolbar>
        </AppBar>

    )
}