import React from "react";
import { Menu,Dropdown, Image, 
  Container,Visibility } from 'semantic-ui-react'
// import { NavLink } from "react-router-dom";

const HeaderClass = () =>(
  <React.Fragment>
                <Visibility
          once={false}
        >
          <Menu
            borderless
            fixed='top'
          >
            <Container >
              <Menu.Item>
                <Image size='mini' src='http://4.bp.blogspot.com/-RS9sjwFYfas/VOp2yNXDcbI/AAAAAAAAAfc/9faha34HEW8/s320/utorrent.jpg' />
              </Menu.Item>
              <Menu.Item header>ระบบผู้ส่งออก</Menu.Item>
              {/* <Menu.Item as='a'>Blog</Menu.Item> */}
              {/* <Menu.Item as='a'>Articles</Menu.Item> */}

              <Menu.Menu position='right'>
                <Dropdown text='คุณจน ดีงาม' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>ออกจากระบบ</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
</React.Fragment>
  )
export default HeaderClass;
