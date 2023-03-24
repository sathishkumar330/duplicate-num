var array=[2,3,7,6,5,9,5,8,0,7,8,3];
function light(array)
{
	let result=[];
	result=[];
	for(i=0;i<array.length;i++)
	{	
		
		let exits=false;
		for(j=0;j<result.length;j++)
		{
				if(array[i]===result[j])
				{
					result1.push(array[i]);
					exits=true;
					break;
				}
		}
		if(!exits)
		{
			result.push(array[i])
		}
	} 	
	
	
}