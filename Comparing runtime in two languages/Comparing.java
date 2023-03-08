public class Comparing{
	public static int addTwo (int a, int b) {
		return a + b;		
	};
	
	public static int[] addArray (int[] myArray, int a) {
		for (int i = 0; i < myArray.length; i++) {
			myArray[i] += a;
		}
		return myArray;
	}
	
	public static int factorielle(int a) {
		if (a == 0) {
			return 1;
		} else {
			return a * factorielle(a - 1);
		}
	}
	
	public static void main (String[] args){
		// get start time
		long startTime = System.nanoTime();
		
		// run function
		//addTwo(3,4);
		//int[] myNum = {3, 4, 1, 10};
		//addArray(myNum, 1);
		factorielle(253);
		
		// get endtime
		long endTime = System.nanoTime();
		
		//print total elapsed time
		System.out.print("Time to run: " + (endTime - startTime));
		
		//runtime add : 800 ms
		//runtime addArray : 1600 ms
		// runtime factorielle(5) : 1100 ms
		// runtime factorielle(253) : 14600 ms
	}
	
}

