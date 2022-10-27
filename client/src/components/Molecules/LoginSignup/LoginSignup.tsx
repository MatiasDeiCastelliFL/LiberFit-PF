import { Link } from "react-router-dom"

const SingUp = () => {
    return (
        <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url(https://fondosmil.com/fondo/4046.jpg)"}}>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
                        {/* Sing Up */}
                        <div className="w-3/5 p-5">
                            <div className="text-left font-bold">
                                <span className="text-red-400 text-2xl px-2">Liberfit</span>Gym
                            </div>
                            <div className="py-4">
                                <p className="font-bold text-red-400">please sign up to continue</p>
                                <div className="border-2 w-14 border-red-400 inline-block mb-2"></div>
                            </div>
                            <div></div>
                        </div>
                        {/*  */}
                        <div className="w-2/5 bg-green-500 text-white rounded-2xl py-36 px-12">
                            <Link to="/login">Sing in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingUp