import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";

export function Header() {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/*<MenuIcon />*/}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            История школы
                        </Typography>
                        <Button color="inherit">Галерея</Button>
                        <Button color="inherit">Видео</Button>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}