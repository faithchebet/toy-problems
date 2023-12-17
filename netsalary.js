const KRA_PERCENTAGE = 0.30; 
const NHIF_PERCENTAGE = 0.05; 
const NSSF_PERCENTAGE = 0.08; 

function calculateNetSalary(basicSalary, benefits) {
    const tax = basicSalary * KRA_PERCENTAGE;


    const nhifDeduction = basicSalary * NHIF_PERCENTAGE;
    const nssfDeduction = basicSalary * NSSF_PERCENTAGE;

    
    const grossSalary = basicSalary + benefits;

    
    const netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);

    return netSalary;
}
