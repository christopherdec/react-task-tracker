import { Link } from 'react-router-dom'
import Button from './Button'

const About = () => {
  return (
    <div>
        <h4>Version 1.0.1</h4>
        <p>
            Projeto desenvolvido seguindo o vídeo&nbsp;
            <a target="_blank" rel="noreferrer noopener"
                href='https://www.youtube.com/watch?v=w7ejDZ8SWv8'>
                React JS Crash Course
            </a>
            , do canal Traversy Media.
        </p>
        <Link to="/"><Button text="Go Back"/></Link>
    </div>
  )
}

export default About