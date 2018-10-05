import React from "react";

// class MenuNav extends React.PureComponent {
//   render() {
//     return (
      // <aside className="menu">
      //   <p className="menu-label">General</p>
      //   <ul className="menu-list">
      //     <li>
      //       <a>Dashboard</a>
      //     </li>
      //     <li>
      //       <a>Customers</a>
      //     </li>
      //   </ul>
      //   <p className="menu-label">Administration</p>
      //   <ul className="menu-list">
      //     <li>
      //       <a>Team Settings</a>
      //     </li>
      //     <li>
      //       <a className="is-active">Manage Your Team</a>
      //       <ul>
      //         <li>
      //           <a>Members</a>
      //         </li>
      //         <li>
      //           <a>Plugins</a>
      //         </li>
      //         <li>
      //           <a>Add a member</a>
      //         </li>
      //       </ul>
      //     </li>
      //     <li>
      //       <a>Invitations</a>
      //     </li>
      //     <li>
      //       <a>Cloud Storage Environment Settings</a>
      //     </li>
      //     <li>
      //       <a>Authentication</a>
      //     </li>
      //   </ul>
      //   <p className="menu-label">Transactions</p>
      //   <ul className="menu-list">
      //     <li>
      //       <a>Payments</a>
      //     </li>
      //     <li>
      //       <a>Transfers</a>
      //     </li>
      //     <li>
      //       <a>Balance</a>
      //     </li>
      //   </ul>
      // </aside>
//     );
//   }
// }props
const MenuNav = () =>(
  <React.Fragment> 
        <aside className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a href>Dashboard</a>
          </li>
          <li>
            <a href>Customers</a>
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <a href>Team Settings</a>
          </li>
          <li>
            <a href className="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a href>Members</a>
              </li>
              <li>
                <a href>Plugins</a>
              </li>
              <li>
                <a href>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a href>Invitations</a>
          </li>
          <li>
            <a href>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a href>Authentication</a>
          </li>
        </ul>
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <a href>Payments</a>
          </li>
          <li>
            <a href>Transfers</a>
          </li>
          <li>
            <a href>Balance</a>
          </li>
        </ul>
      </aside>
  </React.Fragment>
  )
export default MenuNav;
