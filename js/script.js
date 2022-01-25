
function head(){
    let arr=[]
    let summ=0
    function sum(number){
        let value =0
        if (arr.length===0){
            value+=number
            arr.push(number)
            return value
        }else if(arr.length!=0){
            arr.push(number)
            summ=arr.reduce(function(add,elem){
                return add+elem
            })
        }
    }
    
    const firstCall= sum(1)
    const secondCall= sum(5)
    const thirdCall = sum(4)
    const fourthCall=sum(2)
    return summ
}
alert(head())
