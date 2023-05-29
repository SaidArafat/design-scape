import IconCard from "./iconCard";

const IconCardContainer = ({ cards }) => {
  return (
    <section className="row py-5">
      {cards.map((card, index) => (
        <div className="col-md-3 mx-auto" key={index}>
          <IconCard
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </section>
  );
};

export default IconCardContainer;
