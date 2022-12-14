import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Navigasi = () => {
const auth = useSelector(state => state.auth);

    return (
        <div>
        <nav id="sidebar" >
            <ul class="list-unstyled components">
                <li class="portofolio">
                    <Link to="/home"> <i class="fa fa-md fa-home "></i> Dashboard</Link>
                </li>
                <li>
                    <Link to="/task-management"><i class="fa fa-md fa-check "></i> Task Management</Link> 
                </li>
                <li class="active">
                    <a href="#integrationSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fa fa-md fa-wrench "></i> integration</a>
                    <ul class="collapse list-unstyled" id="integrationSubmenu">
                        <li>
                            <a href="#">integration 1</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#marketingSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fa fa-md fa-bullhorn "></i> Marketing</a>
                    <ul class="collapse list-unstyled" id="marketingSubmenu">
                        <li>
                            <a href="#">Marketing 1</a>
                        </li>
                    </ul>
                </li>
                 <li>
                    <a href="#CsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fa fa-md fa-user  "></i> Customere Service</a>
                    <ul class="collapse list-unstyled" id="CsSubmenu">
                        <li>
                            <a href="#">Customere Service 1</a>
                        </li>
                    </ul>
                </li>
                 <li>
                    <a href="#BotSettingSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fa fa-md fa-robot  "></i> Bot Setting</a>
                    <ul class="collapse list-unstyled" id="BotSettingSubmenu">
                        <li>
                            <a href="#">Bot Setting 1</a>
                        </li>
                    </ul>
                </li>
                 <li>
                    <a href="#AnalitycSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fa fa-md fa-poll "></i> Analityc</a>
                    <ul class="collapse list-unstyled" id="AnalitycSubmenu">
                        <li>
                            <Link to="/analityc"> Complaint Report </Link>
                        </li>
                    </ul>
                </li>
                 <li>
                    <a href="#APISubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fa fa-md fa-download "></i> API</a>
                    <ul class="collapse list-unstyled" id="APISubmenu">
                        <li>
                            <a href="#">API 1</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"> <i class="fa fa-md fa-archive "></i> Documentation</a>
                </li>
            </ul>
        </nav>

        </div>
    )
}

export default Navigasi;