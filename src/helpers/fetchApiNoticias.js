const URL = "https://newsapi.org/v2/everything?"

export const fetchApiNoticias = async (tema, cantidad, pagina)=>{
    const response = await fetch(`${URL}q=${tema}&pageSize=${cantidad}&page=${pagina}&apiKey=1d6659dea7104c5494683f0284480093`)
    const data = await response.json()
    console.log(data.articles)
    return data.articles
}