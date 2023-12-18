function calculateNetSalary(basicSalary, interest) {
    const KRA_PERCENTAGE = 0.30;  //kra tax rate//
    const NHIF_PERCENTAGE = 0.17; //nhif tax rate//
    const NSSF_PERCENTAGE = 0.06; //nssf tax rate//

    const tax = basicSalary * KRA_PERCENTAGE;
    const nhifDeduction = basicSalary * NHIF_PERCENTAGE;
    const nssfDeduction = basicSalary * NSSF_PERCENTAGE;

    
    const grossSalary = basicSalary + interest; //calculate gross salary//

    const netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction); //calculate net salary//

    return netSalary;
}
console.log(calculateNetSalary(90000, 11000));