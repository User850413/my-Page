import { ReactNode, useRef, useState } from "react";

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
      {menuOn && (
        <div className="absolute inset-0 bg-opacity-0" onClick={handleMenu} />
      )}
      <div className="relative w-fit">
        <div ref={menuItem} onClick={handleMenu} className="cursor-pointer">
          {openMenu}
        </div>
        {menuOn && (
          <ul
            className="absolute w-max flex flex-col items-center defaultShadow rounded-[5px] p-[12px_8px] bg-bright top-full left-1/2 transform -translate-x-1/2"
            style={{ top: `calc(100% + ${gap}px)` }}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="p-[8px] cursor-default border-b-[1px] border-b-middle"
              >
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
