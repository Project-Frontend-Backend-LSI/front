
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';


const defaultTheme = createTheme();

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verified, setVerified] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/freelancers').then((response) => {
        setData(response.data);
        });
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (data && data.email === email && data.password === password) {
        localStorage.setItem('id', JSON.stringify(data.id));
        navigate('/Pfrelancer');
        } else {
        setVerified(true);
        }
    };
return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
            marginTop: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        }}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Grid spacing={2}>
                {verified && <Alert severity="error">Password or Email is false</Alert>}
            </Grid>
            
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: 'green',
                    color: "white",
                    '&:hover': { bgcolor: 'darkgreen' },
                }}
            >
                Login
            </Button>
            <Typography variant="body2" color="#1dbf73" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
                    </Typography>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
    );
    }

export default Login;
