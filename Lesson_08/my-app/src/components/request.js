export const data = async(url)=>{
    const data1 = await fetch(url)
    return data1.json()
}
//export {} //- 2 вариант