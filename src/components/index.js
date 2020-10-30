import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanvas: {
        position: "absolute",
        opacity: 0.3
    }
});

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 40,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "#011c39"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: .5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: .5,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default Home;
