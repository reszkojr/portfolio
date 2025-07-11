import Accordion from "./components/Accordion"
import Section from "./components/Section"

const App = () => {
    return (
        <>
            <div className="flex flex-col h-100 items-center p-6">
                <div className="mb-8">
                    <h1>hello, I'm fabio</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                </div>

                <Section title={"work"}>
                    <Accordion icon={''} title={"Back-end developer"} location={"curitiba, pr"} date={"jan. 2025 - today"} description={""}></Accordion>
                    <Accordion icon={''} title={"Back-end developer"} location={"curitiba, pr"} date={"jan. 2025 - today"} description={""}></Accordion>
                    <Accordion icon={''} title={"Back-end developer"} location={"curitiba, pr"} date={"jan. 2025 - today"} description={""}></Accordion>
                </Section>
            </div>
        </>
    )
}

export default App
