import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Search from "../components/Search";
import '../App.css';


function Homepage(){
    return <div className="homepage">
        <Header heading = "Employee Directory" />
        <Search/>
        <EmployeeList/>
    </div>
}
export default Homepage;