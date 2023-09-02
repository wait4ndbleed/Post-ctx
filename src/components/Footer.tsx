import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
    const postCtx = usePosts();
    
    return(
        <div>
            Total de posts: {postCtx?.posts.length}
        </div>
    );
}