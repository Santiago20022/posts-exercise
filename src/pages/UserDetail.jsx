import { useGetUserById } from "../hooks/useGetUserById";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const  user = useGetUserById(id);
  const classDiv = "font-bold flex flex-col gap-1 mb-3 text-xs";
  const classSpan = "font-normal text-slate-500 text-xs flex flex-col gap-1 mb-2 px-3";

 return (
    <div className="flex justify-center items-center">
      <div className="h-screen px-5">
        <h1 className="text-lg font-bold py-3">About you</h1>
        <div className="border border-slate-200 p-3">
          <div className={classDiv}>
            <p>Full name</p>
            <span className={classSpan}>{user?.name}</span>
          </div>
          <div className={classDiv}>
            <p>Public Name</p>
            <span className={classSpan}>{user?.username}</span>
          </div>
          <div className={classDiv}>
            <p>Workstation</p>
            <span className={classSpan}>{user?.email}</span>
          </div>
          <div className={classDiv}>
            <p>Department</p>
            <span className={classSpan}>{user?.address.street},{user?.address.suite}, {user?.address.city}, {user?.address.zipcode} </span>
          </div>
          <div className={classDiv}>
            <p>Phone</p>
            <span className={classSpan}>{user?.phone}</span>
          </div>
          <div className={classDiv}>
            <p>Website</p>
            <span className={classSpan}>{user?.website}</span>
          </div>
          <div className={classDiv}>
            <p>Company</p>
            <span className={classSpan}>{user?.company.name}, {user?.company.catchPhrase}, {user?.company.bs} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
