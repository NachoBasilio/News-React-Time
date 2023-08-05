const URL = "https://newsapi.org/v2/everything?"

export const fetchApiNoticias = async (tema, cantidad, pagina)=>{
    const response = await fetch(`${URL}q=${tema}&pageSize=${cantidad}&page=${pagina}&apiKey=bf5f49575a0f4512bb4bbbcff0fa07b1`)
    const data = await response.json()
    console.log(data.articles)
    return data.articles
}