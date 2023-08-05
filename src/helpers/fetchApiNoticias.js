const URL = "https://newsapi.org/v2/everything?"

export const fetchApiNoticias = async (tema, cantidad, pagina)=>{
    const response = await fetch(`${URL}q=${tema}&pageSize=${cantidad}&page=${pagina}&apiKey=bf4aaf2e8d914009894c4e958181b389`)
    const data = await response.json()
    console.log(data.articles)
    return data.articles
}