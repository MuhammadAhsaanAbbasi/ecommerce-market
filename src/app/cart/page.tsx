import { auth } from "../../../auth"

export default async function Page() {
    const session = await auth()
    return <p>Hello {JSON.stringify(session)}</p>
}