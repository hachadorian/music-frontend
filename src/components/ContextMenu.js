import React from "react";
import {
  ContextMenu as Menu,
  ContextMenuTrigger,
  MenuItem,
  SubMenu,
} from "react-contextmenu";

const ContextMenu = (props) => {
  const MENU_TYPE = "SIMPLE";

  const handleClick = (e, data) => {
    this.setState(({ logs }) => ({
      logs: [`Clicked on menu ${data.item}`, ...logs],
    }));
  };

  return (
    <div>
      <ContextMenuTrigger id={MENU_TYPE} holdToDisplay={1000}>
        <div className="well">{props.children}</div>
      </ContextMenuTrigger>
      <Menu id={MENU_TYPE}>
        <MenuItem onClick={handleClick} data={{ item: "item 1" }}>
          Menu Item 1
        </MenuItem>
        <MenuItem onClick={handleClick} data={{ item: "item 2" }}>
          Menu Item 2
        </MenuItem>
        <SubMenu title="A SubMenu">
          <MenuItem onClick={handleClick} data={{ item: "subitem 1" }}>
            SubItem 1
          </MenuItem>
          <SubMenu title="Another SubMenu">
            <MenuItem onClick={handleClick} data={{ item: "subsubitem 1" }}>
              SubSubItem 1
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: "subsubitem 2" }}>
              SubSubItem 2
            </MenuItem>
          </SubMenu>
          <SubMenu title="Yet Another SubMenu">
            <MenuItem onClick={handleClick} data={{ item: "subsubitem 3" }}>
              SubSubItem 3
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: "subsubitem 4" }}>
              SubSubItem 4
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={handleClick} data={{ item: "subitem 2" }}>
            SubItem 2
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default ContextMenu;
