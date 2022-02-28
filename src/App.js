import React from 'react';
import './App.css';
import {Bar} from './components/Bar';
import { useSpring, animated} from 'react-spring';


function App() {



  const style1 = useSpring({
    from: {opacity: 0, marginTop: -100},
    to: { opacity: 1, marginTop: 0},
    config: {duration: 3000 }
})

  const style2 = useSpring({
  from: { marginLeft: 0},
  to: { marginLeft: 1000 },
  delay: 1600,
  config: { duration: 3000 }
})






  return (
    
   
      <div>
      
     
     <animated.div style={style1}>
     <div className="topDiv">
         <Bar /> 
          <animated.div style={style2}>
            <br/>
            <br/>
            <br/>
            <h5>Welcome to my page!</h5>
            </animated.div>
        </div>
       </animated.div> 
      
    
      </div>
   
  );
}

export default App;
