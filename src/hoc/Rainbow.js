import React  from 'react';

const Rainbow=(WrappedComponent)=>{

    const colors = ['red','green','orenge','blue','purple','yellow'];
    const randomcolors = colors[Math.floor(Math.random()*6)];
    const textcolor = randomcolors +  '-text';

    return (props)=>{
        return (
            <div className={textcolor}>
                <WrappedComponent {...props}/>
            </div>
        )
    }


}

export default  Rainbow;