import java.util.Scanner;

public class CalculadoraEnergia {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=========================================");
        System.out.println("     SS AR CONDICIONADO E ELÉTRICA       ");
        System.out.println("    Sistema de Gestão de Eficiência      ");
        System.out.println("=========================================");
        
        System.out.print("Digite a potência do aparelho (em Watts): ");
        double potencia = scanner.nextDouble();
        
        System.out.print("Digite as horas de uso por dia: ");
        double horas = scanner.nextDouble();
        
        System.out.print("Digite os dias de uso no mês: ");
        double dias = scanner.nextDouble();
        
        double consumoKwh = (potencia * horas * dias) / 1000;
        double custoEstimado = consumoKwh * 0.85;
        
        System.out.println("\n================ RESULTADO ================");
        System.out.printf("Consumo Mensal Calculado: %.2f kWh\n", consumoKwh);
        System.out.printf("Custo Mensal Estimado: R$ %.2f\n", custoEstimado);
        System.out.println("=========================================");
        
        scanner.close();
    }
}