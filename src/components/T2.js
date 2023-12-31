import { useEffect, useRef } from "react";
import "./T2.css";
function T2(props)
{
    const resultRef=useRef();
    const expressionRef=useRef();
    useEffect(()=>{
        resultRef.current.scrollIntoView();
    },[props.history]);
    useEffect(()=>{
        expressionRef.current.scrollLeft=expressionRef.current.scrollWidth;
    },[props.expression]);
    return(
        <div className="h1 custom-scroll">
            <div className="history">
                {
                    props.history &&
                    props.history?.map((item)=>(
                        <p key={item+""+Math.random()*44}>{item}</p>
                ))}
            </div>
            <br/>
            <div ref={expressionRef} className="expression custom-scroll">
                <p>{props.expression}</p>
            </div>
            <p ref={resultRef} className="result">{props.result}</p>
        </div>
    )
}
export default T2;