import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StudentListCss } from "./StudentListCss";

@customElement("student-list")
class StudentList extends LitElement {
  static styles=[StudentListCss]

    render(){
        return html`
        <div class="sidebar">
  <div class="logo-details">
    <span class="logo_name" style="margin-left: 55px; font-size: 27px;">Developia</span>

  </div>
  <ul class="nav-links">
    <li>
      <a href="#" class="active">
        <i class='bx bx-grid-alt'></i>
        <span class="links_name" style="border-radius: 15px;
            width: 200px;
            background-color: rgba(240, 238, 238, 0.829);
            height: 50px;
            top: 7px;
            padding-top: 15px;
            position: absolute;
            margin-left: 17px;
            text-align: center;">Borclar</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-box' class="active"></i>
        <span class="links_name" style="border-radius: 15px;
            width: 200px;
            background-color: rgba(240, 238, 238, 0.829);
            height: 50px;
            top: 7px;
            padding-top: 15px;
            position: absolute;
            margin-left: 17px;
            text-align: center;">Telebeler</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-list-ul' class="active"></i>
        <span class="links_name" style="border-radius: 15px;
            width: 200px;
            background-color: rgba(240, 238, 238, 0.829);
            height: 50px;
            top: 7px;
            padding-top: 15px;
            position: absolute;
            margin-left: 17px;
            text-align: center;">Muellimler</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-pie-chart-alt-2' class="active"></i>
        <span class="links_name" style="border-radius: 15px;
            width: 200px;
            background-color: rgba(240, 238, 238, 0.829);
            height: 50px;
            top: 7px;
            padding-top: 15px;
            position: absolute;
            margin-left: 17px;
            text-align: center;">Hesabatlar</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class='bx bx-coin-stack' class="active"></i>
        <span class="links_name" style="
            border-radius: 15px;
            width: 200px;
            background-color: #D1DBFF;
            height: 50px;
            top: 7px;
            padding-top: 15px;
            position: absolute;
            margin-left: 17px;
            text-align: center;">Telim Qeydiyyati</span>
      </a>
    </li>


  </ul>
</div>
<section class="home-section">
  <!-- <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Borclar</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Umumi Axtaris...">
        <i class='bx bx-search' ></i>
      </div>

    </nav> -->
  <div class="home-content">
    <div class="overview-boxes">




    </div>

    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">Butun Telebeler</div>
        <p style="opacity: 0.5; float: left; ">Sistemde olan butun telebeler</p>
        <input type="search" placeholder="Umumi Axtaris" class="search1">
        <i class="fa fa-facebook icon"></i>
        <br>
        <br><br><br>
        <div class="buttonBody" style="border: 10px solid black;overflow: auto;padding: 20px;">
          <button type="button" class="btn btn-primary btn-lg btn-custom-student-control"
            style="border: 1px solid rgba(99, 97, 97, 0.39); float: left;background-color: white; font-size: 16px;color: black;width: 140px;height: 40px;">
            <i class="far fa-edit"></i> Yeni Qeydiyyat
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-custom-student-control"
            style="border: 1px solid rgba(99, 97, 97, 0.39); float: left; background-color: white;font-size: 16px; color: black;width: 170px;height: 40px;">
            <i class="far fa-edit"></i>Odenisli Qeydiyyat
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-custom-student-control"
            style="border: 1px solid rgba(99, 97, 97, 0.39); float: left;  background-color: white;font-size: 16px; color: black;width: 200px;height: 40px;">
            <i class="far fa-edit"></i>Butun Qeydler
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-custom-student-control"
            style="border: 1px solid rgba(99, 97, 97, 0.39); float: left;font-size: 16px; background-color: white; color: black;width: 150px;height: 40px;">
            <i class="far fa-edit"></i>Yeni Qeyd
          </button>
          <!-- <button type="button" class="btn btn-primary btn-lg" style="border: 1px solid rgba(255, 0, 0, 0.26);float: left; margin-left:430px;background-color: white;font-size: 16px; color: red;width: 120px;height: 40px;">
        <i class="fas fa-trash-alt" style="color:red;"></i>Sil
    </button> -->
        </div>
        <br><br><br>















        <!-- <ul class="pagination">
        <li><a href="#">1</a></li>
        <li class="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>

      </ul> -->





      </div>
    </div>
  </div>
</section>

        `;
    }
}