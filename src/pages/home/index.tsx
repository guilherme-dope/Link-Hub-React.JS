import { Container } from "./style.tsx";
import Card from "../../components/card";

const Home = () => {
  return (
    <Container>
      <main>
        <header>
          <img src="https://i.imgur.com/4wxzvIC.jpg" alt="Profile Photo" />

          <h1 className="title">Guilherme</h1>
        </header>

        <Card
          img={"https://i.imgur.com/AJnhsO2.png"}
          text={"Linkedin"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/guilherme-monte-mor/")
          }
        />

        <Card
          img={"https://i.imgur.com/i31kwGz.png"}
          text={"Behance"}
          onClick={() => window.open("https://www.behance.net/xdope")}
        />

        <Card
          img={"https://i.imgur.com/X6VJTeJ.png"}
          text={"GitHub"}
          onClick={() => window.open("https://github.com/guilherme-dope")}
        />

        <Card
          img={"https://i.imgur.com/25UyX4D.png"}
          text={"Clone Spotify"}
          onClick={() => window.open("https://clone-spotify-rzr.vercel.app/")}
        />

        <Card
          img={"https://i.imgur.com/85Q1Ml7.png"}
          text={"This Project Repository"}
          onClick={() =>
            window.open("https://github.com/guilherme-dope/Link-Hub-React.JS")
          }
        />

        <h1></h1>
      </main>
    </Container>
  );
};

export default Home;
