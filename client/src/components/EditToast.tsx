import { useEffect, useState } from "react";


function EditToast(props: any){

    let [hidden, setHidden] = useState<boolean>(false);

    let toast = document.getElementById('editToast') as HTMLElement;
    function closeMe(){
        let toast = document.getElementById('editToast') as HTMLElement;
        toast.hidden = true;
    }

    function autoClose(){
        setTimeout(()=>{
            let toast = document.getElementById('editToast') as HTMLElement;
            toast.hidden = true;
        },
        2000)
    }

    useEffect(()=>{
        setHidden(false);
        autoClose();
    },
    [props.hideToast])
    

    return(

        <div>
            <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
            <div id="editToast" hidden={true} className="card" >
                <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..."/>
                <strong className="me-auto">Success</strong>

                <button type="button" className="btn-close" aria-label="Close" onClick={()=>closeMe()}></button>
                </div>
                <div className="toast-body">
                Update Successful
                </div>
            </div>
            </div>

        </div>
    )
}

export default EditToast;