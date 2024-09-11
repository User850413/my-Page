import { PropsWithChildren } from 'react';

import { ProjectsProps } from '../../constants/projects';
import ico_bolt from '/assets/icons/ico_bolt.svg';
import ico_framer_motion from '/assets/icons/ico_framer_motion.svg';
import ico_js from '/assets/icons/ico_js.svg';
import ico_mantine from '/assets/icons/ico_mantine.svg';
import ico_next from '/assets/icons/ico_next.svg';
import ico_React from '/assets/icons/ico_react.svg';
import ico_tailwind from '/assets/icons/ico_tailwind.svg';
import ico_ts from '/assets/icons/ico_ts.svg';

interface TitleProps {
  title: string;
  startDate: string;
  lastDate: string;
  tools: string[];
  thumbnail: string;
}

interface DescLabelProps extends PropsWithChildren {
  text: string;
  direct: string;
}

const ToolIcon = ({ tool }: { tool: string }) => {
  const toolToIcon: { [tool: string]: string } = {
    typescript: ico_ts,
    React: ico_React,
    tailwind: ico_tailwind,
    javascript: ico_js,
    mantine: ico_mantine,
    next: ico_next,
    'framer motion': ico_framer_motion,
  };

  return <img src={toolToIcon[tool]} alt={tool} className='h-full w-full' />;
};

const ProjectTitleCard = ({ title, startDate, lastDate, tools, thumbnail }: TitleProps) => {
  const thumbnailImage = `assets/images/${thumbnail}`;

  return (
    <div className='group relative mx-auto flex w-[266px] flex-col gap-[10px] py-[10px] tablet:w-[698px] tablet:flex-row tablet:gap-[30px] tablet:border-b-[1px] tablet:border-b-middle tablet:py-[56px] tablet:pl-[67px] desktop:w-[1200px] desktop:gap-[40px] desktop:py-[74px] desktop:pl-[98px]'>
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
      <div
        className='h-[160px] w-[266px] border-[1px] border-middle desktop:h-[202px] desktop:w-[336px]'
        style={{ backgroundImage: `url(${thumbnailImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className='flex flex-col items-center justify-center gap-[10px] tablet:items-start desktop:gap-[22px]'>
        <div className='flex flex-col tablet:items-start desktop:flex-row desktop:items-end desktop:gap-[5px]'>
          <h3 className='text-[24px] tablet:mb-[-10px] tablet:text-[30px] desktop:mb-[-5px] desktop:text-[40px]'>{title}</h3>
          <span className='hidden text-[21px] font-light tablet:block desktop:text-[24px]'>
            {startDate} - {lastDate}
          </span>
        </div>
        <ul className='hidden items-center gap-[15px] overflow-x-hidden tablet:flex tablet:max-w-[285px] desktop:max-w-[650px]'>
          {tools.map((tool, index) => (
            <li key={index} className='h-[60px] w-[60px] flex-shrink-0 desktop:h-[80px] desktop:w-[80px]'>
              <ToolIcon tool={tool} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DescLabel = ({ text, direct, children }: DescLabelProps) => {
  return (
    <div className={`flex gap-[8px] ${direct}`}>
      <span
        className={`relative ${direct.includes('flex-row') ? 'after:right-0 after:h-[80%]' : 'after:bottom-0 after:left-1/2 after:w-[80%] after:-translate-x-1/2 after:transform'} h-fit w-fit flex-shrink-0 rounded-[4px] p-[6px_12px] text-[18px] after:absolute after:border-[1px] after:border-middleDarker tablet:text-[24px] desktop:text-[32px]`}
      >
        {text}
      </span>
      <div className={`h-fit w-fit rounded-[4px] p-[6px_12px] text-[14px] font-light tablet:text-[20px] desktop:text-[28px] ${direct.includes('flex-row') ? 'mt-[4px]' : ''}`}>{children}</div>
    </div>
  );
};

const ProjectContentCard = ({ title, startDate, lastDate, tools, point, description, URL, site, thumbnail }: ProjectsProps) => {
  const navigateToLink = (url: string) => {
    window.open(url, '_blank');
  };

  const thumbnailImage = `assets/images/${thumbnail}`;

  return (
    <div className='relative py-[10px] after:absolute after:left-1/2 after:block after:w-[166px] after:-translate-x-1/2 after:border-b-[1px] after:border-middleDarker tablet:mt-[100px] tablet:py-0 tablet:after:w-[264px] desktop:mt-[200px] desktop:after:w-[80%]'>
      <div
        onClick={() => navigateToLink(site)}
        className='relative mx-auto mt-[15px] h-[160px] w-[266px] cursor-pointer border-[1px] border-middle after:absolute after:left-1/2 after:top-[-15px] after:block after:w-[166px] after:-translate-x-1/2 after:border-t-[1px] after:border-middleDarker tablet:h-[342px] tablet:w-[608px] tablet:after:w-[264px] desktop:h-[524px] desktop:w-[930px] desktop:after:top-[-30px] desktop:after:w-[80%]'
        style={{ backgroundImage: `url(${thumbnailImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <h2 className='mx-auto mb-[25px] mt-[10px] w-fit text-[20px] tablet:mt-[20px] tablet:text-[40px] desktop:mb-[40px] desktop:mt-[100px] desktop:text-[60px]'>{title}</h2>
      <div className='flex flex-col items-start gap-[20px]'>
        <div className='flex w-full flex-col items-start gap-[20px] desktop:flex-row'>
          <div className='flex flex-1 flex-col items-start gap-[20px]'>
            <DescLabel text='기간' direct='flex-row'>
              <div>
                {startDate} - {lastDate}
              </div>
            </DescLabel>
            <DescLabel text='특징' direct='flex-row'>
              <ul>
                {point.map((point, index) => (
                  <li key={index}>{`- ${point}`}</li>
                ))}
              </ul>
            </DescLabel>
          </div>
          <div className='flex-1 desktop:border-l-[1px] desktop:border-l-middle desktop:pl-[30px]'>
            <DescLabel text='사용 기술' direct='flex-col'>
              <ul className='flex gap-[9px]'>
                {tools.map((tool, index) => (
                  <li key={index} className='group relative h-[40px] w-[40px] rounded-[5px] tablet:h-[80px] tablet:w-[80px]'>
                    <ToolIcon tool={tool} />
                    <span className='absolute bottom-[100%] left-1/2 mb-[3px] hidden -translate-x-1/2 rounded-[5px] border-[1px] border-middle bg-white p-[3px_10px] group-hover:block'>{tool}</span>
                  </li>
                ))}
              </ul>
            </DescLabel>
          </div>
        </div>
        <DescLabel text='설명' direct='flex-col'>
          <div>{description}</div>
        </DescLabel>
      </div>
      <a
        className='mx-auto mb-[10px] mt-[60px] block w-fit cursor-pointer rounded-[50px] bg-darker px-[21px] py-[8px] text-[18px] text-middleLighter hover:bg-middleDarker hover:text-darkerText tablet:mb-[30px] tablet:mt-[100px] tablet:px-[40px] tablet:text-[24px] desktop:mb-[40px] desktop:mt-[200px] desktop:px-[50px] desktop:text-[32px]'
        onClick={() => navigateToLink(URL)}
      >
        GitHub
      </a>
    </div>
  );
};

export { ProjectTitleCard, ProjectContentCard };
