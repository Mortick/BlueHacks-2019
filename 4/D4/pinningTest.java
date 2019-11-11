import org.junit.Test;
import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.mockito.*;
import static org.mockito.Mockito.when;

public class pinningTest
{

	methodsToTest mainpanel;
	Cell cell;
    
    
	@Before
	public void setUp() throws Exception {
    	mainpanel = new methodsToTest();
    	cell = new Cell();
	}
	@After
	public void tearDown() throws Exception {
		mainpanel = null;
		cell = null;
	}

	@Test
	public void convertToIntWorks()
	{
		assertEquals(mainpanel.convertToInt(500), 500);
	}
	
	@Test
	public void equalReturnFail()
	{
		assertNotEquals(mainpanel.convertToInt(100000), mainpanel.ORIGINALconvertToInt(5));
	}
	
	@Test
	public void equalReturnSuccess()
	{
		assertEquals(mainpanel.convertToInt(5), mainpanel.ORIGINALconvertToInt(5));
	} 

	@Test
	public void toStringWorks()
	{
		assertNotNull(cell.toString());
	}

	@Test
	public void toStringEqualsperiod()
	{
		assertEquals(cell.toString(), ".");
	}

	@Test
	public void toStringEquals()
	{
		assertEquals(cell.toString(), cell.ORIGINALtoString());

	}
}