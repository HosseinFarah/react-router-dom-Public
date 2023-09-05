import { coursNames } from "../App";
const Courses = (props) => {
  return (
    <div style={{textAlign:"center",color:"GrayText"}}> List Of Course's with True valu:
{coursNames.map((course,index)=>{
  return <div key={index} >{course.active && <p>{course.name}</p>}</div>
})}
    </div>
  );
};
export default Courses;
