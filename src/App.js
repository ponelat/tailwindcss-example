import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as HeartIcon } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import BgUrl from './tile_background.png'
import Calendar from './Calendar'

const bgGradient = `linear-gradient(to left,rgba(255,255,255,0),#fff 90%),url(${BgUrl})`

const Link = ({className, ...rest}) => (
  <a className={`${className} hover:underline no-underline text-sb-orange-light hover:text-sb-orange`} target="_blank" {...rest}> {rest.children} </a>
)

function App() {
  return (

    <div style={{backgroundImage: bgGradient}} className="bg-gray-50 text-sb-gray">

      <header className="min-h-screen pt-20 text-center" >

        <Logo className="m-auto animate-spin-slow fill-current text-sb-orange" height={'40vmin'} />

        <p className="mt-24 text-2xl">
          This developer <HeartIcon className="fill-current text-sb-orange w-6 h-6 inline"/>'s TailwindCSS.
        </p>

        <p className="text-xl">

          <Link className="" href="https://tailwindcss.com/docs" >
            Learn TailwindCSS
          </Link>

          or go

          <Link className="" href="https://tailwindcss.com/docs" >
            play with TailwindCSS
          </Link>

        </p>



        <Calendar className="m-auto text-sb-gray-900 mt-8" />

      </header>

    </div>
  );
}

export default App;
