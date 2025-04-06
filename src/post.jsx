export default function Post({post}){
    return(
        <div className="card">
            <p> {post.body} </p>
            <h5> {post.title} </h5>
            
        </div>
    )
}