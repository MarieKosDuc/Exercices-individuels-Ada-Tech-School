import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //initializing spectator
        Spectator spectator = new Spectator();

        //main spectator method: getting the age and money arguments from user
        spectator.initialize();

        //initializing assistant
        Assistant assistant = new Assistant();

        //initializing magician
        Magician magician = new Magician();

        //magic using the assistant and spectator instances
        magician.magicTrick(assistant, spectator);

    }
}

class Paper {
    private int age, money;

    // setter for age and money
    public void writeOn(int specsAge, int specsMoney){
        age = specsAge;
        money = specsMoney;
    }

    // getter for age and money
    public int readAge(){
        return age;
    }

    public int readMoney(){
        return money;
    }

}

class Spectator {
    private int age, money;

    //initialization of scanner
    Scanner keyboard = new Scanner(System.in);

    public void initialize() {
        System.out.println("You are selected for a magic trick!");
        System.out.println("How old are you? ");

        age = keyboard.nextInt();

        do {
            System.out.println("How much money do you have in your pocket? (0-100) ");
            money = keyboard.nextInt();
        } while (money >= 100);
    }

    // use of a newPaper instance --> initialized in the Magician class
    public void writeOnPaper(Paper newPaper){
        System.out.println("You write it on a piece of paper.");
        newPaper.writeOn(age, money);
    }
}

class Assistant {
    private int age, money, result;
    public void readPaper(Paper newPaper){
        System.out.println("The magician's assistant reads the paper.");
        age = newPaper.readAge();
        money = newPaper.readMoney();
        //System.out.println("[I saw " + age + ' ' + money + "]");
    }

    public void calculateResult(){
        result = (age * 2 + 5) * 50 + money - 365;
    }

    // this class announces the result and RETURNS it for magician's use
    public int sayResult(){
        System.out.println("The assistant announces: " + result + " .");
        return result;
    }
}

class Magician {
    private int guessedAge, guessedMoney;

    // the second main class of the program
    public void magicTrick(Assistant assistant, Spectator spectator){

        // where newPaper is initialized
        Paper newPaper = new Paper();

        spectator.writeOnPaper(newPaper);
        assistant.readPaper(newPaper);
        assistant.calculateResult();
        assistant.sayResult();

        // using the returned (int) result to calculate the spectator's age and money
        calculateResult(assistant.sayResult());
        announceResult();

    }

    private void calculateResult(int assistantsResult){
        System.out.println("[Magician]: let me see!");
        assistantsResult += 115;
        guessedAge = assistantsResult/100;
        guessedMoney = assistantsResult%100;
    }

    private void announceResult(){
        System.out.println("[Magician]: You're " + guessedAge + " and you have " + guessedMoney + " euros in your pocket!");
    }

}