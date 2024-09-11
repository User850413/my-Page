import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from '../Drawer';
import Menu from '../Menu';
import { ThemeSelection } from './Selection';
import ico_home from '/assets/icons/ico_home.svg';
import ico_menu from '/assets/icons/ico_menu.svg';
import ico_wheel from '/assets/icons/ico_wheel.svg';

const MENUS: { label: string; url: string }[] = [
  { label: '프로젝트', url: '/projects' },
  { label: '연락처', url: '/contact' },
];

const MenuButton = ({ buttonText, isNow, onClick }: { buttonText: string; isNow: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      disabled={isNow}
      className={`min-w-[104px] rounded-[5px] border-[1px] p-[13px_17px] text-[16px] text-darkerText transition-all ${isNow ? 'border-darker' : 'hover:border-darker'}`}
    >
      {buttonText}
    </button>
  );
};

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className='defaultShadow fixed left-0 right-0 top-0 z-30 flex h-[60px] items-center justify-between bg-bright px-[40px] tablet:h-[80px] tablet:px-[80px]'>
      <button onClick={() => navigate('/')}>
        <img src={ico_home} alt='메인으로' />
      </button>
      <ul className='hidden items-center gap-[40px] tablet:flex'>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <MenuButton buttonText={menu.label} isNow={pathname === menu.url} onClick={() => navigate(menu.url)} />
          </li>
        ))}
        <li className='h-fit w-fit'>
          <Menu openMenu={<img src={ico_wheel} alt='메뉴' className='h-[40px] w-[40px]' />} menuItems={[<ThemeSelection />]} />
        </li>
      </ul>
      <span className='tablet:hidden'>
        <Drawer>
          <Drawer.Trigger>
            <img src={ico_menu} alt='더보기메뉴' />
          </Drawer.Trigger>
          <Drawer.Body direction='right'>
            {MENUS.map((menu, index) => (
              <Drawer.Item key={index} onClick={() => navigate(menu.url)}>
                {menu.label}
              </Drawer.Item>
            ))}
            <Drawer.Item>
              <ThemeSelection />
            </Drawer.Item>
          </Drawer.Body>
        </Drawer>
      </span>
    </div>
  );
}

export default Header;
