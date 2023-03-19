import Link from "next/link"
import { useRouter } from "next/router";
import useCrypto from "../../services/encrypt/crypto";
import HeaderPage from "./header";

const crypto = new useCrypto()

export default function Partner(props) {
    const router = useRouter()
    // console.log(crypto.decrypt(router.query.data));

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-8 lg:px-4">
                <HeaderPage page={"Partner"} />
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                                {router.query && router.query.data == undefined ? "" : crypto.decrypt(router.query.data).name}
                            </h2>
                            <p className="mt-4 text-gray-500">
                                {router.query && router.query.data == undefined ? "" : crypto.decrypt(router.query.data).description}

                            </p>
                            {
                                router.query && router.query.data == undefined ? "" :
                                    <div className="mt-4 ">

                                        <Link href={"/partners"} className="mt-4 text-white cursor-pointer bg-slate-500 rounded p-1 mr-4">
                                            Partner&apos;s site
                                        </Link>

                                        <Link href={"/partners"} className="mt-4 text-white cursor-pointer bg-sky-500 rounded p-1">
                                            Back
                                        </Link>
                                    </div>
                            }

                        </div>
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">

                            {
                                router.query && router.query.data == undefined ? "" :
                                    <img
                                        src={"/" + crypto.decrypt(router.query.data).logo}
                                        alt=""
                                        className="object-fill object-center"
                                    />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// export async function getStaticProps(context) {
//     console.log(context); // return { title: 'Mortal Kombat' }
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }