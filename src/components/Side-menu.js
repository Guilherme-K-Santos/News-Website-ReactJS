import '../style-components/Side-menu.css'
import SideItem from './side-item-components/side-components';

function SideMenu() {
  return (
    <div className='side'>
      <h1>New</h1>

    {/* here i used a trick, props carry what you want, so i used it to carry
    different titles, messages and if he have or no the line below. */}

      <ul>
        <li>
          <SideItem 
            title='Hydrogen VS Electric Cars' 
            text='Will hydrogen-fueled cars ever catch up to EVs?'
            line=<hr />
            />
        </li>
        <li>
          <SideItem 
            title='The Downsides of AI Artistry'
            text='What are the possible adverse effects of on-demand AI image generation?'
            line=<hr />
            />
        </li>
        <li>
          <SideItem 
            title='Is VC Funding Drying Up?'
            text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
            line=''
            />
        </li>
      </ul>
    </div>
  );
}
  
export default SideMenu;
  