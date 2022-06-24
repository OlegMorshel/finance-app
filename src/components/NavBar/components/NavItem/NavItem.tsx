import React from 'react';
import { NavBarSize } from '../../NavBar';
interface Props {
  mode?: NavBarSize;
}
const NavItem: React.FC<Props> = ({ mode = NavBarSize.LARGE }) => {
  return (
    <div>
      <p>Icon</p>
      {mode === NavBarSize.LARGE && <p>Название</p>}
    </div>
  );
};

export default NavItem;
