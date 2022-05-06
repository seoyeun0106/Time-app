import react from 'react';
import './App.scss';
function writeTime(time){
return(    
<div className='writeTime'>
 {String(Math.floor(time/3600)).padStart(2,'0')}:{String(Math.floor(time/60%60)).padStart(2,'0')}:{String(time%60).padStart(2,'0')}
</div>
)
}
export default writeTime;