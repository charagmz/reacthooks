import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


// TODO: Agregar boton para ir  a la anterior
// TODO: Agregar input para buscar por un numero especifico
export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const url = 'https://www.breakingbadapi.com/api/quotes/'+counter;
    const {data, isLoading, hasError} = useFetch(url);
    const { author, quote} = !!data && data[0];
    // console.log({data, isLoading, hasError})

    // if (isLoading) {
    //     return (<h1>Loading ...</h1>)
    // }

    return (
        <>
            <h1>BreakingBad Qoutes</h1>
            <hr />

            {
                // (isLoading)
                // ? (
                //     <div className="alert alert-info text-center">
                //         Loading ...
                //     </div>
                // )
                // : (
                //     <blockquote className="blockquote text-end">
                //         <p className="mb-1">{ quote }</p>
                //         <footer className="blockquote-footer">{author}</footer>
                //     </blockquote>
                // )
            }
            {
                isLoading
                ? <LoadingQuote />
                : <Quote author={author} quote={quote} />
            }

            <button 
                className="btn btn-primary"
                disabled={isLoading} 
                onClick={() => increment(1)}>
                Next quote
            </button>

        </>
    )
}
