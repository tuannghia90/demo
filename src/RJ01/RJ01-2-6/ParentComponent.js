import ChildComponent from "./ChildComponent";

export default function ParentComponent(){
    return(
        <div>
             <h1>“This is Parent component”</h1>
            <ChildComponent/>
        </div>
       
    )
}