import { myStyle } from './Home.css'

export const Home = () => {
  console.log('>>>', myStyle)

  return <div className={myStyle}>Home</div>
}
