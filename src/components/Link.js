import react from "react";
function Link(props){
    return(
        <div id="link">
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}></a>
        </div>
    ) 
}
export default Link