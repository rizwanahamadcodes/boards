import { Board } from "@/components/Board";
import Container from "@/components/Container";
import Section from "@/components/Section";
import backgroundImage from "/backgrounds/abstract-background.jpg";

const App = () => {
    return (
        <Section className="relative h-full">
            <img
                src={backgroundImage}
                alt="background"
                className="z-[0] h-full w-full absolute top-0 left-0 object-cover"
            />
            <Container className="h-full relative my-1 z-[1]">
                <Board />
            </Container>
        </Section>
    );
};

export default App;
