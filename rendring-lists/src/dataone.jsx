export default function Oneseven({username,classname="SCIENCE",schoolname}) {
    console.log(username)
    return (
        <>
            <h1>{username}</h1>
            <h1>{classname}</h1>
            <h1>{schoolname}</h1>
        </>
    )
}