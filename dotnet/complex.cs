public class Complex
{
  public int MagicNumber = 42;
  
  public void related_if_elsif()
  {
    if (param == 1)
      Method();
    else if (param == 2)
      Method();
    else if (param == 1)  // Noncompliant
      Method();

  }
  public async void CallNetwork(string url) //Noncompliant
  {
    var client = new HttpClient();
    var response = await client.GetAsync(url);
    content = await response.Content.ReadAsStringAsync();
  }

  public void Method(DayOfWeek day)
    {

        switch (day)
        {
            case DayOfWeek.Monday:
                Console.WriteLine("Today is Monday!");
                break;
            case DayOfWeek.Tuesday:
                Console.WriteLine("Today is Tuesday!");
                break;
            case DayOfWeek.Wednesday:
                Console.WriteLine("Today is Wednesday!");
                break;
            case DayOfWeek.Thursday:
                Console.WriteLine("Today is Thursday!");
                break;
            case DayOfWeek.Friday:
                Console.WriteLine("Today is Friday!");
                break;
            case DayOfWeek.Saturday:
                Console.WriteLine("Today is Saturday!");
                break;
            case DayOfWeek.Sunday:
                Console.WriteLine("Today is Sunday!");
                break;
        }
    }
  }
}