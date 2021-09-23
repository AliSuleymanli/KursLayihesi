import { html } from "lit";
import { StudentList } from "./StudentList";

function StudentListView(dis:StudentList){
    let my={
        render:()=>html``,
        tbody:()=>html``
    };

    my.render=()=>{
        return html`
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
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
                    <td>${student.regionName} <span class="Edit">E</span></td>
                </tr>
            `)}
        `;
    }

    return my;
}

export {StudentListView}