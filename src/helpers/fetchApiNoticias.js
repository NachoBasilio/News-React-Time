const URL = "https://newsapi.org/v2/everything?"

export const fetchApiNoticias = async (tema, cantidad, pagina)=>{
    const response = await fetch(`${URL}q=${tema}&pageSize=${cantidad}&page=${pagina}&apiKey=da28a1aea35646578ac681c289dee0d7`)
    const data = await response.json()
    console.log(data.articles)
    return data.articles
}