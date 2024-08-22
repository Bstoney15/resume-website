import './Socials.css'
import LinkedInPNG from './assets/linkdin.png'

export function Socials()
{
    return(
        <div class='socials'>
            <h1>Socials</h1>
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/stonestreet/'>
                        <img src={LinkedInPNG} alt='Linkin'/>
                    </a>
                </li>
                <li><h5>(Only social media im active on)</h5></li>
            </ul>
        </div>
    );
}