const URL = "https://newsapi.org/v2/everything?"

export const fetchApiNoticias = async (tema, cantidad, pagina)=>{
    const response = await fetch(`${URL}q=${tema}&pageSize=${cantidad}&page=${pagina}&apiKey=ad4cc2ff6e694ea2a89777067339d0d1`)
    const data = await response.json()
    console.log(data.articles)
    return data.articles
}