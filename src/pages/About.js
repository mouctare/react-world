import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>A props</h1>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum. Wikipédia
      </p>
      <br />
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum. Wikipédia
      </p>
    </div>
  );
};

export default About;
