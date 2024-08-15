// export class Fetcher {
//     public url: string ; 
//     public body: object ; 

//     constructor(url: string,body: object) {
//         this.url = url
//         this.body = body
//     }

//     async GET() {
//         const response = await fetch (this.url, {
//             method: 'GET'
//         })
//         return response.json()
//     }

//     async POST() {
//         const response = await fetch (this.url, {
//             method: 'POST',
//             body: JSON.stringify(this.body)
//         })
//         return response.json()
//     }

//     async PUT() {
//         const response = await fetch (this.url, {
//             method: 'PUT',
//             body: JSON.stringify(this.body)
//         })
//         return response.json()
//     }
  
//    }


export const fetcher = async(url: string) => {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('Failed to fetch data')
    }
    return response.json()
}