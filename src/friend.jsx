export default function Friend({friend}){

    console.log(friend);
    const {name, email, phone, username} =friend;
    return(
        <div className="card">
            <h4>Name:{name} </h4>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p>User name; {username}</p>
        </div>
    )

}