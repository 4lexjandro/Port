import '../App.css';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Fader = ({ text }) => {

        const [fadeProp, setFadeProp] = useState ({
            fade: 'fade-in',

        });

        useEffect(() => {
            const timeout = setInterval(() => {
                if(fadeProp.fade === 'fade-in'){
                    setFadeProp({
                        fade:'fade-out'
                    })
                } else {
                    setFadeProp({
                        fade: 'fade-in'
                    })

                }
            }, 1000);

            return () => clearInterval (timeout) 

        }, [fadeProp])





    return(
        <div>
            <p className={fadeProp.fade}>{text}</p>

        </div>
    )
}

Fader.defaultProps = {
    text: 'Hello there'
}



Fader.propTypes = {
    text: PropTypes.string

}
export default Fader