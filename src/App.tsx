import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import School from '@mui/icons-material/School';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import WorkIcon from '@mui/icons-material/Work';

import Accordion from "./components/Accordion"
import Box from "./components/Box"
import Section from "./components/Section"
import Badge from './components/Badge';

const App = () => {
    return (
        <>
            <div className="flex flex-col h-100 items-center p-6">
                <div className="mb-8">
                    <div className="flex items-center gap-5">
                        <h1>hello, I'm fabio</h1>
                        <Badge Icon={WorkIcon} text={"open to work"} />
                    </div>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                </div>

                <Section Icon={LaptopChromebookIcon} title={"work"}>
                    <Accordion icon={''} title={"Back-end developer"} location={"curitiba, pr"} date={"jan. 2025 - today"} badge={<Badge text={"current"} />} description={""}></Accordion>
                    <div className="border-b-tertiary-darker border-b-2 my-2" />
                    <Accordion icon={''} title={"Fullstack developer"} location={"curitiba, pr"} date={"sep. 2024 - jan. 2025"} description={""}></Accordion>
                    <div className="border-b-tertiary-darker border-b-2 my-2" />
                    <Accordion icon={''} title={"Python Intern developer"} location={"curitiba, pr"} date={"mar. 2023 - sep. 2023"} description={""}></Accordion>
                </Section>

                <Section Icon={SettingsSuggestIcon} title={"projects"}>
                    <Box icon={''} title={"Manthano"} description={"unifies online learning through video calls, chat, and evaluations"} href={'https://github.com/reszkojr/manthano-backend'}></Box>
                    <Box icon={''} title={"Pinnit"} description={"a simple kanban drag & drop to-do app built in react and express.js"} href={'https://github.com/reszkojr/todo-react'}></Box>
                </Section>

                <Section Icon={School} title={"education"}>
                    <Box icon={''} title={"Systems Analysis & Development"} description={"puc-pr"} date={"jul. 2025 - today"} badge={<Badge text={"bachelor"} />}></Box>
                </Section>
            </div>
        </>
    )
}

export default App
