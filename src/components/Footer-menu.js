import '../style-components/Footer-menu.css'
import FooterItem from './footer-item-components/footer-item';

function FooterMenu() {
  return (
    <div className="footer">
      <FooterItem 
        imageUrl={process.env.PUBLIC_URL + '/images/image-retro-pcs.jpg'} 
        alt="computers" 
        number='01'
        title='Reviving Retro PCs'
        description='What happens when old PCs are given modern upgrades?'
      />
      <FooterItem 
      imageUrl={process.env.PUBLIC_URL + '/images/image-top-laptops.jpg'} 
      alt="keyboard"
      number='02'
      title='Top 10 Laptops of 2022'
      description='Our best picks for various needs and budgets.'
      />
      <FooterItem 
        imageUrl={process.env.PUBLIC_URL + '/images/image-gaming-growth.jpg'} 
        alt="playstation controller"
        number='03'
        title='The Growth of Gaming'
        description='How the pandemic has sparked fresh opportunities.'
      />
    </div>
  );
}

export default FooterMenu;
