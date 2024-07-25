
import { Link } from "react-router-dom"
const ProgrammingMobile = ({ setIsOpens }) => {
    return (
        <div className='mx-auto'>
            <div class="flex flex-row space-x-4 ">
                <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900"  >
                    <h1 className='text-center p-2 text-sm text-sky-900'>
                        <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}> Java Developer</Link>
                    </h1>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900">
                    <Link to={"/services/mobile-app-development/android-application"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2 text-sm text-sky-900'>Python Developer </h1>
                    </Link>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900">
                    <Link to={"/services/mobile-app-development/react-native-application"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2 text-sm text-sky-900'>Go. Developer</h1>
                    </Link>
                </div>
            </div>
           

        </div>
    )
}

export default ProgrammingMobile;