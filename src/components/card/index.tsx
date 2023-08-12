import { Container } from "./style.tsx";

interface CardProps {
  img: string;
  text: string;
  onClick: () => void;
}

const Card = ({ img, text, onClick }: CardProps) => {
  return (
    <Container onClick={onClick}>
      <section>
        <img src={img} alt="" />
        <h1>{text}</h1>
      </section>
    </Container>
  );
};

export default Card;
