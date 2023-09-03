import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const noAuth = (WrapperdComponent) => {
    return (props) => {
        const router = useRouter()
        const [isNoAuth, setIsNoAuth] = useState(false)

        const handleNoAuth = () => {
            const token = localStorage.getItem('token')
            if (!token) setIsNoAuth(true)
            else router.push('/')
        }


        useEffect(() => {
            handleNoAuth()
        }, [])


        if (isNoAuth) return <WrapperdComponent {...props} />
        else return null
    }
}

export default noAuth