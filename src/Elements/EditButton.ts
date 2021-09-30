import { html } from "lit";

interface Ientity{
    id:number
}

function editbutton<M extends Ientity>(callback:(m:M)=>any   ,model:M){
    return html`
        

        <span data-id="${model.id}" class="edit-button" @click="${()=>callback(model)}">E</span>
    `;
}

export {editbutton}