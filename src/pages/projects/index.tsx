import Accordion from '../../components/Accordion';
import PROJECTS from '../../constants/projects';
import { ProjectContentCard, ProjectTitleCard } from './ProjectDetail';

function Projects() {
  return (
    <div className='mx-auto mt-[120px] w-fit'>
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
    </div>
  );
}

export default Projects;
