import { PropsWithChildren, createContext, useContext, useState } from 'react';

import ico_xIcon from '/assets/icons/ico_xIcon.svg';

interface DrawerBodyProps extends PropsWithChildren {
  direction: 'left' | 'right';
}

interface DrawerItemProps extends PropsWithChildren {
  onClick?: () => void;
}

const DrawerContext = createContext({ isOpen: false, toggleDrawer: () => {} });
function Drawer({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>{children}</DrawerContext.Provider>;
}

const Trigger = ({ children }: PropsWithChildren) => {
  const { toggleDrawer } = useContext(DrawerContext);
  return <button onClick={toggleDrawer}>{children}</button>;
};

const Body = ({ direction, children }: DrawerBodyProps) => {
  const { isOpen, toggleDrawer } = useContext(DrawerContext);
  return (
    <>
      {isOpen ? <div onClick={toggleDrawer} className='fixed inset-0 z-10 overflow-x-hidden bg-darker bg-opacity-[0.1]' /> : null}
      <div
        className={`${direction === 'right' ? 'right-0' : ''} fixed bottom-0 top-0 z-10 w-[200px] bg-bright p-[20px] transition-transform duration-300 ease-in-out ${isOpen ? `${direction === 'left' ? '' : '-'}translate-x-0 transform` : `${direction === 'left' ? '-' : ''}translate-x-full transform`}`}
      >
        <div className='flex w-full flex-col'>
          <span className={`${direction === 'left' ? 'ml-auto' : 'mr-auto'}`}>
            <Drawer.Trigger>
              <img src={ico_xIcon} alt='닫기' />
            </Drawer.Trigger>
          </span>
          <ul className='flex flex-col items-center gap-[5px]'>{children}</ul>
        </div>
      </div>
    </>
  );
};

const Item = ({ children, onClick }: DrawerItemProps) => {
  const { toggleDrawer } = useContext(DrawerContext);
  return (
    <li
      className={`flex w-full justify-center border-b-[1px] border-b-middle py-[15px] ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={() => {
        if (onClick) onClick();
        toggleDrawer();
      }}
    >
      {children}
    </li>
  );
};

Drawer.Trigger = Trigger;
Drawer.Body = Body;
Drawer.Item = Item;

export default Drawer;
