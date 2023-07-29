import EmployeeListItem from "./EmployeeListItem";



function EmployeeList(){
return <div className="employeeList">
    <EmployeeListItem name='James King' title='President and CEO' img='/images/alea-film-D-eGynYVgZA-unsplash.jpg' />
    <EmployeeListItem name='Julie Taylor' title='VP of Marketing' img='/images/hiki-app-3egFJhKIThQ-unsplash.jpg' />
    <EmployeeListItem name='Eugene Lee' title='CFO' img='/images/justin-wolff-jNfN0NCUHX4-unsplash.jpg' />
    <EmployeeListItem name='John Williams' title='VP of Engineering' img='/images/marek-piwnicki-ixcL_Nresvc-unsplash.jpg' />
    <EmployeeListItem name='Ray Moore' title='VP of Sales' img='/images/s-tsuchiya-EL35AB_PuCQ-unsplash.jpg' />
    <EmployeeListItem name='Paul jones' title='QA Manager' img='/images/tobias-reich-dX6n5EsKqKM-unsplash.jpg' />
</div>
}

export default EmployeeList;