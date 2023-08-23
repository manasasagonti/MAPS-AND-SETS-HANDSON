function removeDuplicates(){
    let str="abcadeecfb";
    let ans=new Set(str);
    ans=[...ans];
    ans=ans.join("");
    console.log(ans);
}
removeDuplicates();


function countAlphabets(){
    let str="abcadeecfb";
    let ans=new Map();
    for (let char of str){
        if(ans.has(char)){
            ans.set(char,ans.get(char)+1);
        }
        else{
            ans.set(char,1)
        }
    }
    for(let [key,value] of ans){
        console.log(`${key}=${value}`);
    }
}
countAlphabets();






