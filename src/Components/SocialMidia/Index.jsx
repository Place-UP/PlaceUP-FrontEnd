import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from 'react-icons/bs'

import { SocialMidia } from '../SocialMidia/style'

export const Midia = () => {
    return (
        <SocialMidia>
            <ul>
                <li><BsFacebook /></li>
                <li><BsTwitter /></li>
                <li><BsInstagram /></li>
                <li><BsGoogle /></li>
            </ul>
        </SocialMidia>
    );
}