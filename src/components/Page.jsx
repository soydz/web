import { Header } from "./Header"
import { SocialNetwork } from "./SocialNetwork"

export function Page() {
    return (
        <div className="page">
            <Header />
            <main>
                <SocialNetwork />
            </main>
        </div>
    )
}