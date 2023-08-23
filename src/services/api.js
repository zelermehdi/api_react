const endpoint = "https://crudcrud.com/api/9d3c8469354541439286e14fd77bf8eb"

export const getData = async (path) => {
    try {
        let result = await fetch(endpoint+path)
        let response = await result.json()
        return response
     } catch (error) {
         throw {
             error,
             path
         }
     }
}

export const postData = async (body, path) => {
    try {
       let result = await fetch(endpoint+path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }) 
      return result
    } catch (error) {
        throw {
            error,
            path
        }
    }
}