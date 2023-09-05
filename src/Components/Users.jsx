import { users } from "../App";
const Users = () => {
  return (
    <div style={{textAlign:"left"}}>
    List of "Female" User's :
      <ul>
        {users.map((user)=>{
          return (
            <>
            {user.sex === "female" && <li key={user}>Name:{user.name}, Sex: {user.sex}, Age:{user.age}</li>}
            </>
          )
        })}
      </ul>
    </div>
  );
};
export default Users;
