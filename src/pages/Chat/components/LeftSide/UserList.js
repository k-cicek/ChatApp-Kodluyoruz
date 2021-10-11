import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";
import { Avatar } from "@material-ui/core";
import ThemeContext from "../../../../context/themContext";

export default function UserList({ searchText="" }) {
  const { userList, setSelectedUser } = useContext(UserContext);

  const filteredUserList = userList.filter((u) =>
    `${u.username}${u.first_name}${u.last_name}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const { theme } = useContext(ThemeContext);


  return (
    <div className="user_list" style={theme} >
      {filteredUserList.map((user) => {
        return (
          <div
            className="user-list"
            onClick={() => {
              setSelectedUser(user.id);
            }}
          >
            <div className="avatar">
              <Avatar />
            </div>
            {`${user.first_name} ${user.last_name}`}
          </div>
        );
      })}
    </div>
  );
}
