import ico_React from '../../assets/icons/ico_React.svg';
import ico_bolt from '../../assets/icons/ico_bolt.svg';
import ico_js from '../../assets/icons/ico_js.svg';
import ico_mantine from '../../assets/icons/ico_mantine.svg';
import ico_next from '../../assets/icons/ico_next.svg';
import ico_tailwind from '../../assets/icons/ico_tailwind.svg';
import ico_ts from '../../assets/icons/ico_ts.svg';
import { ProjectsProps } from '../../constants/projects';

interface TitleProps {
  title: string;
  startDate: string;
  lastDate: string;
  tools: string[];
}

const ToolIcon = ({ tool }: { tool: string }) => {
  const toolToIcon: { [tool: string]: string } = {
    typescript: ico_ts,
    React: ico_React,
    tailwind: ico_tailwind,
    javascript: ico_js,
    mantine: ico_mantine,
    nextjs: ico_next,
  };

  return <img src={toolToIcon[tool]} alt={tool} className='h-full w-full' />;
};

const ProjectTitleCard = ({ title, startDate, lastDate, tools }: TitleProps) => {
  return (
    <>
      <div className='group relative mx-auto flex w-[266px] flex-col gap-[10px] py-[10px] tablet:w-[698px] tablet:flex-row tablet:gap-[30px] tablet:py-[56px] tablet:pl-[67px] desktop:w-[1200px] desktop:gap-[40px] desktop:py-[74px] desktop:pl-[98px]'>
        <img
          src={ico_bolt}
          alt='볼트 이미지'
          className='absolute left-0 top-[188px] w-[16px] -translate-y-1/2 transition-all group-hover:w-[20px] group-hover:rotate-90 tablet:top-1/2 tablet:w-[25px] group-hover:tablet:w-[30px] desktop:w-[40px] group-hover:desktop:w-[60px]'
        />
        <img
          src={ico_bolt}
          alt='볼트 이미지'
          className='absolute right-0 top-[188px] w-[16px] -translate-y-1/2 transition-all group-hover:w-[20px] group-hover:rotate-90 tablet:top-1/2 tablet:w-[25px] group-hover:tablet:w-[30px] desktop:w-[40px] group-hover:desktop:w-[60px]'
        />
        <span className='h-[160px] w-[266px] bg-red-300 desktop:h-[202px] desktop:w-[336px]'>thumbnail</span>
        <div className='flex flex-col items-center justify-center gap-[10px] tablet:items-start desktop:gap-[22px]'>
          <div className='flex flex-col tablet:items-start desktop:flex-row desktop:items-end desktop:gap-[5px]'>
            <h3 className='text-[24px] tablet:mb-[-10px] tablet:text-[30px] desktop:mb-[-5px] desktop:text-[40px]'>{title}</h3>
            <span className='hidden text-[21px] font-light tablet:block desktop:text-[24px]'>
              {startDate} - {lastDate}
            </span>
          </div>
          <ul className='hidden items-center gap-[15px] tablet:flex'>
            {tools.map((tool, index) => (
              <li key={index} className='h-[60px] w-[60px] desktop:h-[80px] desktop:w-[80px]'>
                <ToolIcon tool={tool} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const ProjectContentCard = ({ title, startDate, lastDate, tools, point, description, URL }: ProjectsProps) => {
  const navigateToLink = () => {
    window.open(URL, '_blank');
  };

  return (
    <>
      <a onClick={navigateToLink}>github로</a>
      <div>{title}</div>
      <div>
        {startDate} - {lastDate}
      </div>
      <div>{tools}</div>
      <div>{point}</div>
      <div>{description}</div>
    </>
  );
};

export { ProjectTitleCard, ProjectContentCard };
