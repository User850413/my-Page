import { ReactNode, useRef, useState } from 'react';

interface MenuProps {
  openMenu: ReactNode;
  menuItems: ReactNode[];
  gap?: number;
}

function Menu({ openMenu, menuItems, gap = 10 }: MenuProps) {
  const menuItem = useRef<null | HTMLDivElement>(null);
  const [menuOn, setMenuOn] = useState<boolean>(false);

  const handleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOn((prev) => !prev);
  };

  return (
    <>
      {menuOn && <div className='absolute inset-0 bg-opacity-0' onClick={handleMenu} />}
      <div className='relative w-fit'>
        <div ref={menuItem} onClick={handleMenu} className='cursor-pointer'>
          {openMenu}
        </div>
        {menuOn && (
          <ul
            className='defaultShadow absolute left-1/2 top-full flex w-max -translate-x-1/2 transform flex-col items-center rounded-[5px] bg-bright p-[12px_8px]'
            style={{ top: `calc(100% + ${gap}px)` }}
          >
            {menuItems.map((item, index) => (
              <li key={index} className='cursor-default border-b-[1px] border-b-middle p-[8px]'>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Menu;
