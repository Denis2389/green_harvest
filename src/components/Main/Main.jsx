import BurgerMenu from '../Header/BurgerMenu/BurgerMenu';
import SectionAdvantage from './SectionAdvantage/SectionAdvantage';
import SectionCard from './SectionCard/SectionCard';
import SectionDiscount from './SectionDiscount/SectionDiscount';
import SectionReviews from './SectionReviews/SectionReviews';
import SectionTitle from './SectionTitle/SectionTitle';
import SectionForm from './SectionForm/SectionForm';
import SectionSocial from './SectionSocial/SectionSocial';

const Main = () => {

  return (
    <main>

        <BurgerMenu />


        <SectionTitle />
        <SectionAdvantage />
        <SectionDiscount />
        <SectionCard />
        <SectionReviews />
        <SectionForm />
        <SectionSocial />
    </main>
  );
};

export default Main;
