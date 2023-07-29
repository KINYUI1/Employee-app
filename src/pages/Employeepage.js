import EmployeeInfo from "../components/EmployeeInfo";
import EmployeeListItem from "../components/EmployeeListItem";
import Header from "../components/Header";
import Search from "../components/Search";


function Employeepage(){
    return <div className="employeepage">
        <Header heading="Employee"/>
        <Search/>
        <EmployeeListItem name='Julie Taylor' title='VP of Marketing' img='/images/hiki-app-3egFJhKIThQ-unsplash.jpg' />
        <EmployeeInfo name='Call Office' value='781-000-0002'/>
        <EmployeeInfo name='Call Mobile' value='617-000-0002'/>
        <EmployeeInfo name='SMS' value='617-000-0002'/>
        <EmployeeInfo name='Email' value='jtaylor@fakemail.com'/>
    </div>
}

export default Employeepage;