import "./AboutHero.css";

let a = 78;
console.log(a);
const AboutHero = () => {
  const b = 93;
  let name = "Smauel";
  return (
    <div className="aboutParentDiv">
      <h1>
        This {a} is the about {b} Hero {b + a} {name}
      </h1>
    </div>
  );
};

export default AboutHero;
