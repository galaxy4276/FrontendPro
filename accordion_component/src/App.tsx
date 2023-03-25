import './App.css'
import MainFrame                       from './components/MainFrame';
import Title                           from './components/Title';
import { accordionContent, TitleEnum } from './constant';
import Accordion                       from './components/Accordion';
import AccordionLayout                 from "./components/AccordionLayout";

const renderAccordion = ([title, textContent, className]: [string, string, string]) => (
  <Accordion title={title} textContent={textContent} className={className} key={title} />
);

function App() {

  return (
    <div className="App">
      <MainFrame>
        <Title
          title={TitleEnum.TITLE}
          subTitle={TitleEnum.SUB_TITLE}
          maxWidth={355}
        />

        <AccordionLayout>
          {accordionContent.map((
            [title, textContent, className]) =>
              renderAccordion([title, textContent, className]))
          }
        </AccordionLayout>

      </MainFrame>
    </div>
  );
}

export default App
