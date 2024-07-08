import ImageCard from '../ImageCard';
import VoyageJPG from '../../assets/voyage.jpg';
import BasketJPG from '../../assets/panier_basket.jpg';
import EscaladeJPG from '../../assets/escalade.jpg';
import VeilleJPG from '../../assets/veille_technique.jpg';

const about = [
  { image: VoyageJPG, title: 'Photographie', description: 'Créativité' },
  { image: BasketJPG, title: 'Basket', description: "Esprit d'équipe" },
  { image: EscaladeJPG, title: 'Escalade', description: 'Performance' },
  { image: VeilleJPG, title: 'Veille technique', description: 'Curiosité' },
];

const About = () => {
  return (
    <div
      className="md:h-screen h-auto flex items-center justify-center"
      id="about"
    >
      <div className="flex flex-wrap justify-center">
        {about.map((item, index) => (
          <ImageCard
            key={index}
            imageUrl={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
