

function function_module_1()
{
    let array = [1,2,3,4,5];
    alert(array.length);

}

function function_module_2()
{
    alert("module 2");
}

function solution(array) 
{
    array = array.map( function(x){return x*2} )
    return array
};