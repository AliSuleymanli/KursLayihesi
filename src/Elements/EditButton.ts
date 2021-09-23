import { html } from "lit";

interface Ientity{
    id:number
}

function editbutton<M extends Ientity>(callback:(m:M)=>any   ,model:M){
    return html`
        <style>
            .edit-button{
                display:none;
            }

            .edit-parent>.edit-button:hover{
                display:block;
            }
        </style>

        <span data-id="${model.id}" class="edit-button" @click="${()=>callback(model)}">E</span>
    `;
}

export {editbutton}