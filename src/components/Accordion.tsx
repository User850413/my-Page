import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface AccordionContextProps {
  selected: number | null;
  handleItemSelected: (id: number) => void;
}

interface ItemProps extends PropsWithChildren {
  id: number;
}

const AccordionContext = createContext<AccordionContextProps>({ selected: null, handleItemSelected: () => {} });

function Accordion({ children }: PropsWithChildren) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleItemSelected = (id: number) => {
    setSelected((prev) => {
      if (prev !== id) {
        return id;
      } else {
        return null;
      }
    });
  };

  return <AccordionContext.Provider value={{ selected, handleItemSelected }}>{children}</AccordionContext.Provider>;
}

const Title = ({ id, children }: ItemProps) => {
  const { handleItemSelected, selected } = useContext(AccordionContext);

  return (
    <div
      className={`transition-max-height w-fit cursor-pointer overflow-hidden duration-500 ease-in-out ${id == selected ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'}`}
      onClick={() => handleItemSelected(id)}
    >
      {children}
    </div>
  );
};

const Content = ({ id, children }: ItemProps) => {
  const { selected } = useContext(AccordionContext);

  return <div className={`transform transition-all duration-500 ease-in-out ${id == selected ? 'block translate-y-0' : 'hidden translate-y-[-300px]'}`}>{children}</div>;
};

Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
