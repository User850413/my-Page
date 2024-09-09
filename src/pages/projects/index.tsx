import { useNavigate } from 'react-router-dom';

import Accordion from '../../components/Accordion';
import PROJECTS from '../../constants/projects';
import GoUpButton from './GoUpButton';
import { ProjectContentCard, ProjectTitleCard } from './ProjectDetail';

function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className='mx-auto mb-[50px] mt-[80px] w-fit cursor-default text-[30px] font-black underline tablet:mt-[138px] tablet:text-[40px] desktop:mb-[90px] desktop:text-[60px]'>PROJECTS</h1>
      <div className='mx-auto w-fit'>
        <Accordion>
          {PROJECTS.map(({ title, lastDate, startDate, description, tools, point, id, URL }) => (
            <div className='w-min' key={id}>
              <Accordion.Title id={id}>
                <ProjectTitleCard title={title} lastDate={lastDate} startDate={startDate} tools={tools} />
              </Accordion.Title>
              <Accordion.Content id={id}>
                <ProjectContentCard id={id} title={title} lastDate={lastDate} startDate={startDate} tools={tools} description={description} point={point} URL={URL} />
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
        <a onClick={() => navigate('/contact')} className='mx-auto mb-[48px] mt-[120px] block w-fit cursor-pointer text-[18px] font-light hover:underline tablet:text-[24px]'>
          want to contact with me?
        </a>
      </div>
      <GoUpButton />
    </>
  );
}

export default Projects;
