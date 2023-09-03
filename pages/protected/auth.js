import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Auth = (WrapperdComponent) => {
    return (props) => {
        const router = useRouter()
        const [isAuth, setIsAuth] = useState(false)

        const handleAuth = () => {
            const token = localStorage.getItem('token')
            if (token) setIsAuth(true)
            else router.push('/login')
        }


        useEffect(() => {
            handleAuth()
        }, [])


        if (isAuth) return <WrapperdComponent {...props} />
        else return null
    }
}

export default Auth