import getRandomFromArray from "../utils/getRandomFromArray"
import Phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import'./styles/BtnPhrase.css'

const BtnPhrase = ({setPhraseRandom, SetImageSelected}) => {
    
    const handleClick = () => {
        const phrase = getRandomFromArray(Phrases)
        setPhraseRandom(phrase)
    const background = getRandomFromArray(arrImages)
    SetImageSelected(background)

    }

  return (
    <button className="card__btn" onClick={handleClick}>Probar mi suerte</button>
  )
}

export default BtnPhrase