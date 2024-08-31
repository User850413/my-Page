import { useLocation, useNavigate } from 'react-router-dom';
import ico_home from '../assets/icons/ico_home.svg';
import ico_wheel from '../assets/icons/ico_wheel.svg';
import ico_menu from '../assets/icons/ico_menu.svg';
import Menu from './Menu';

const MENUS: { label: string; url: string }[] = [
  { label: '프로젝트', url: '/projects' },
  { label: '연락처', url: '/contact' },
];

const MenuButton = ({ buttonText, isNow }: { buttonText: string; isNow: boolean }) => {
  return (
    <button disabled={isNow} className={`min-w-[104px] rounded-[5px] p-[13px_17px] text-[16px] ${isNow ? 'bg-darker text-bright' : 'hover:bg-middleDarker bg-middle'}`}>
      {buttonText}
    </button>
  );
};

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className='defaultShadow tablet:h-[80px] tablet:px-[80px] flex h-[60px] items-center justify-between bg-bright px-[40px]'>
      <button onClick={() => navigate('/')}>
        <img src={ico_home} alt='메인으로' />
      </button>
      <ul className='tablet:flex hidden items-center gap-[40px]'>
        {MENUS.map((menu, index) => (
          <li key={index} onClick={() => navigate(menu.url)}>
            <MenuButton buttonText={menu.label} isNow={pathname === menu.url} />
          </li>
        ))}
        <li className='h-fit w-fit'>
          <Menu openMenu={<img src={ico_wheel} alt='메뉴' className='h-[40px] w-[40px]' />} menuItems={[]} />
        </li>
      </ul>
      <button className='tablet:hidden'>
        <img src={ico_menu} alt='더보기메뉴' />
      </button>
    </div>
  );
}

export default Header;
