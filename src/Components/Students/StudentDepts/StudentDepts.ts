import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BootstrapCssMin } from "../../../Elements/BootstrapCss";
import { StudentDeptCss } from "./StudentDeptsCss";

@customElement("student-depts")
class StudentsContainer extends LitElement {
  static styles = [BootstrapCssMin,StudentDeptCss];

  render() {
    return html`
      <table class="table table-bordered table-hover">
        <thead>
          <th>Ad/<br />Soyad</th>
          <th>Muqavile Nomresi</th>
          <th>Tarix</th>
          <th>Borc</th>
          <th>Kategoriya</th>
          <th>Qrup</th>
          <th>Muellim</th>
          <th>
            Zeng <br />
            Tarixi
          </th>
          <th>
            Zeng <br />
            Eden
          </th>
          <th>Fikirleri</th>
        </thead>
        <tbody>
          <tr>
            <td data-label="S.No">Farid Maharraov</td>
            <td data-label="Name">DEA-301-33-99</td>
            <td data-label="Age">2021-01-07-19</td>
            <td data-label="Marks%">126%</td>
            <td data-label="Staus">Proq-usaq</td>
            <td data-label="Staus">Proqralasdirmaya giris</td>
            <td data-label="Staus">Yusif Alizade</td>
            <td data-label="Staus">2021-01-07-19</td>
            <td data-label="Staus">Zeng Eden</td>
            <td data-label="Staus">
              6 bazar qrpuna devet et(Aganin valideyini Nezaket x. Qardasidir)
            </td>
          </tr>

          <tr>
            <td data-label="S.No">Farid Maharraov</td>
            <td data-label="Name">DEA-301-33-99</td>
            <td data-label="Age">2021-01-07-19</td>
            <td data-label="Marks%">126%</td>
            <td data-label="Staus">Proq-usaq</td>
            <td data-label="Staus">Proqralasdirmaya giris</td>
            <td data-label="Staus">Yusif Alizade</td>
            <td data-label="Staus">2021-01-07-19</td>
            <td data-label="Staus">Zeng Eden</td>
            <td data-label="Staus">
              6 bazar qrpuna devet et(Aganin valideyini Nezaket x. Qardasidir)
            </td>
          </tr>

          <tr>
            <td data-label="S.No">Farid Maharraov</td>
            <td data-label="Name">DEA-301-33-99</td>
            <td data-label="Age">2021-01-07-19</td>
            <td data-label="Marks%">126%</td>
            <td data-label="Staus">Proq-usaq</td>
            <td data-label="Staus">Proqralasdirmaya giris</td>
            <td data-label="Staus">Yusif Alizade</td>
            <td data-label="Staus">2021-01-07-19</td>
            <td data-label="Staus">Zeng Eden</td>
            <td data-label="Staus">
              6 bazar qrpuna devet et(Aganin valideyini Nezaket x. Qardasidir)
            </td>
          </tr>

          <tr>
            <td data-label="S.No">Farid Maharraov</td>
            <td data-label="Name">DEA-301-33-99</td>
            <td data-label="Age">2021-01-07-19</td>
            <td data-label="Marks%">126%</td>
            <td data-label="Staus">Proq-usaq</td>
            <td data-label="Staus">Proqralasdirmaya giris</td>
            <td data-label="Staus">Yusif Alizade</td>
            <td data-label="Staus">2021-01-07-19</td>
            <td data-label="Staus">Zeng Eden</td>
            <td data-label="Staus">
              6 bazar qrpuna devet et(Aganin valideyini Nezaket x. Qardasidir)
            </td>
          </tr>
        </tbody>
      </table>

      <div class="input1">
        <input
          type="text"
          class="axtaris1"
          required
          placeholder="Toplam Borc sayi"
        />
      </div>

      <ul class="pagination">
        <li><a href="#">1</a></li>
        <li class="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
      </ul>
    `;
  }
}
