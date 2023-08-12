import { Container } from "./style.tsx";
import Card from "../../components/card";

const Home = () => {
    return (
        <Container>
            <main>

                <img src="https://i.imgur.com/4wxzvIC.jpg" alt="Profile Photo"/>

                <h1 className="title">Guilherme</h1>

                <Card />
                <Card />
                <Card />
                <Card />

            </main>
        </Container>
    );
};

export default Home;
