import { html } from "lit";
import { editbutton } from "../../../Elements/EditButton";
import { StudentList } from "./StudentList";

function StudentListView(dis:StudentList){
    let my={
        render:()=>html``,
        tbody:()=>html``
    };

    my.render=()=>{
        return html`
        <style>
            .edit-parent .edit-button{
                display:none;
            }

            .edit-parent:hover .edit-button{
                display:block;
            }

            .edit-button{
                position:relative;
            }

            .edit-parent .edit-button{
                position:absolute;
                right:0;
            }
        </style>

            <div class="table-responsive">
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Ad Soyad</th>
                            <th>Telefon</th>
                            <th>Sektor</th>
                            <th>Status</th>
                            <th>Qeydiyyat</th>
                            <th>Bolge</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${my.tbody()}
                    </tbody>
                </table>
            </div>
        `;
    }

    my.tbody=()=>{
        

        return html`
            ${dis.dataConverter.students().map(student=>html`
                <tr>
                    <td>${student.name} ${student.surname}</td>
                    <td>${student.phoneMain}</td>
                    <td>${student.sector}</td>
                    <td>${student.status}</td>
                    <td>${student.register}</td>
                    <td><div class="edit-parent"> ${student.regionName} ${editbutton(dis.events.onToEdit,student)}</div></td>
                </tr>
            `)}
        `;
    }

    return my;
}

export {StudentListView}