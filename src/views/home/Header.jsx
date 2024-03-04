import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '65vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#7c8594',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h2'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}
                >
                Digital Marketing
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                Leveraging online channels and data-driven strategies to connect, engage, and convert target audiences,
                driving brand awareness and business growth in the digital landscape.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    component={Link}
                    to={"auth/login"}
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#ffffff',
                        backgroundColor: 'navy',
                        "&&:hover": {
                            backgroundColor: "#000053"
                        },
                        "&&:focus": {
                            backgroundColor: "#000053"
                        }
                    }}
                    >
                        Get Started
                    </Button>

                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
            </Box>

        </CustomBox>
    )
}

export default Header