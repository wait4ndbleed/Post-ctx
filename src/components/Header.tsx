import { usePosts } from "@/contexts/PostContext";
import { useState } from "react";

export const Header = () => {
    const postCtx = usePosts();

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.dispatch({
                type: 'add',
                payload: {
                    title: titleInput,
                    body: bodyInput
                }
            });
            setTitleInput('');
            setBodyInput('');
        }
    }
    return(
        <div>
            <h1 className="text-3xl">Título da Página</h1>
            <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
                <input 
                type="text" 
                placeholder="Digite um título" 
                className="border border-gray-300 p-2 text-black text-xl"
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                />
                <textarea 
                placeholder="Digite um post"
                className="h-24 border border-gray-300 p-2 text-black text-xl"
                value={bodyInput}
                onChange={e => setBodyInput(e.target.value)}
                ></textarea>
                <button 
                className="bg-blue-500 p-3 text-white rounded-md"
                onClick={handleAddButton}
                >Adicionar</button>
            </div>
        </div>
    );
}