import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Actions/usersAction";
import { userSelector } from "../Selectors/userSelector";
import Loader from "./Loader";

function UserList() {
  const { loading, users, error } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userListHtml =
    users && users.map((user) => <li key={user.id}>{user.name}</li>);
  console.log("userList", error);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3>Fetch Data from API using redux and thunk </h3>
          <ul>{userListHtml}</ul>
        </>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UserList;
