import { useEffect } from "react";


function EditToast(props: any){

    let toast = document.getElementById('editToast') as HTMLElement;

    function closeMe(){
        toast.hidden = true;
    }

    function autoClose(){
        setTimeout(()=>{
            toast.hidden = true;
        },
        2000)
    }

    useEffect(()=>{
        autoClose();
    },
    [toast.hidden])

    return(

        <div>
            <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
            <div id="editToast" hidden={true} className="card" >
                <div className="toast-header">
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