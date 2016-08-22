public class Main{
  	public static void main(String args[]) {
      	threesAndFive(10, 30);
	}
    public void threesAndFive(int start, int end){
      for (int i = start; i <= end; i++){
        int sum = 0;
        if (i % 15 != 0){
          if (i % 3 == 0 || i % 5 == 0){
            sum += i;
          }
        }
      }
      System.out.println(sum);  
    }
}