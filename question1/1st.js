function uniqueChar(str)
{
     
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    return true;
}
 

let input = "asarganj";
 
if (uniqueChar(input) == true)
    document.write("The String " + input +
                   " has all unique characters" + "</br>");
else
    document.write("String " + input +
                   " is include duplicate characters");