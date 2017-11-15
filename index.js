/****************************************************************
 
 Have you ever thought your code was too short or that it didn't
 seem like you did any work? Does your boss think you're slacking
 off because you only have 3 packages imported? Well look no further,
 introducing uselessPoint.js. This package does absolutely nothing 
 other than use up your memory or extend your run time.

 ****************************************************************/

function extendTime(timeNumber)
{
    let count = 0;
    var numArr = [2,5,21,1,45,23,10,85,100,1,853,532,32,4,621,13,12,1552,7324,452,853,143,43,51,22,34,11,37];

    if(timeNumber <= 0)
    {
        timeNumber = 4320;
    }

    for(var i = 0; i < timeNumber; i++)
    {
        if(timeNumber % 2 == 0)
        {
            numArr.sort((a,b) => {
                return a-b;
            });
        } 
        else 
        {
            if(timeNumber == 1)
            {
                return true;
            }
            timeNumber -= 1;            
            extendTime(timeNumber);
        }
    }
    
    setTimeout(() => {
        var obj = {};
    }, 5000);

    return false;
}

function spacer()
{
    let obj = {};
    let obj1 = {};
    let obj2 = {};
    let arr = ['hello','world','is','a','nice','start','to','a','language'];

    arr.sort();
    return arr.length;
}

module.exports = {
    extendTime:extendTime,
    spacer:spacer
}