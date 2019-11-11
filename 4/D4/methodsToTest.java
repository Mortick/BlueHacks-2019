public class methodsToTest
{
	public int _r = 1000;

	public methodsToTest()
	{

	}
	public int convertToInt(int x) {
		/**int c = 0;
		String padding = "0";
		while (c < _r) {
			String l = new String("0");
			padding += l;
			c++;
		}

		String n = padding + String.valueOf(x); 
		int q = Integer.parseInt(n);
		return q; **/
		return x;
	}

	public int ORIGINALconvertToInt(int x) {
		int c = 0;
		String padding = "0";
		while (c < _r) {
			String l = new String("0");
			padding += l;
			c++;
		}

		String n = padding + String.valueOf(x); 
		int q = Integer.parseInt(n);
		return q; 
	}
}